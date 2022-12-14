const ORDER_ASC_BY_PRICE = "max-min";
const ORDER_DESC_BY_PRICE = "min-max";
const ORDER_BY_PROD_COUNT = "Rel.";
var currentProductsArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_PRICE)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_PRICE){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

function showProductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let prod = currentProductsArray[i];
        if (((minCount == undefined) || (minCount != undefined && parseInt(prod.cost) >= minCount)) &&
        ((maxCount == undefined) || (maxCount != undefined && parseInt(prod.cost) <= maxCount))){


        //<a href="URL DESTINO"><img src="URL DE LA IMAGEN"></a>    
        htmlContentToAppend+=`
        <div class="card" style="width: 18rem; margin-right: 10px; margin-bottom: 10px;">
            <img class="card-img-top" src="` + prod.imgSrc + `" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">`+prod.name+`</h5>
                <p class="card-text">`+ prod.description+`</p>
                <p class="card-text">Precio: `+ prod.cost+`</p>
                <p class="card-text">Cantidad: `+ prod.soldCount+`</p>
                
            </div>
        </div><br>
        `
    }

    document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
}
}

/*`
        <li class="products"> `+ `<img src="` + prod.imgSrc + `" alt="` + `" class="img-products">
        `+`Nombre:`+ prod.name +`<hr>`+ `Desc: ` + prod.description +`<hr>`+ `Costo: `+ prod.cost + `<hr>`+ `Vendidos:`+ prod.soldCount +`</li>
        `*/ 
       

function sortAndShowProducts(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentProductsArray = categoriesArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

    
    showProductsList();
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowProducts(ORDER_ASC_BY_PRICE, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_PRICE);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_PRICE);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProductsList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
       
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showProductsList();
    });
});
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var product;
var text;
var int = 0;



function showProduct(product) {
    let htmlContentToAppend = "";
    
    for(let i = 0; i < product.articles.length; i++){
    var productElement = product.articles[i];
    
    //style="height: 1000px; width: 1000px;
    // estilos sacados de bootstrap 5 
    
        htmlContentToAppend +=`
            
            <div id="reset" class="cart_section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="cart_container">
                                
                                <div class="cart_items">
                                    <ul class="cart_list">
                                        <li class="cart_item clearfix">
                                            <div class="cart_item_image"><img src="` + productElement.src + `" alt=""></div>
                                            <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                <div class="cart_item_name cart_info_col">
                                                    <div class="cart_item_title">Name</div>
                                                    <div class="cart_item_text">` + productElement.name + `</div>
                                                </div>
                                                <div class="cart_item_color cart_info_col">
                                                    <div class="cart_item_title">Currency</div>
                                                    <div class="cart_item_text">` + productElement.currency + `</div>
                                                </div>
                                                <div class="cart_item_quantity cart_info_col">
                                                    <div class="cart_item_title">Quantity</div>
                                                    <div class="cart_item_text">
                                                        <div class="col-md-4 quantity">
                                                            <input id="cantArticules" style="width:60px;" type="text" class="form-control quantity-input" onChange="cantArticulos(this.value,product);">
                                                         </div>
                                                    </div>
                                                </div>
                                                <div class="cart_item_price cart_info_col">
                                                    <div class="cart_item_title">Price</div>
                                                    <div class="cart_item_text">` + productElement.unitCost + `</div>
                                                </div>
                                                <div class="cart_item_total cart_info_col">
                                                    <div class="cart_item_title">Total</div>
                                                    <div id="totalCalculado" class="cart_item_text" value="1"></div>
                                                    
                                                </div>
                                                
                                            
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="container">
                                    <!-- Trigger the modal with a button -->
                                    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Forma de Pago</button>
                                
                                    <!-- Modal -->
                                    <div class="modal fade" id="myModal" role="dialog">
                                    <div class="modal-dialog">
                                    
                                        <!-- Modal content-->
                                        <div style="display:inline-block; width: 800px; position: absolute;" class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                <h4 class="modal-title">Seleccione una forma de pago</h4>
                                            </div>
                                            <div class="modal-body">
                                            <div class="row justify-content-center">
                                                <div class="col-lg-12">
                                                    <div class="card">
                                                    <span class="container" >Seleccione un metodo de envio</span>
                                                    <select id="envio" class="form-select" aria-label="Default select example">
                                                        
                                                        <option value="1">Envio normal - 10% del valor del producto</option>
                                                        <option value="2">Envio urgente - 30% del valor del producto</option>
                
                                                  </select>
                                                    </div>
                                                </div>
                                            </div>                                                

                                                <div class="row justify-content-center">
                                                <div class="col-lg-12">
                                                    <div class="card">
                                                        <div class="row">
                                                            <div class="col-lg-3 radio-group">
                                                                <div class="row d-flex px-3 radio"> <img class="pay" src="https://i.imgur.com/WIAP9Ku.jpg">
                                                                    <p class="my-auto">Tarjeta de Credito</p>
                                                                </div>
                                                                <div class="row d-flex px-3 radio gray"> <img class="pay" src="https://i.imgur.com/OdxcctP.jpg">
                                                                    <p class="my-auto">Tarjeta de Debito</p>
                                                                </div>
                                                                <div class="row d-flex px-3 radio gray mb-3"> <img class="pay" src="https://i.imgur.com/cMk1MtK.jpg">
                                                                    <p class="my-auto">PayPal</p>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-5">
                                                                <div class="row px-2">
                                                                    <div class="form-group col-md-6"> <label class="form-control-label">Nombre del Titular</label> <input type="text" id="cname" name="cname" placeholder="Juan Romero"> </div>
                                                                    <div class="form-group col-md-6"> <label class="form-control-label">Numero de tarjeta</label> <input type="text" id="cnum" name="cnum" placeholder="1111 2222 3333 4444"> </div>
                                                                </div>
                                                                <div class="row px-2">
                                                                    <div class="form-group col-md-6"> <label class="form-control-label">Vencimiento</label> <input type="text" id="exp" name="exp" placeholder="YYYY"> </div>
                                                                    <div class="form-group col-md-6"> <label class="form-control-label">CVV</label> <input type="text" id="cvv" name="cvv" placeholder="***"> </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 mt-2">
                                                                <div class="row d-flex justify-content-between px-4">
                                                                    <p class="mb-1 text-left">Subtotal</p>
                                                                    <h6 id="subTotal" class="mb-1 text-right"></h6>
                                                                </div>
                                                                
                                                                <div class="row d-flex justify-content-between px-4" id="tax">
                                                                    <p class="mb-1 text-left">IVA (1.22)</p>
                                                                    <h6 id="totalTax" class="mb-1 text-right"></h6>
                                                                </div> 
                                                                <div class="row d-flex justify-content-between px-4" id="tax">
                                                                    <p class="mb-1 text-left">Costo envio</p>
                                                                    <h6 id="costoEnvio" class="mb-1 text-right"></h6>
                                                                </div> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p id="error"><p>
                                                    <div class="order_total">
                                                                            <div class="order_total_content text-md-right">
                                                                                <div class="order_total_title">Valor total:</div>
                                                                                <div id="orderTotal" class="order_total_amount"></div>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div class="cart_buttons"><button class="button cart_button_checkout" onclick="vaciar();">Vaciar </button>                      <button class="button cart_button_checkout" type="submit" onclick="verificacion();"> Agregar al Carrito</button></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>

        
                
            
           
            ` 
    }

    document.getElementById("cart-container").innerHTML = htmlContentToAppend;
   
}





    



function verificacion(){

    let htmlContentToAppend = "";
    var nombre = document.getElementById("cname").value;
    var numero = document.getElementById("cnum").value;
    var fecha = document.getElementById("exp").value;
    var codigo = document.getElementById("cvv").value;
    var cant = parseInt(document.getElementById("html").value);
    if((nombre == "")|| (numero =="" )||(fecha =="" )|| (codigo =="")||(numero.length < 8)||(fecha.length<4)||(codigo.length<3)){
        let htmlContentToAppend = "";
        htmlContentToAppend+=`
            <div class="alert alert-danger" role="alert">
                Uno de los datos ingresados no es correcto ! 
            </div>
            `
        document.getElementById("error").innerHTML = htmlContentToAppend;
        

    }else if(cant == 0){
        let htmlContentToAppend = "";
        htmlContentToAppend+=`
            <div class="alert alert-danger" role="alert">
               Debe seleccionar al menos un producto ! 
            </div>
            `
        document.getElementById("error").innerHTML = htmlContentToAppend;

    }else{
        htmlContentToAppend = "";
        htmlContentToAppend+=`
        <div class="alert alert-success" role="alert">
                Su compra se ha realizado con exito !
        </div>
        `
        document.getElementById("error").innerHTML = htmlContentToAppend;
        
        

    }
}



/*<p id="totalCalculado" class="cart_item_text">a</p> */

function cantArticulos(int,product){
    let htmlContentToAppend = "";
    
    
    var where = document.getElementById("totalCalculado");
    var otherWhere = document.getElementById("subTotal");
    var orderTotal = document.getElementById("orderTotal");
    var otherWhereTax = document.getElementById("totalTax");
    for(let i = 0; i < product.articles.length; i++){
        var elem = product.articles[i];
        var total = int * elem.unitCost;
        var totalTax = int * elem.unitCost * 1.22;
        
        htmlContentToAppend+=`
            <input  id= "html" style="width:90px;" type="text" class="form-control quantity-input" value="`+ total +` UYU"> 
            
        `
        where.innerHTML = htmlContentToAppend;
        otherWhere.innerHTML = htmlContentToAppend;
        htmlContentToAppend = "";
        htmlContentToAppend+=`
        <input  id= "html" style="width:90px;" type="text" class="form-control quantity-input" value="`+ totalTax +` UYU"> 
        
        `
        
        otherWhereTax.innerHTML = htmlContentToAppend;
        orderTotal.innerHTML = htmlContentToAppend;
    }
}




document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if(resultObj.status === "ok"){
            product = resultObj.data;
            showProduct(product);
            cantArticulos(int,product);
            document.getElementById("envio").addEventListener("click", function(){
                {
                    let htmlContentToAppend = "";
                    var send = document.getElementById("envio").value;
                    var resultado = document.getElementById("orderTotal");
                    var envios = document.getElementById("costoEnvio");
                    var iva = parseInt(document.getElementById("costoEnvio").innerHTML);
                    var totales = parseInt(document.getElementById("html").value);
                    var envioNormal = totales * 0.10;
                    var envioRapido = totales * 0.30;

                    if(send == '1'){
                        envios.innerHTML = envioNormal;
                        totales = totales + iva + envioNormal;
                    }else if(send == '2'){
                        envios.innerHTML = envioRapido;
                        totales = totales + iva + envioRapido;

                    }
                    htmlContentToAppend+=`
                        <input  id= "html" style="width:90px;" type="text" class="form-control quantity-input" value="`+ totales +` UYU ">
                        
                        `
                    resultado.innerHTML = htmlContentToAppend;
                
                }
            });
           
            
            // el codigo a continuacion fue sacado de bootstrap 5, y permite la seleccion de tarjetas de credito.
            $(document).ready(function(){

                $('.radio-group .radio').click(function(){
                $('.radio').addClass('gray');
                $(this).removeClass('gray');
                });
                
                $('.plus-minus .plus').click(function(){
                var count = $(this).parent().prev().text();
                $(this).parent().prev().html(Number(count) + 1);
                });
                
                $('.plus-minus .minus').click(function(){
                var count = $(this).parent().prev().text();
                $(this).parent().prev().html(Number(count) - 1);
                });
                
                });
            

            
            
        }
        getJSONData(CART_BUY_URL).then(function(resultObj){
            if(resultObj.status === "ok"){
                text = resultObj.data;
                //verificacion(text);
    
            }
        });
    
    });
});



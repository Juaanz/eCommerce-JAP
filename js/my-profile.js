//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

/*let storeMe = {
  myBool: true
}

localStorage.setItem('test', JSON.stringify(storeMe))
let result = JSON.parse(localStorage.getItem('test')) */


//localStorage.setItem('fT');

function showProfile(){
    
    let htmlContentToAppend = "";
    //el codigo a continuacion fue sacado de bootstrap 4
    htmlContentToAppend = `
        
        <div class="wrapper bg-white mt-sm-5">
            <h4 class="pb-4 border-bottom">Ajustes de cuenta</h4>
            <div class="d-flex align-items-start py-3 border-bottom"> <img src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="img" alt="">
                <div class="pl-sm-4 pl-2" id="img-section"> <b>Foto de perfil</b>
                    <p>Solo archivos .png menores a 1MB</p> <button class="btn button border"><b>Subir</b></button>
                </div>
            </div>
            <div class="py-2">
                <div class="row py-2">
                    <div class="col-md-6"> <label for="firstname">Nombre</label> <input type="text" id="nombre" class="bg-light form-control" placeholder="`+sessionStorage.getItem('login')+`"> </div>
                    <div class="col-md-6 pt-md-0 pt-3"> <label for="lastname">Apellido</label> <input type="text" id="apellido" class="bg-light form-control" placeholder="Romero"> </div>
                    <div class="col-md-6"> <label for="firstname">Edad</label> <input type="text" id="years" class="bg-light form-control" placeholder="18"> </div>

                </div>
                <div class="row py-2">
                    <div class="col-md-6"> <label for="email">Email</label> <input type="text" id="emailAddress"  class="bg-light form-control" placeholder="`+sessionStorage.getItem('login')+`@email.com"> </div>
                    <div class="col-md-6 pt-md-0 pt-3"> <label for="phone">Telefono</label> <input type="tel" id="telefono" class="bg-light form-control" placeholder="+598 098 888 888"> </div>
                </div>
                
                </div>
                <div class="py-3 pb-4 border-bottom"> <button class="btn border button" type="submit" onclick="enviar();">Guardar Cambios</button> <button class="btn border button" onclick="cancelar();">Cancelar</button> </div>
                
            </div>
        </div>
       
        
        
    `
    //localStorage.setItem("fT", false);
    document.getElementById("profile").innerHTML = htmlContentToAppend;
}
function cancelar(){
    location.reload();
}

function verificacion(){

    let htmlContentToAppend = "";
    var name = document.getElementById("nombre").value;
    var lastName = document.getElementById("apellido").value;
    var dEmail = document.getElementById("email").value;
    var number = document.getElementById("telefono").value;
    var edad = document.getElementById("years").value;
    
    if((name == "")|| (lastName =="" )||(dEmail =="" )|| (number =="")|| (edad =="")||(number.length<9)){
        document.getElementById("primer-perfil").innerHTML="";
        htmlContentToAppend+=`
            <div class="alert alert-danger" role="alert">
                Alguno de los datos no fue completado. 
            </div>
            `
        document.getElementById("error").innerHTML = htmlContentToAppend;
        return false;
        
        
    }
    //
    return true;
    

}
function cargarDatos(){

    //let htmlContentToAppend = "";
    var name = localStorage.getItem('name');
    var lastName = localStorage.getItem('lastName');
    var dEmail = localStorage.getItem('emAddress');
    var number = localStorage.getItem('number');
    var edad = localStorage.getItem('years');
    
    if((name == "")|| (lastName =="" )||(dEmail =="" )|| (number =="")|| (edad =="")||(name == null)|| (lastName == null )||(dEmail == null )|| (number == null)|| (edad == null)){
        
        return false;
        
        
    }
    
    return true;
    

}




function enviar(){
    
    if(verificacion()){
        guardarPerfil();
    }else{
        showProfile();
    }
}
//var primeraVez = true;
function guardarPerfil(){
    //localStorage.setItem("ft",false);
    var name = document.getElementById("nombre").value;
    var lastN = document.getElementById("apellido").value;
    var address = document.getElementById("emailAddress").value;
    var number = document.getElementById("telefono").value;
    var edad = document.getElementById("years").value;
   
    document.getElementById("profile").innerHTML = "";
    document.getElementById("error").innerHTML = "";

    var sName = JSON.stringify(name);
    var sLast = JSON.stringify(lastN);
    var sAdd = JSON.stringify(address);
    var sNum = JSON.stringify(number);
    var sYear = JSON.stringify(edad);
    


    localStorage.setItem('name',sName.replace(/\"/g, ""));
    localStorage.setItem('lastName',sLast.replace(/\"/g, ""));
    localStorage.setItem('emAddress',sAdd.replace(/\"/g, ""));
    localStorage.setItem('number',sNum.replace(/\"/g, ""));
    localStorage.setItem('years',sYear.replace(/\"/g, ""));
    document.getElementById("primer-perfil").innerHTML="";
    
    let htmlContentToAppend = "";
    htmlContentToAppend = `
    <div style="margin-top: 1em;" class="container">
        <div class="main-body">
            <div class="col-md-8">
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Nombre completo</h6>
                        </div>
                        <div class="col-sm-9 text-muted">
                            `+localStorage.getItem('name')+` `+ localStorage.getItem('lastName')+`
                        </div>
                        </div>
                        <hr>
                        <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-muted">
                            `+localStorage.getItem('emAddress')+`
                        </div>
                        </div>
                        <hr>
                        <div class="row">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Telefono</h6>
                        </div>
                        <div class="col-sm-9 text-muted">
                           `+localStorage.getItem('number')+`
                        </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Edad</h6>
                            </div>
                            <div class="col-sm-9 text-muted">
                                `+localStorage.getItem('years')+`
                            </div>
                        </div><hr>
                        <div class="row">
                        <div class="col-sm-12">
                            <a class="btn btn-info " target="__blank" onclick="showProfile();">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `
    document.getElementById("profile").innerHTML = htmlContentToAppend;



}



document.addEventListener("DOMContentLoaded", function (e){
    //primera();
    if(cargarDatos()){
        document.getElementById("primer-perfil").innerHTML="";
        let htmlContentToAppend = "";
        htmlContentToAppend = `
        <div style="margin-top: 1em;"class="container">
            <div class="main-body">
                <div class="col-md-8">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Nombre completo</h6>
                            </div>
                            <div class="col-sm-9 text-muted">
                                `+localStorage.getItem('name')+` `+ localStorage.getItem('lastName')+`
                            </div>
                            </div>
                            <hr>
                            <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Email</h6>
                            </div>
                            <div class="col-sm-9 text-muted">
                                `+localStorage.getItem('emAddress')+`
                            </div>
                            </div>
                            <hr>
                            <div class="row">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Telefono</h6>
                            </div>
                            <div class="col-sm-9 text-muted">
                            `+localStorage.getItem('number')+`
                            </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Edad</h6>
                                </div>
                                <div class="col-sm-9 text-muted">
                                    `+localStorage.getItem('years')+`
                                </div>
                            </div><hr>
                            <div class="row">
                            <div class="col-sm-12">
                                <a class="btn btn-info " target="__blank" onclick="showProfile();">Edit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                `
        document.getElementById("profile").innerHTML = htmlContentToAppend;
        //guardarPerfil();

    }

        
    
});
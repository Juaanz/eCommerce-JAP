//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function validarInicioSesion(){
    var idemail, password1;
    idemail = document.getElementById("email").value;
    password1 = document.getElementById("pass").value;
    if((idemail=="")&&(password1=="")){
        alert("Todos los campos son obligatorios.");
        return false;
    }else if(idemail.length>20){
        alert("El email debe tener menos de 20 caracteres.");
        document.getElementById("email").value = "";
        document.getElementById("email").focus();
        return false;
    }else if(password1.length>10){
        alert("La contraseña es demasiado extensa.");
        document.getElementById("password").focus();
        return false;
    }else if(!(idemail=="")&&!(password1=="")){
        sessionStorage.setItem('login', email.value);
        //location.replace('index.html');
        return true;
    }
    

}



function direccionar(){
    if(validarInicioSesion()){
        window.location.href =  "file:///C:/Users/Usuario/Desktop/Facultad/Jovenes%20a%20Programar/Desarrollo%20Web/OBLIGATORIO/Workspace+inicial/index.html"//https://juaanz.github.io/ecommerce-jap/";
         
    }
}
function cargarErrores(id, idMensaje){
    var elementNombre = document.getElementById(id);
    var elementError = document.getElementById(idMensaje);
    if(elementNombre.value==''){
        elementError.style.display = "block";
        elementError.style.border = "block";
        elementError.innerHTML = "Debe ingresar un " + elementNombre.id;
        elementNombre.classList.add("error");
    }else{
        elementNombre.classList.remove("error");
        elementError.innerHTML="";
}

}
document.addEventListener("DOMContentLoaded", function(e){
   
});


//Creamos la funcion login
function login() {

    //captura la info del input del mail:
    let email = document.getElementById("email").value;

    // capturamos la info del password
    let password = document.getElementById("password").value;

    //imprima el dato
    console.log(email);
    console.log(password);


//verificamos si el email y el password son correctos
    if(email == "zapallito123@gmail.com" && password == "1234"){
    alert("Te vas a loguear");

    //redireccionamos a la pagina perfil.html
    location.href = "perfil.html";
    }else{
        alert("Email o Password incorrectos");
        location.href = "error.html"
    }

}
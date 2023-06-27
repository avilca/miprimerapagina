function showAlert() { 
    alert('Hola compañeros de Egg, esta es una alerta desde JavaScript!'); 
}

/* evento clilc para moviles ne javascript*/
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                  classList.toggle("nav-links-responsive")})
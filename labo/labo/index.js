const formulario = document.forms[0];

formulario.addEventListener("submit", (e) =>{
    //e.preventDefault();
    console.log("Hola");
});

document.getElementById("txtNombre").addEventListener("keydown", (e) =>{
    e.preventDefault();
    console.log(e);
}
)

    
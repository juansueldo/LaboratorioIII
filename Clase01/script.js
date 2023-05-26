function saludar(){
    alert("Hola mundo");
}
const handlerClick = () =>{
    alert("Hola mundo");
}
//document hace referencia al documento HTML
//getElementById es un metodo de la referencia document
//recibe un identificador del elemento que se recibe
// null es tipo de direccion de memoria, es 0 ya
let button;

window.addEventListener("load", function(){
    document.getElementById("btnSaludo").addEventListener("click", () => alert("Hola mundo"));
})


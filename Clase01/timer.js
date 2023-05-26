
function saludar(){
    alert("Hola mundo!!!!!");
}
console.log("Inicio");
setTimeout(saludar, 3000);
// Otra forma valida es
setTimeout(()=>{console.log("Hola mundo!!!!!");}, 5000);
console.log("Fin");
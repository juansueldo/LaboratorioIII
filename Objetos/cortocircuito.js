function miFuncion(){
    console.log("Se invoco miFuncion");
}
// Un solo ampersand no es corto circuito, ejectucuta ambos lados de la condicion, sin importar si hay un false
if(false & miFuncion()){
    console.log("If");
}
else{
    console.log("else");
}
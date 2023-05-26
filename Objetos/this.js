//console.log(this);

/*Son lo mismo:
window.console.log("Hola");
console.log("Hola");
this.console.log("Hola");*/

/*function miFuncion(){
    console.log(this);
}
//miFuncion();

var objeto = {
    nombre: "Juan",
    miFuncion(){
        console.log(this);
    },
};
//var y const van a un scope intermedio, var solo va a un scope global
window.miFuncion();
window.objeto.miFuncion();
*/
const persona ={
    nombre: "Juan",
    edad: 34,
    altura: 1.75,
    saludar: function(gusto){
        console.log(`Hola,  mi nombre es ${this.nombre} y mi edad es ${this.edad} y me gusta el helado de ${gusto}`);
        //console.log(this);
    },
    despedir: () =>{
        console.log(`Chau,  mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
        //console.log(this);
    }
}

//persona.saludar();
//persona.despedir();

/*function ejecutora(callback){
    callback();
}

saludar = persona.saludar;
saludar();

setTimeout(()=>{
    persona.saludar();
},5000);

ejecutora(()=>{
    persona.saludar();
});

*/
const mascota = {
    nombre: "Colita",
    edad: 3,
    altura: 0.5,
    tipo: "Perro"
}

const saludar = persona.saludar;

saludar.call(persona, "Chocolate");
saludar.apply(mascota,["Frutilla"]);
const saludarMascota = saludar.bind(mascota);

saludarMascota("Dulce de leche");

for (const key in mascota) {
    if (Object.hasOwnProperty.call(persona, key)) {
        const element = persona[key];
        console.log(element);
    }
}
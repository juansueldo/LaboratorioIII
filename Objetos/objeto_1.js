
//Declaracion de objetos
// - objeto literal
// - funcion constructora (new)
// - Object.create()


const obj1 = {};
const obj2 = new Object();
const obj3 = new Object(124);
const obj4 = new Object("Hola");
const obj5 = new Object(true);

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);

// Todo lo que no es un tipo de dato primitivo es un objeto en javascript
//Las funciones son objetos

const miObjeto = {
    cadena: "pablabra",
    numero: 23,
    array: [1,2,4,5,6],
    objeto: {a: "jose", b: 23, c: false},
    booleano: false,
    funcion: function() {
        console.log("Hola mundo");
    },
    "3d": true
};

let atributo = "3d";
console.log(miObjeto);

console.log(miObjeto.cadena);

console.log(miObjeto[atributo]);

const entradas = Object.entries(miObjeto);

console.log(entradas);

for(let i = 0; i < entradas.length; i++){
    let [key, value] = entradas[i];
    console.log(key, "=", value);
    //console.log(entradas[i][0], "=", entradas[i][1]);
}
console.log("***************************************************");


entradas.forEach(entradas => {
    let [key, value] = entradas;
    console.log(key, "=", value);
    //console.log(entradas[0], "=", entradas[1]);
});

console.log("***************************************************");

for(const entrada of entradas){
    //let [key, value] = entradas;
    //console.log(key, "=", value);
    console.log(entradas[0], "=", entradas[1]);
}
console.log("***************************************************");


const keys = Object.keys(miObjeto);
const valores = Object.values(miObjeto);

console.log(keys);
console.log(valores);
console.log("********************************************");
for(let i = 0; 1 < keys.length; i++){
    console.log(keys[i], "=", miObjeto[keys[i]]);
}
console.log("********************************************");
for(const key of keys){
    console.log(key, "=", miObjeto[key]);
}
console.log("********************************************");
keys.forEach((key) =>{
    console.log(key, "=", miObjeto[key]);
})

console.log("********************************************");

const personas ={
    pepe:{
        nombre: "Jose",
        edad: 30
    },
    lucho:{
        nombre: "Luis",
        edad: 23
    },
    nacho:{
        nombre: "Ignacio",
        edad:27
    }
}

const gente = Object.values(personas);

console.log(gente);

console.log("********************************************");

for(const key in miObjeto){
    console.log(key, "=", miObjeto[key]);
} 

const numeros = [23,21,45,25];

for(const index in numeros){
    console.log(numeros[index]);
}
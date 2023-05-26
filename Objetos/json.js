const miObjeto ={
    cadena: "palabra",
    numero: 23,
    array: [1,2,3],
    objeto: {
        a: "Juan",
        b: 21,
        c: false
    },
    booleano: false,
    function: function(){
        console.log("hola");
    }
}

const objeto_string = JSON.stringify(miObjeto);
console.log(typeof objeto_string);
console.log(objeto_string);
const objeto_string2 = JSON.parse(objeto_string);

console.log(typeof objeto_string2);

const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 21,
    email: "juan@gmail.com",
    sexo: "M",
    vacunado: true
};

localStorage.setItem("persona",JSON.stringify(persona));

const persona2 = JSON.parse(localStorage.getItem("persona"));

console.log(persona2);


const personas = [{
    nombre: "Juan",
    apellido: "Perez",
    edad: 21,
    email: "juan@gmail.com",
    sexo: "M",
    vacunado: true
    },
    {
    nombre: "Natalia",
    apellido: "Fernandez",
    edad: 20,
    email: "natalia@gmail.com",
    sexo: "F",
    vacunado: true
}
]

//Limpia solo un item
localStorage.removeItem("persona");
//Limpia todo
//localStorage.clear();
localStorage.setItem("personas",JSON.stringify(personas));

let listaPersonas = [];

if(localStorage.getItem("personas")){

    listaPersonas = [...JSON.parse(localStorage.getItem("personas"))];
}

console.log(listaPersonas);
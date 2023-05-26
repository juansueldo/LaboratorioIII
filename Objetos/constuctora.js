

function Persona(nombre, edad){
    let sexo = "";
    this.nombre = nombre;
    this.edad = edad;
    /*this.saludar = function(){
        console.log("Hola");
    };
    this.presentarse= function(){
        console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }*/
    this.getSexo = function(){
        return sexo;
    };
    this.setSexo =  function(value){
        sexo = value;
    };
}

Persona.prototype.saludar = function(){
    console.log("Hola" + Persona.queSoy);
};

Persona.prototype.presentarse = function(){
    console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
}

Persona.queSoy = "Una Persona";
/*function Persona(nombre, edad){
    obj = {};
    obj.nombre = nombre;
    obj.edad = edad;
    obj.saludar = function(){
        console.log("Hola");
    };

    return obj;
}

const per1 = Persona("Juan", 34);
const per2 = Persona("Christian", 39);


console.log(per1);
console.log(per2);
*/

const per1 = new Persona("Juan", 34);
const per2 = new Persona("Christian", 39);

per1.setSexo("M");
per1.presentarse();

console.log(per1.getSexo());
console.log(per2);
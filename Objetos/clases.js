class Animal{
    constructor(tipo, edad, sexo){
        this.tipo = tipo;
        this.edad = edad;
        this.sexo = sexo;
    }
    set Edad(value){
        this.edad = value;
    }
    get Edad(){
        return this.edad;
    }
    saludar = function () {
        console.log(`Hola, soy un animal de tipo ${this.tipo}, de sexo ${this.sexo} y tengo ${this.edad} años`);
    }
    cagar = function () {
        console.log(`Hola, cago donde sea`);
    }

    static SaludarEstatico(){
        console.log("Saludar estatico");
    }
}

Animal.SaludarEstatico();

const animal = new Animal("vaca", 3, "femenino");

class Mascota extends Animal{
    constructor(nombre, tipo, edad, sexo, vacunado){
        super(tipo, edad, sexo);
        this.nombre = nombre;
        this.vacunado = vacunado;
    }
    saludar = function () {

        console.log(`Hola, soy una mascota, me llamo ${this.nombre} de tipo ${this.tipo}, de sexo ${this.sexo} y tengo ${this.edad} años y ${
            this.vacunado?"estoy vacunado":"no estoy vacunado"}`//operador por corto circuito ${this.vacunado && "estoy vacunado"} 
            )
    }
    sonar = function (sonido) {
        console.log(sonido)
    }
}


const mascota = new Mascota("Miguel", "gato", 1, "femenino", false);


console.log(animal);
console.log(mascota);

mascota.saludar();
animal.saludar();


mascota.cagar();
animal.cagar();

mascota.sonar("Miauuuu");

mascota.Edad(9)
console.log(mascota.Edad());
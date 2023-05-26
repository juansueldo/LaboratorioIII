// una funcion es un objeto ejecutable, es un ciudadano de primera clase

function Animal(tipo, edad, sexo) {
  this.tipo = tipo;
  this.edad = edad;
  this.sexo = sexo;
}

Animal.saludar = function(){
  console.log("Saludar");
}

Animal.prototype.saludar = function () {
  console.log(`Hola, soy un animal de tipo ${this.tipo}, de sexo ${this.sexo} y tengo ${this.edad}`);
};

Animal.prototype.cagar = function () {
    console.log(`Hola, cago donde sea`);
  };

function Mascota(nombre, tipo, edad, sexo, vacunado) {
  Animal.call(this, tipo, edad, sexo);
  this.nombre = nombre;
  this.vacunado = vacunado;
}

Object.setPrototypeOf(Mascota.prototype, Animal.prototype);
Mascota.prototype.sonar = function (sonido) {
  console.log(sonido);
};


Mascota.prototype.saludar = function () {
  console.log(
    `Hola, soy una mascota, me llamo ${this.nombre} de tipo ${
      this.tipo
    }, de sexo ${this.sexo} y tengo ${this.edad} años y ${
      this.vacunado?"estoy vacunado":"no estoy vacunado"
    }`//operador por corto circuito ${this.vacunado && "estoy vacunado"}
  );
};
const animal = new Animal("Vaca", 3, "femenino");
const mascota = new Mascota("Miguel", "gato", 1, "femenino", false);


console.log(animal);
console.log(mascota);

mascota.saludar();
animal.saludar();

/*console.clear();
mascota.cagar();
animal.cagar();

mascota.sonar("Miauuuu");*/

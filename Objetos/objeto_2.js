const persona ={
    nombre: "Juan",
    edad: 34,
    saludar: function(){
        console.log("Hola mundo");
    },
    presentarse(){
        console.log(`Hola,, localidad ${this.localidad}`);
    }
}

console.log(persona);

persona['sexo'] = 'M';

console.log(persona);

persona.localidad = "Avellaneda";

console.log(persona);

persona.saludar();
persona.presentarse();

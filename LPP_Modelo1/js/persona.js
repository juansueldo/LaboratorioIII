export function Persona (id, nombre, edad, email, genero){
    this.id = id;
    this.nombre = nombre;
    this.edad = edad
    this.email = email;
    this.genero = genero;
}
function validarCadena(cadena, longitudMinima, longitudMaxima) {
  const aux = /^[a-zA-Z]+$/;
  return aux.test(cadena) && cadena.length >= longitudMinima && cadena.length <= longitudMaxima;
}

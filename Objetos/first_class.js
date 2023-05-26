
// una funcion es un ciudadano de primera clase
// es cuanado algo se puede tratar como cualquier otro valor
// - se puede asignar a una variable
// - se puede pasar como argumento a una funcion
// - se puede retornar como resultado de ejecutar una funcion

// - se puede asignar a una variable
const sumar = function(a, b){
    return a + b;
};

console.log(sumar(2,3));


// - se puede pasar como argumento a una funcion

function operar(a, b, operacion){
    return (operacion(a, b));
}

console.log(operar(2,3, sumar));

// - se puede retornar como resultado de ejecutar una funcion

function crearSumador(a){
    return function(b){
        return a + b;
    };
};


const sumarDos = crearSumador(2);

console.log(sumarDos(3));

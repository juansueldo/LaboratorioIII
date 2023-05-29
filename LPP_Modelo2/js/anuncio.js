export function Anuncio(id, titulo, transaccion, descripcion, precio, banios, autos, dormitorios){
    this.id = id;
    this.titulo = titulo;
    this.transaccion = transaccion;
    this.descripcion = descripcion;
    this.precio = precio;
    this.banios = banios;
    this.autos = autos;
    this.dormitorios = dormitorios;
} 
export function ValidarNro(numero){
    var retorno;
    let numeroValido = parseInt(numero);
    if (typeof numeroValido === 'number' && !isNaN(numeroValido)) {
        retorno = true;
    }
    else{
        retorno = false;
    }
    return retorno;
}
export function ValidarFloat(numero){
    var retorno;
    let numeroValido = parseFloat(numero);
    if (typeof numeroValido === 'number' && !isNaN(numeroValido)) {
        retorno = true;
    }
    else{
        retorno = false;
    }
    return retorno;
}

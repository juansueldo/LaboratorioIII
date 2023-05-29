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
    var retorno = false;
    if (typeof numero === 'number' && isNaN(numero)) {
        retorno = true;
    }
    return retorno; 
}

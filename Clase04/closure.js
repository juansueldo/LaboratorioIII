const matematicas = (function(){
    function sumar(a,b){
        return a+b;
    }
    function restar(a,b){
        return a-b;
    }
    function multiplicar(a,b){
        return a*b;
    }
    function dividir(a,b){
        if(!validarCero(b)){
            return a/b;
        }
    }
    function validarCero(a){
        return a === 0;
    }
    return{
        restar: restar,
        sumar: sumar,
        multiplicar: multiplicar,
        dividir: dividir

        /*restar,
        sumar,
        multiplicar,
        dividir*/
    };
})()
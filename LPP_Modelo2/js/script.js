import { Anuncio,ValidarNro,ValidarFloat } from "./anuncio.js";
import { actualizarTabla } from "./tabla.js";

const anuncios = JSON.parse(localStorage.getItem("anuncios")) || [];
const $seccionTabla = document.getElementById("tabla");
const $formulario = document.forms[0];
const $button = document.getElementById("button");
const $buttonCancel = document.getElementById("button-cancel");
const $titulo = document.getElementById("titulo");


window.addEventListener("click", (e)=>{
    if(e.target.matches("td")){
        const idAnuncio= e.target.parentElement.dataset.id;
        const selectedAnuncio = anuncios.find(per => per.id == idAnuncio);
        cargarFormulario($formulario, selectedAnuncio);
        $button.classList.remove("hidden-btn");
        $buttonCancel.classList.remove("hidden-btn");
        $titulo.textContent = "Modificar/Eliminar anuncio";
    }
    else if(e.target.matches("input[value='Eliminar']")){
        const id = parseInt($formulario.txtId.value);
        handlerDelete(id)
    }
    else if(e.target.matches("input[value='Cancelar']")){
        resetFormulario();
    }
});


$formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const {txtId, txtTitulo, rdoVenta, txtDescripcion, txtPrecio, txtCantidadBanos, txtCantidadAutos, txtCantidadDormitorios} = $formulario;

    if(txtId.value === ""){
        console.log("carga...");
        if(ValidarNro(txtCantidadBanos.value) && ValidarNro(txtCantidadAutos.value) && ValidarNro(txtCantidadDormitorios.value) && ValidarFloat(txtPrecio.value) && txtTitulo.value !== "" && txtDescripcion.value !== ""){
            const newAnuncio = new Anuncio(Date.now(), txtTitulo.value,rdoVenta.value,txtDescripcion.value, parseFloat(txtPrecio.value),parseInt(txtCantidadBanos.value), parseInt(txtCantidadAutos.value),parseInt(txtCantidadDormitorios.value));
            handlerCreate(newAnuncio);
            resetFormulario();
        }
        else{
            alert("Ingrese datos validos");
        }  
    }
    else{
        console.log("modificacion...");
        if(ValidarNro(txtCantidadBanos.value) && ValidarNro(txtCantidadAutos.value) && ValidarNro(txtCantidadDormitorios.value) && ValidarFloat(txtPrecio.value) && txtTitulo.value !== "" && txtDescripcion.value !== ""){
            const updateAnuncio = new Anuncio(parseInt(txtId.value),txtTitulo.value,rdoVenta.value,txtDescripcion.value, parseFloat(txtPrecio.value),parseInt(txtCantidadBanos.value), parseInt(txtCantidadAutos.value),parseInt(txtCantidadDormitorios.value));
            handlerUpdate(updateAnuncio);
            resetFormulario();
        }
        else{
            alert("Ingrese datos validos, no se modifico el anuncio");
        }
    }
    

});

function handlerCreate(nuevoAnuncio){
    anuncios.push(nuevoAnuncio);
    actualizarStorage("anuncios", anuncios);
    actualizarTabla($seccionTabla, anuncios);
}
function handlerUpdate(updateAnuncio){
    const index = anuncios.findIndex((anuncio) => anuncio.id === updateAnuncio.id);
    anuncios.splice(index, 1, updateAnuncio )
    actualizarStorage("anuncios", anuncios);
    actualizarTabla($seccionTabla, anuncios);
}
function handlerDelete(id){
    const index = anuncios.findIndex((anuncio) => anuncio.id === id);
    anuncios.splice(index, 1);
    actualizarStorage("anuncios", anuncios);
    actualizarTabla($seccionTabla, anuncios); 
    resetFormulario();
}
function actualizarStorage(clave, data){
    localStorage.setItem(clave, JSON.stringify(data));
}
function cargarFormulario(formulario, anuncio){
    formulario.txtId.value = anuncio.id;
    formulario.txtTitulo.value = anuncio.titulo;
    formulario.rdoVenta.value = anuncio.transaccion;
    formulario.txtDescripcion.value = anuncio.descripcion;
    formulario.txtPrecio.value = anuncio.precio;
    formulario.txtCantidadBanos.value = anuncio.banios;
    formulario.txtCantidadAutos.value = anuncio.autos;
    formulario.txtCantidadDormitorios.value = anuncio.dormitorios;
}
function resetFormulario(){
    $button.classList.add("hidden-btn");
    $buttonCancel.classList.add("hidden-btn");
    $titulo.textContent = "Llena el formulario de Alta";
    $formulario.reset();
}

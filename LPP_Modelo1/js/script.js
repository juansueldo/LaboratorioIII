import { actualizarTabla } from "./tabla.js";
import { Persona } from "./persona.js";

const personas = JSON.parse(localStorage.getItem("personas")) || [];
const $seccionTabla = document.getElementById("tabla");
const $formulario = document.forms[0];
const $button = document.getElementById("button");
const $titulo = document.getElementById("titulo");

window.addEventListener("click", (e)=>{
    if(e.target.matches("td")){
        const idPersona = e.target.parentElement.dataset.id;
        const selectedPersona = personas.find(per => per.id == idPersona);
        cargarFormulario($formulario, selectedPersona);
        $button.classList.remove("button");
        $titulo.textContent = "Modificar/Eliminar persona";
    }
    else if(e.target.matches("input[value='Eliminar Persona']")){
        const id = parseInt($formulario.txtId.value);
        handlerDelete(id)
    }
});

$formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const {txtId, txtEdad, txtNombre, txtEmail, rdoGenero} = $formulario;

    if(txtId.value === ""){
        console.log("carga...");
        const newPersona = new Persona(Date.now(), txtNombre.value, parseInt(txtEdad.value), txtEmail.value, rdoGenero.value);
        handlerCreate(newPersona);
    }
    else{
        console.log("modificacion...");
        const updatePersona = new Persona(parseInt(txtId.value), txtNombre.value, parseInt(txtEdad.value),txtEmail.value, rdoGenero.value);
        handlerUpdate(updatePersona);
    }
    $formulario.reset();
    $button.classList.add("button");
    $titulo.textContent = "Alta persona";
});

function handlerCreate(nuevaPersona){
    personas.push(nuevaPersona);
    actualizarStorage("personas", personas);
    actualizarTabla($seccionTabla, personas);
}

function handlerUpdate(updatePersona){
    const index = personas.findIndex((persona) => persona.id === updatePersona.id);
    personas.splice(index, 1, updatePersona )
    actualizarStorage("personas", personas);
    actualizarTabla($seccionTabla, personas);
}

function handlerDelete(id){
    const index = personas.findIndex((persona) => persona.id === id);
    personas.splice(index, 1);
    actualizarStorage("personas", personas);
    actualizarTabla($seccionTabla, personas); 
    $formulario.reset();
    $button.classList.add("button");
    $titulo.textContent = "Alta persona";
}
function actualizarStorage(clave, data){
    localStorage.setItem(clave, JSON.stringify(data));
}
function cargarFormulario(formulario, persona){
    formulario.txtId.value = persona.id;
    formulario.txtNombre.value = persona.nombre;
    formulario.txtEdad.value = persona.edad;
    formulario.txtEmail.value = persona.email;
    formulario.rdoGenero.value = persona.genero;
}
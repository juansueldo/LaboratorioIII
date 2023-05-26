import {personas as people} from "./data.js";
import {actualizarTabla} from "../js/tabla.js";
import { Persona } from "./persona.js";

const $seccionTabla = document.getElementById("tabla");
const $formulario = document.forms[0];
const personas = JSON.parse(localStorage.getItem("personas")) || [];


// window.addEventListener("click", (e)=>{
//     if(e.target.matches("td")){
//         const id = e.target.parentElement.dataset.id;
//         //console.log(id);

//         const selectedPersona = personas.find((per)=>{ per.id === id;})

//         cargarFormulario($formulario, selectedPersona)
//     }
//     //else if(){}
// });
localStorage.setItem("personas", JSON.stringify(people));







$formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const {txtId, txtNombre, txtEmail, rdoGenero} = $formulario;
    if(txtId.value === ""){
        //Persona nueva
        const newPersona = new Persona(Date.now(), txtNombre.value,txtEmail.value, rdoGenero.value);
        console.log(newPersona);
        handlerCreate(newPersona);
        cargarFormulario($formulario, newPersona);
    }
    else{
        //Update persona
        const updatePersona = new Persona(parseInt(txtId.value), txtNombre.value,txtEmail.value, rdoGenero.value);
        handlerUpdate(updatePersona);
        cargarFormulario($formulario, updatePersona);
    }
    $formulario.reset();
});



function handlerCreate(nuevaPersona){
    personas.push(nuevaPersona);
    actualizarStorage("personas", nuevaPersona);
    actualizarTabla($seccionTabla,personas);
}

function handlerUpdate(updatePersona){
   const index = personas.findIndex((persona) => persona.id === updatePersona.id);
}

function handlerDelete(id){
    const index = personas.findIndex((persona) => persona.id === id);
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


// /*console.log(document);
// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.title);
// console.log(document.documentElement.lang);
// console.log(document.documentElement.appendChild);
// console.log(document.links);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);*/

// const $parrafo = document.getElementById("parrafo1");

// //Atributos gettter y setter / notacion de punto
// //setAttribute getAttribute removeAttribute toggleAttribute
// $parrafo;

// console.log($parrafo);
// const $txtNombre = document.getElementsByName("nombre")[0];
// console.log($txtNombre.getAttribute("placeholder"));
// $txtNombre.setAttribute("placeholder", "Dale hermano escribi");
// console.log($txtNombre.placeholder);
// $txtNombre.placeholder = "write your name";
// console.log($txtNombre.hasAttribute("placeholder"));
// $txtNombre.removeAttribute("placeholder");
// console.log($txtNombre.hasAttribute("placeholder"));

// //Desde el 2015 se pueden dar atributos personalizados

// const $lista = document.querySelector("ul");
// console.log($lista.dataset.description);
// console.log($lista.getAttribute("data-description"));
// $lista.dataset.description = "Lista nueva";
// $lista.setAttribute("data-description", "Es una lista hermano");

// console.log(document.querySelectorAll("li [data-sec]"));

// const $tarjeta1 = document.querySelector(".tarjeta");
// const $fig = document.querySelector("figcaption");
// /*$tarjeta1.style.backgroundColor = "red"; 

// $tarjeta1.setAttribute("style", "background-color: yellow");

// $tarjeta1.style.setProperty("background-color", "green"); //Este es el mas utilizado
// $tarjeta1.style.setProperty("color", "violet");
// console.log($tarjeta1.style.getPropertyValue("background-color"));
// console.log($tarjeta1.style.getPropertyValue("color"));
// console.log($fig.style.getPropertyValue("color"));*/

// console.log($tarjeta1.className);
// // classList .add .remove .replace .toggle .contains

// $tarjeta1.classList.add("rotar-45", "sepia");
// //$tarjeta1.classList.add("sepia");
// console.log($tarjeta1.classList.contains("rotar-45"));
// $tarjeta1.classList.remove("rotar-45");
// console.log($tarjeta1.classList.contains("rotar-45"));
// $tarjeta1.classList.toggle("rotar-45"); // toggle funciona como palanca si no la tiene la agrega y si la tiene la elimina

// $tarjeta1.classList.replace("rotar-45", "rotar-120");

// //console.log(document.getElementsByClassName("tarjeta"));
// //console.log(document.getElementsByName("nombre"));
// //console.log(document.getElementsByTagName("a"));

// /* Nuevos metodos desde el 2015, reemplazo a todos menos al getElementById 
// console.log(document.querySelector("#id"));
// console.log(document.querySelector("#parrafo1"));
// console.log(document.querySelector(".tarjeta"));
// console.log(document.querySelector("ul"));
// console.log(document.querySelectorAll("li"));
// console.log(document.querySelectorAll(".tarjeta"));
// console.log(document.querySelectorAll("ul a"));*/

// //Los textos tienen las siguientes propiedades: innetText textContent innerHTML outerHTML

// // $parrafo.innetText = "Esto lo rellende desde js"; //Texto plano
// // $parrafo.innerHTML = "<p><mark>Esto lo rellende desde js</mark></p>"; //Interpreta como HTML
// // $parrafo.outerHTML = `<p><mark>Esto lo rellende desde js</mark></p>
// //                       <p><mark>Esto lo rellende desde js</mark></p>
// //                       <p><mark>Esto lo rellende desde js</mark></p>
// //                       <p><mark>Esto lo rellende desde js</mark></p>`; //Reemplaza la etiquea parrafo (hace desaparecer el parrafo) y rellena con lo que se coloca

// const $newTarjeta = document.createElement("figure"),
// $imagen = document.createElement("img"),
// $fig = document.createElement("figcaption"),
// texto = document.createTextNode("Any");

// $newTarjeta.classList.add("tarjeta");
// $imagen.setAttribute("src", "https://placeimg.com/200/200/any");
// $imagen.setAttribute("alt", "cualquiercosa");

// $newTarjeta.appendChild($imagen);
// $newTarjeta.appendChild($fig);

// $fig.appendChild(texto);

// $seccionImagenes.appendChild($newTarjeta);
// //$fig.textContent = "Any";

// const listaFrutas = ["Banana", "Manzana", "Pera", "Melon", "Sandia"];

// const $listaFrutas = document.querySelector("#frutas");
// //Esto es muy costoso para el navegador, ya que inserta los elementos de uno en uno, si la lista fuera larga, realiza muchas insercciones
// // listaFrutas.forEach((el)=>{
// //     const $li = document.createElement("li");
// //     $li.textContent = el;
// //     $listaFrutas.appendChild($li);
// // });


// //Esto es lo mejor, ya que en el fragmento se acumula el contenido y luego lo libera, no forma un nodo elemento, sino un nodo fragmento, realiza una sola inserccion
// const fragmento = document.createDocumentFragment();

// listaFrutas.forEach((el)=>{
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     fragmento.appendChild($li);
// });

// $listaFrutas.appendChild(fragmento);


const $imagenes = document.querySelector(".imagenes");
let tarjeta = $imagenes.firstChild;
//console.log(tarjeta.nextElementSibling);

// while(tarjeta.nextSibling != null){
//     console.log(tarjeta);
//     tarjeta = tarjeta.nextElementSibling;
// }
do{
    console.log(tarjeta);
    tarjeta = tarjeta.nextElementSibling;
    if(tarjeta == null){
        break;
    }
}while(tarjeta.nextElementSibling);
console.log($imagenes.firstElementChild);
console.log($imagenes.lastElementChild);

//Conseguir Array de objeto persona en formato JSON, y se tira a una funcion que devuelva una tabla y que lea las keys para generar los nombres de las tablas


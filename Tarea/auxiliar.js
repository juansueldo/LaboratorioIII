fetch("MOCK_DATA.json")
  .then((response) => response.json())
  .then((data) => {
    const lista = Object.values(data);
    console.log(lista);
    generarTabla(lista);
  })
  .catch((error) => console.error(error));


function generarTabla(data) {
  const keys = Object.keys(data[0]);
  
  const $table = document.createElement("table");
  const $thead = document.createElement("thead");
  const $tr = document.createElement("tr");
  const fragmento = document.createDocumentFragment();

  keys.forEach((el)=>{
      const $th = document.createElement("th");
      $th.textContent = el;
      $tr.appendChild($th);
    })
    
    $thead.appendChild($tr);
    $table.appendChild($thead);
    $thead.classList.add("headers","col");
    $table.classList.add("table", "table-dark", "table-striped")
    
const $tbody = document.createElement("tbody");
     data.forEach((el) =>{
         const $tr = document.createElement("tr");
         keys.forEach((key)=> {
             const $td = document.createElement("td");
             $td.textContent = el[key];
             $tr.appendChild($td);
         });
     $tbody.appendChild($tr);
   });
   $table.appendChild($tbody);
   fragmento.appendChild($table)


  const $contenedor = document.getElementById("tabla-container");
  $contenedor.appendChild(fragmento);
}

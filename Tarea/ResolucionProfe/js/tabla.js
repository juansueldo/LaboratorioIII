

const crearTabla = (data, colorCabecera)=>{
    const tabla = document.createElement("table");
    // es comun en javascript: if(!Array.isArray(data)) return null;
    if(Array.isArray(data)){
        tabla.appendChild(crearCabecera(data[0]), colorCabecera);
        tabla.appendChild(crearCuerpo(data));

    }

    return tabla;
}

const crearCabecera = (elemento, color)=>{
    
    const tHead = document.createElement("thead"),
    headRow = document.createElement("tr");
    headRow.style.setProperty("background-color", color);

    for (const key in elemento) {
        const th = document.createElement("th");
        //texto = document.createTextNode(key);
        //th.textContent = texto;
        if(key === "id") continue;
        th.textContent = key;
        headRow.appendChild(th);
    }
    tHead.appendChild(headRow);

    return tHead;
}

const crearCuerpo = (data)=>{
    if(!Array.isArray(data)) return null;
    const tBody = document.createElement('tbody');

    data.forEach((element,index)=>{
        const tr = document.createElement("tr");
        //De esta manera se crean 50 manejadores de eventos tr.addEventListener("click", handlerClick, true);
        for (const key in element) {
            if(key === "id"){
                tr.dataset.id = element[key]; //A traves de la propiedad
                // a traves del metodo tr.setAttribute("data-id", element[key]);
            }
            else{
                if(index % 2 === 0){
                    tr.classList.add("rowPar");
                }
                const td = document.createElement("td");
                //De esta manera se crean mas manejadores de eventos td.addEventListener("click", handlerClickTd);
                td.textContent = element[key];
                tr.appendChild(td);
            }
        }
        tBody.appendChild(tr);
    });
    return tBody;
}

//Delegacion de eventos, se delega a windows el evento click


export const actualizarTabla = (contenedor, data) =>{
    while(contenedor.hasChildNodes()){
        contenedor.removeElementChild(contenedor.firstElementChild)
    }
    contenedor.appendChild(crearTabla(data, "red"));
}
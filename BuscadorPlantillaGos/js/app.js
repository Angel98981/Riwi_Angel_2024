

// Selectores
const nombreCoders=document.querySelector("#nombre")
const edadCoders=document.querySelector("#edad")
const promedioMin=document.querySelector("#minimo")
const promedioMax=document.querySelector("#maximo")
const clanesRiwi=document.querySelector("#clanRiwi")
const nivelIngles=document.querySelector("#nivelIngles")
const especialidadCoder=document.querySelector("#especialidad")
const tecnologia=document.querySelector("#expertoTecnologia")
const findCoder=document.querySelector("#buscarCoder")



// Crear Dinamicamente valores de los nombres de coders como option del select
coders.forEach((coder)=>{
    const opcion=document.createElement("option");
    opcion.value=coder.nombre;
    opcion.textContent=coder.nombre;
    document.querySelector("#nombre").appendChild(opcion);
})

const max=45;
const min=max-30;

for (let i = min; i < max; i++) {
    const option =document.createElement("option");
    option.value=i;
    option.textContent=i
    document.querySelector("#edad").appendChild(option)
    
}


// objetos para la busqueda

const criterioSeleccionados={
    nombreCoders:"",
    edadCoders:"",
    promedioMin:"",
    promedioMax:"",
    clanesRiwi:"",
    nivelIngles:"",
    especialidadCoder:"",
    tecnologia:"",
}


// Event listeners

document.addEventListener("DOMContentLoaded",()=>{
    showCoders(coders)
    selectCoder()
})

// event listeners para filtros

nombre.addEventListener("input",(e)=>{
    criterioSeleccionados.nombreCoders=e.target.value
    // llamado funcion filter de alto nivel
    filtrarCoder()
       
})
edadCoders.addEventListener("input",(e)=>{
    criterioSeleccionados.edadCoders=e.target.value   
    filtrarCoder()
    
})
promedioMin.addEventListener("input",(e)=>{
    criterioSeleccionados.promedioMin=e.target.value
    filtrarCoder() 
     
})
promedioMax.addEventListener("input",(e)=>{
    criterioSeleccionados.promedioMax=e.target.value 
    filtrarCoder()
          
})
clanesRiwi.addEventListener("input",(e)=>{
    criterioSeleccionados.clanesRiwi=e.target.value
    filtrarCoder() 
          
})
nivelIngles.addEventListener("input",(e)=>{
    criterioSeleccionados.nivelIngles=e.target.value
    filtrarCoder()
           
})
especialidadCoder.addEventListener("input",(e)=>{
    criterioSeleccionados.especialidadCoder=e.target.value
    filtrarCoder()
          
})
tecnologia.addEventListener("input",(e)=>{
    criterioSeleccionados.tecnologia=e.target.value    
    filtrarCoder()
    
})

findCoder.addEventListener("input",(e)=>{
    criterioSeleccionados.nombreCoders=e.target.value
    filtrarCoder()

})





// funcion de cartas coders
function showCoders(coders) {
    const contenedorTarjetas=document.querySelector("#tarjetas");
    limpiar()
    coders.forEach((coder)=>{
        const {imageUrl,nombre,detalle,promedio,especialidad,expertoTecnologia,id}=coder;
        const coderHtml=document.createElement("p")
        coderHtml.innerHTML=`
        <div class="card" style="width: 18rem;">
        <img src="${imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">${detalle}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${coder.clanRiwi}</li>                        
        </ul>  
        <a class="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" img="${imageUrl}" pro="${promedio}" esp="${especialidad}" tec="${expertoTecnologia}">Detalles</a>     
        <a href="" class="btn btn-primary boton" id="${id}">hire</a>     
        `
        contenedorTarjetas.appendChild(coderHtml)
    })   
}

// coders.forEach((coder) => {


//     const details=document.querySelector("#details"); 
//     limpiar()   
//     coders.forEach((coder)=>{
//         const {imageUrl,nombre,detalle}=coder;
//         const detailsHtml=document.createElement("div")
//         detailsHtml.innerHTML=`
//         <style> 
//         .cuerpo{            
//             display: flex
//             flex-direction: row;
//             width: 400px
//         }

//         .person-img{
//             width: 100px
//         }

//         </style>
//         <section class="cuerpo">
//         <div class="grid-container">
//         <!-- Card 1 -->
//         <div class="person-card">        
//         <img src="${imageUrl}" alt="" class="person-img">
//         <h2>${nombre}</h2>
//         <h3>${detalle}</h3>        
//         </div>
//         </section>
//         `
//         details.appendChild(detailsHtml)
//     })    
// });
    




// declaracion funcion filter de alto nivel
function filtrarCoder() {
    const result=coders
    .filter(filtrarNombreDuuude)
    .filter(filtrarEdadDuuude)
    .filter(filtrarPromMinDuuude)
    .filter(filtrarPromMaxDuuude)
    .filter(filtrarClanRiwiDuuude)
    .filter(filtrarNivelIngelsDuuude)
    .filter(filtrarEspecialidadDuuude)
    .filter(filtrarTecnoDuuude)
    .filter(filtrarPorNombre)     
    showCoders(result)
       

    const Noencontrado = document.querySelector('#notFound')
    if(result.length === 0){
        Noencontrado.style.display="block"
        showCoders(result)
    }else{
        Noencontrado.style.display="none"
        showCoders(result)
    }
}

// declarar funcion hija argumento de la funcion filter de alto nivel

function filtrarNombreDuuude(coder) {
    if (criterioSeleccionados.nombreCoders) {
        return coder.nombre === criterioSeleccionados.nombreCoders
    }else{
        return coder;
    }
}
function filtrarEdadDuuude(coder) {
    if (criterioSeleccionados.edadCoders) {
        return coder.edad === parseInt(criterioSeleccionados.edadCoders)
    }else{
        return coder;
    }
}

function filtrarPromMinDuuude(coder) {
    if (criterioSeleccionados.promedioMin) {
        return coder.promedio >= parseInt(criterioSeleccionados.promedioMin)
    }else{
        return coder
    }
}
function filtrarPromMaxDuuude(coder) {
    if (criterioSeleccionados.promedioMax) {
        return coder.promedio <= parseInt(criterioSeleccionados.promedioMax)
    }else{
        return coder
    }
}
function filtrarClanRiwiDuuude(coder) {
    if (criterioSeleccionados.clanesRiwi) {
        return coder.clanRiwi === (criterioSeleccionados.clanesRiwi)
    }else{
        return coder
    }
}
function filtrarNivelIngelsDuuude(coder) {
    if (criterioSeleccionados.nivelIngles) {
        return coder.nivelIngles === (criterioSeleccionados.nivelIngles)
    }else{
        return coder
    }
}
function filtrarEspecialidadDuuude(coder) {
    if (criterioSeleccionados.especialidadCoder) {
        return coder.especialidad === (criterioSeleccionados.especialidadCoder)
    }else{
        return coder
    }
}
function filtrarTecnoDuuude(coder) {
    if (criterioSeleccionados.tecnologia) {
        return coder.expertoTecnologia === (criterioSeleccionados.tecnologia)
    }else{
        return coder
    }
}

function filtrarPorNombre(coder) {   

    if (criterioSeleccionados.nombreCoders) {        
        return coder.nombre===(criterioSeleccionados.nombreCoders)   
    }else{       
        return coder 
    }             
        
}

function limpiar() {
    let z=document.querySelectorAll("p") 
         
    for (let v = 0; v < z.length; v++) {
        z[v].remove()
        
    }
}

const tbody=document.querySelector("tbody");
const rowModal=document.createElement("tr")
function selectCoder() {
coderDetails=document.querySelector("#tarjetas")
coderDetails.addEventListener("click",showDetail)
}

function showDetail(e) {
    const imagen=e.target.getAttribute("img")
    const promedio=e.target.getAttribute("pro")
    const especialidad=e.target.getAttribute("esp")
    const tecnologia=e.target.getAttribute("tec")
    rowModal.innerHTML=`
    
    <td>
    <img src="${imagen}" class="card-img-top">
    </td>    
    <td>
    ${promedio}
    </td>
    <td>
    ${especialidad}
    </td>
    <td>
    ${tecnologia}
    </td>
    `   
    tbody.appendChild(rowModal) 
}

// HIRE-------------------

let arrayCards=[] /*Declaracion de array  */
// Selectores
const cards =document.querySelector("#tarjetas")
const tbodie=document.querySelector("#tbodie")
const deleteListCards=document.querySelector("#deleteListCards")
const clear=document.querySelector("#clearAll")
// id listeners
cards.addEventListener("click", selectCard)
deleteListCards.addEventListener("click",deleteCard)
clear.addEventListener("click",deleteAll)

function selectCard(e) {
    e.preventDefault()
    if (e.target.classList.contains("boton")) {
        const electedCoder=e.target.parentElement.parentElement
        console.log(electedCoder);
        detail(electedCoder)
    }
    
}
function detail(electedCoder) {
    const coderDetail={
        imagen:electedCoder.querySelector("img").src,
        nombre:electedCoder.querySelector("h5").textContent,
        detalle:electedCoder.querySelector("p").textContent,
        id:electedCoder.querySelector(".boton").getAttribute("id")
    }

    arrayCards=[...arrayCards,coderDetail]
    console.log(arrayCards);
    injectingCoderHtml()
}

function deleteCard(e) {    
    if (e.target.classList.contains("deleteCards")) {
        const coderToDelete=e.target.getAttribute("id")
        console.log(coderToDelete);
        arrayCards=arrayCards.filter((cd)=> cd.id !== coderToDelete)
        injectingCoderHtml()
    }
}
function deleteAll(e) {
    if (e.target.classList.contains("btn-outline-danger")) {
        arrayCards=[]
        cleanHtml()
    }
}

function injectingCoderHtml() {
    cleanHtml()
    
    arrayCards.forEach((card) => {
        const {imagen,nombre,detalle,id}=card
        const row=document.createElement("tr")
        row.innerHTML=`
        <td>
            <img src="${imagen}" width="150px">
        </td>
        <td>
            <p>${nombre}</p> 
        </td>
        <td>
            <p>${detalle}</p> 
        </td>
        <td>
            <a href="#" class="deleteCards btn btn-danger" id="${id}">X</a> 
        </td>

        `
        tbodie.appendChild(row)
    });
}

function cleanHtml() {
    tbodie.innerHTML=``
}
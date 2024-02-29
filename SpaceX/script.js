// const caja = document.querySelector("#cajas")
// caja.addEventListener("click", consumoApi)
const caja = document.querySelector("#cajas");
document.addEventListener("DOMContentLoaded", () => {
  consumoApi();
  //   mostrarVideo()
});
const elon = `https://api.spacexdata.com/v3/launches`;

function consumoApi() {
  fetch(elon)
    .then((asn) => {
      return asn.json();
    })
    .then((img) => {
      injectingCard(img);
    });
}

// async function consumiApi() {

//     try {
//         const result = await fetch(`https://api.spacexdata.com/v3/launches`)
//         const asn = await  result.json()
//         injectingCard(asn)
        
//     } catch (error) {
//         console.log("error");
//     }

// }

function injectingCard(img) {

  clearHTML();
  img.forEach((caracteristicas, index) => {
    let imagen = caracteristicas.links.mission_patch_small;
    let name = caracteristicas.mission_name;
    let year = caracteristicas.launch_year;
    let videito = caracteristicas.links.youtube_id;

    const botonId = `boton${index}`; // esto me crea un id unico para cada boton
    caja.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="${imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${year}</p>
            <button type="button" class="btn btn-primary boton" id=${botonId} idVideo=${videito} data-bs-toggle="modal" data-bs-target="#exampleModal">Ver Misión</button>
          </div>
        </div>
      `;


  });

}
caja.addEventListener("click", (e) =>{
    if(e.target.classList.contains("boton")){        
        let idVideito = (e.target.getAttribute("idVideo"));
        const introVideo = document.querySelector("#video")
        introVideo.innerHTML=`
        <iframe width="465" height="315" src="https://www.youtube.com/embed/${idVideito}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `

    }
})

function clearHTML() {
  const contenido = document.querySelector("#cajas");
  contenido.innerHTML = "";
}

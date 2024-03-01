//1. Fetch API para consumir datos desde un txt...
const txt = document.querySelector("#loadTxt");
txt.addEventListener("click", getData);

function getData() {
  fetch("data/datos.txt")
    .then((respuesta) => {
      // console.log(respuesta);
      // console.log(respuesta.status);
      // console.log(respuesta.url);
      // console.log(respuesta.ok);
      return respuesta.text();
    })
    .then((datos) => {
      console.log(datos);
    });
}

//2. Fetch API para consumir un JSON (Objeto)

const jsonsito = document.querySelector("#loadJSON");
jsonsito.addEventListener("click", perro);

function perro() {
  fetch("data/coders.json")
    .then((rta) => {
      return rta.json();
    })
    .then((datosJson) => {
      // console.log(datosJson);
      injectinHTML(datosJson);
    });
}
function injectinHTML({ id, nombre, edad, nivelIngles }) {
  const caja = document.querySelector("#contenido");
  caja.innerHTML = `
        <p>id:${id}</p>
        <p >nombre:${nombre}</p>
        <p >edad:${edad}</p>
        <p >nivel de ingles:${nivelIngles}</p>
    `;
}
//3. Fetch API para consumir datos de un JSON (Array)

const array = document.querySelector("#loadJSONArray");
array.addEventListener("click", gato);

function gato() {
  fetch("data/clanes.json")
    .then((obt) => {
      // console.log(obt);
      return obt.json();
    })
    .then((daticos) => {
      introHTML(daticos);
    });
}

function introHTML(daticos) {
  const cajita = document.querySelector("#contenido");
  daticos.forEach(({ id, nombre, edad, nivelIngles }) => {
    cajita.innerHTML += `
            <p>id:${id}</p>
            <p >nombre:${nombre}</p>
            <p >edad:${edad}</p>
            <p >nivel de ingles:${nivelIngles}</p>
        `;
  });
}

//4.  FetchAPI para consumir recursos desde una API PUBLICA (internet)

const consumo = document.querySelector("#loadAPI");
consumo.addEventListener("click", consumito);
document.addEventListener("DOMContentLoaded", () => {
  consumito();
});

function consumito() {
  fetch(`http://www.omdbapi.com/?apikey=9b6ab32f&s=batman`)
    .then((asn) => {      
      return asn.json();
    })
    .then((img) => {
      injectingImages(img);
    });
}

const buscador = document.querySelector("#buscador");
buscador.addEventListener("input", cargarImgs);

function cargarImgs() {
  const searchTerm = buscador.value;

  fetch(`https://www.omdbapi.com/?apikey=265d7fd1&s=${searchTerm}`)
    .then((answer) => {      
      return answer.json();
    })
    .then((image) => {
      injectingImages(image);
    });
}

function injectingImages(image) {
  const contenido = document.querySelector("#contenido");
  let peliculas = image.Search;
  clearHTML();
  peliculas.forEach((caracteristica) => {
    const { Poster, Title, Year, Type } = caracteristica;
    contenido.innerHTML += `
        <div class="cards">
        <img src="${Poster}" width="250px">
        <p class="textos"> ${Title}</p>
        <p class="textos"> ${Year}</p>
        <button class="buttonType">${Type}</button>
        </div>`;
  });
}

function clearHTML() {
  const contenido = document.querySelector("#contenido");
  contenido.innerHTML = "";
}

const piso3 = {
  aprove: {
    cantidadMax: 500,
    contenido: 0,
  },
  organic: {
    cantidadMax: 500,
    contenido: 0,
  },
  noAprove: {
    cantidadMax: 500,
    contenido: 0,
  },
};
const piso4 = {
  aprove: {
    cantidadMax: 500,
    contenido: 0,
  },
  organic: {
    cantidadMax: 500,
    contenido: 0,
  },
  noAprove: {
    cantidadMax: 500,
    contenido: 0,
  },
};
const piso5 = {
  aprove: {
    cantidadMax: 500,
    contenido: 0,
  },
  organic: {
    cantidadMax: 500,
    contenido: 0,
  },
  noAprove: {
    cantidadMax: 500,
    contenido: 0,
  },
};

const canecas = document.querySelectorAll(".bowl");
canecas.forEach((caneca) => {
  caneca.addEventListener("click", () => {
    document.querySelector("#btnOpenModal").click();
    tipoCanecaAgregar = caneca.getAttribute("type-bowl");
  });
});

function updateCounterAprove() {
  const contenido = document.querySelector("#numeros");
  contenido.textContent = `${piso3.aprove.contenido}/${piso3.aprove.cantidadMax}`;
}
function updateCounterOrganic() {
  const contenido = document.querySelector("#numeros1");
  contenido.textContent = `${piso3.organic.contenido}/${piso3.organic.cantidadMax}`;
}
function updateCounterNoAprove() {
  const contenido = document.querySelector("#numeros2");
  contenido.textContent = `${piso3.noAprove.contenido}/${piso3.noAprove.cantidadMax}`;
}

const agregar = document.querySelector("#btnSubmit");

agregar.addEventListener("click", () => {
  aprovechableSuma(tipoCanecaAgregar);
  rellenarHTML();  
});
const selectPisos = document.getElementById("select_floor");

function aprovechableSuma(tipoCanecaAgregar) {
  if (selectPisos.value == "3") {
    if (tipoCanecaAgregar === "aprovechables") {
      const cantidad = document.querySelector("#cantidad").value;
      piso3["aprove"]["contenido"] += parseInt(cantidad);
      updateCounterAprove();
      dataPiso3 = JSON.parse(localStorage.getItem("data_piso3"));
    }
    if (tipoCanecaAgregar === "organicos") {
      const cantidad = document.querySelector("#cantidad").value;
      piso3["organic"]["contenido"] += parseInt(cantidad);
      updateCounterOrganic();
      dataPiso4 = JSON.parse(localStorage.getItem("data_piso4"));
    }
    if (tipoCanecaAgregar === "no_aprovechables") {
      const cantidad = document.querySelector("#cantidad").value;
      piso3["noAprove"]["contenido"] += parseInt(cantidad);
      updateCounterNoAprove();
      dataPiso5 = JSON.parse(localStorage.getItem("data_piso5"));
    }
  }
  if (selectPisos.value == "4") {
    if (tipoCanecaAgregar === "aprovechables") {
      const cantidad = document.querySelector("#cantidad").value;
      piso4["aprove"]["contenido"] += parseInt(cantidad);
      updateCounterAprove();
      dataPiso3 = JSON.parse(localStorage.getItem("data_piso3"));
    }
    if (tipoCanecaAgregar === "organicos") {
      const cantidad = document.querySelector("#cantidad").value;
      piso4["organic"]["contenido"] += parseInt(cantidad);
      updateCounterOrganic();
      dataPiso4 = JSON.parse(localStorage.getItem("data_piso4"));
    }
    if (tipoCanecaAgregar === "no_aprovechables") {
      const cantidad = document.querySelector("#cantidad").value;
      piso4["noAprove"]["contenido"] += parseInt(cantidad);
      updateCounterNoAprove();
      dataPiso5 = JSON.parse(localStorage.getItem("data_piso5"));
    }
  }
  if (selectPisos.value == "5") {
    if (tipoCanecaAgregar === "aprovechables") {
      const cantidad = document.querySelector("#cantidad").value;
      piso5["aprove"]["contenido"] += parseInt(cantidad);
      updateCounterAprove();
      dataPiso3 = JSON.parse(localStorage.getItem("data_piso3"));
    }
    if (tipoCanecaAgregar === "organicos") {
      const cantidad = document.querySelector("#cantidad").value;
      piso5["organic"]["contenido"] += parseInt(cantidad);
      updateCounterOrganic();
      dataPiso4 = JSON.parse(localStorage.getItem("data_piso4"));
    }
    if (tipoCanecaAgregar === "no_aprovechables") {
      const cantidad = document.querySelector("#cantidad").value;
      piso5["noAprove"]["contenido"] += parseInt(cantidad);
      updateCounterNoAprove();
      dataPiso5 = JSON.parse(localStorage.getItem("data_piso5"));
    }
  }

  localStorage.setItem("data_piso3", JSON.stringify(piso3));
  localStorage.setItem("data_piso4", JSON.stringify(piso4));
  localStorage.setItem("data_piso5", JSON.stringify(piso5));
}

selectPisos.addEventListener("change", () => {
  rellenarHTML();
});

const aprovechables = document.querySelector("#numeros");
const organicos = document.querySelector("#numeros1");
const noAprovechables = document.querySelector("#numeros2");

const rellenarHTML = () => {
  let sumita
  let porcentaje
  const body=document.querySelector("body")
  if (selectPisos.value == "3") {
    aprovechables.textContent = piso3.aprove.contenido + "/500";
    organicos.textContent = piso3.organic.contenido + "/500";
    noAprovechables.textContent = piso3.noAprove.contenido + "/500";
    sumita=piso3.aprove.contenido+piso3.organic.contenido+piso3.noAprove.contenido
    porcentaje=(sumita*100)/1500
  } else if (selectPisos.value == "4") {
    aprovechables.textContent = piso4.aprove.contenido + "/500";
    organicos.textContent = piso4.organic.contenido + "/500";
    noAprovechables.textContent = piso4.noAprove.contenido + "/500";
    sumita=piso4.aprove.contenido+piso4.organic.contenido+piso4.noAprove.contenido
    porcentaje=(sumita*100)/1500
  } else if (selectPisos.value == "5") {
    aprovechables.textContent = piso5.aprove.contenido + "/500";
    organicos.textContent = piso5.organic.contenido + "/500";
    noAprovechables.textContent = piso5.noAprove.contenido + "/500";
    sumita=piso5.aprove.contenido+piso5.organic.contenido+piso5.noAprove.contenido
    porcentaje=(sumita*100)/1500
  }
  if (porcentaje >0 && porcentaje < 25) {
    body.style.background="red"    
  }else if (porcentaje >25 && porcentaje<70){
    body.style.background="orange"
  }else if (porcentaje>70){
    body.style.background="green"
  }else{
    body.style.background="black"
  }
};
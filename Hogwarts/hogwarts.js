//paso 1. Eres estudiante de Hogwarts, tienes la edad suficiente para entrar a estudiar, tienes padres, y un linaje de sangre, aun no sabes tu casa, ni tu animal patronus, también tienes cualidades, que son muy importantes para que el sombrero seleccionador te asigne una casa.
// Crear un objeto, con Nombre, edad, familia, linaje, casa, animal patronus,cualidades:
// Gryffindor ("Valor, fuerza, audacia" Linaje: Mestizo, muggle, Sangre pura )
// Hufflepuff("Justicia, Lealtad, Paciencia" Linaje: Mestizo, muggle)
// Ravenclaw(“Creatividad, Erudición, Inteligencia" Linaje: Mestizo, muggle, Sangre pura)
// Slytherin ("Ambición, Determinación, Astucia" Linaje: "Sangre Pura")



// const ordenarCasa=()=>{
//   
// }
let x={}
const enviar= document.querySelector("#enviar")
enviar.addEventListener("click",()=>{
  const nombres=document.querySelector("#nombre").value
  const cualidad=document.querySelector("#cualidades").value.split(" ")
  const edades=document.querySelector("#edades").value
  const familias=document.querySelector("#familias").value
  const linajes=document.querySelector("#linajes").value

  let casas = [
    {
      casa: "Gryffindor",
      cualidades: ["Valor", "Fuerza", "Audacia"],
      linaje: ["Mestizo", "Muggle", "Sangre Pura"],
    },
    {
      casa: "Hufflepuff",
      cualidades: ["Justicia", "Lealtad", "Paciencia"],
      linaje: ["Mestizo", "Muggle"],
    },
    {
      casa: "Ravenclaw",
      cualidades: ["Creatividad", "Erudicion", "Inteligencia"],
      linaje: ["Mestizo", "Muggle", "Sangre Pura"],
    },
    {
      casa: "Slytherin",
      cualidades: ["Ambicion", "Determinacion", "Astucia"],
      linaje: ["Mestizo", "Muggle", "Sangre Pura"],
    },
  ];

 let nuevo = {
    nombre: nombres,
    edad: edades,
    familia: familias,
    linaje: linajes,
    casa:"",
    TuAnimalPatronus:"",
    cualidades:cualidad,
  };
  x={...x,nuevo}
  console.log(x);

  x = sombreroSeleccionador(casas,x)

  const tuCasa=document.querySelector("#casaResultado")
  tuCasa.textContent=x.nuevo.casa
  
})

const animal=document.querySelector("#animal")
animal.addEventListener("click",()=>{
  let miAnimal=clases.defensaContraLasArtesOscuras.generarAnimalPatronus()

  const animalResultado=document.querySelector("#animalResultado")
  animalResultado.textContent=miAnimal
})

const boggart=document.querySelector("#ridi")
boggart.addEventListener("click",()=>{
  const ridiResult=document.querySelector("#resultadoTexto")
  ridiResult.textContent="el boggart se convierte en algo gracioso"
})



// paso 2. Es una año difícil en Hogwarts, ya que corren rumores que el innombrable ha vuelto, y el y el famoso Harry Potter también ha ingresado contigo ¡¡¡

// tus clases y tus profesores:
//  transformaciones: "Profesor Kevin Slughorn",
//  herbologia: "Profesor Maria Umbridge",
//  pociones: "Profesor Liliana McGonagall",
//  encantamientos: "Profesora Jackie",
//  defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
//  animalesMagicos: "Profesor David Filch",
//  historiaDeMagia: "Profesor Ronald Sprout"

let clases = {
  transformaciones: {
    profe: "Kevin Slughorn",
    horario:"10:00 a 12:00",
    rastrearTransformacion:"", 

    realizarTrasnformacion:function(boggartTrasnformacion){
        if (boggartTrasnformacion.trim() === "") {
            console.log("No hay boggart");            
        }else{
            console.log("Riddikulus fue realizada con exito");
        }
    },
    enfrenarBoggart:function(boggart){
        console.log("forma original",boggart);
        console.log("Realizando transformacion");
        let boggartTrasnformacion ="burrito"
        this.realizarTrasnformacion(boggartTrasnformacion)
        console.log(boggartTrasnformacion);
    }
  },
  herbologia: {
    profe: "Maria Umbridge",
  },
  pociones: {
    profe: "Liliana McGonagall",
  },
  encantamientos: {
    profe: "Jackie",
  },
  defensaContraLasArtesOscuras: {
    profe: "Robinson Snape",
    generarAnimalPatronus:function(){
        const animalPatronus = ['Águila','Águila pescadora','Águila ratonera','Aguilucho','Albatros','Ardilla común','Ardilla gris','Armiño','Basset Hound','Beagle','Borzoi','Búfalo','Búho nival','Búho real','Buitre','Caballo alado abraxan','Caballo alado granian','Caballo alazán','Caballo blanco','Caballo castaño','Caballo dun','Caballo gris moteado','caballo negro','Caballo pinto','Cabra','Campañol','Cárabo común','Cárabo lapon','Cerdo hormiguero','Chotacabras','Chow chow','Cierva','Ciervo','Cisne balnco','Cisne negro','Cobra real','Colibri','Comadreja','Conejo','Corneja','Cuervo','Culebra de collar','Delfin','Dragón','Elefante','Erizo','Erumpent','Faisán','Fénix','Foca','Fox terrier','Galgo inglés','Garza','Gato azul ruso','Gato blanco y negro','Gato calicó','Gato de carey','Gato esfinge','Gato manx','Gato montés','Gato naranjo','Gato nebelung','Gato ragdoll','Gato siberiano','Gato tonkinés','Gavilán','Gavilán azor','Golondrina','Gorrión','Güepardo','Halcón','Hiena','Hipogrifo','Husky','Impala','Jabalí','Jack rusell terrier','Lebrel escocés','León','Leonesa','Leoparda','Leopardo','Libélula','Liebre','Liebre de montaña','Lince','Lobero irlandés','Lobo','Mamba negra','Marta','Martin pescador','Mastín','Mirlo','Mochuelo','Mofeta','Mono capuchino','Murciélago','Musaraña','Nutria','Occamy','Ocicat','Orangután','Orca','Orix','Oso negro','Oso pardo','Oso polar','Pavo real','Perro mestizo','Petirrojo','Pitón','Podenco ibicenco','Rata','Ratón','Rinoceronte','Rottweiler','Runespoor','Sabueso','Salamandra de fuego doméstica','Salmón','San bernardo','Serpiente de cascabel','Tejón','Tecolote','Terranova','Thestral','Tiburón','Tiburón','Tigre','Tigresa','Topo','Unicornio','Urraca','Vencejo','Vibora','Visón','West highlan terrier','Yegua alazán','Yegua blanca','Yegua castaña','Yegua dun','Yegua gris moteada','Yegua negra','Yegua pinta','Zorro']
        
        let aleatorio=Math.floor(Math.random()*animalPatronus.length);
        let animalAleatorio=animalPatronus[aleatorio];
        console.log("Tu animal patronus es",animalAleatorio); 
        return animalAleatorio 

    }
  },

  animalesMagicos: {
    profe: "David Filch",
  },
  historiaDeMagia: {
    profe: "Ronald Sprout",
  },
};





// paso 3. Inicia un nuevo día, es el día del sombrero seleccionador¡¡ hay una gran cena de bienvenida, estas tu con todos tus compas, según tu linaje y cualidades, el sombrero seleccionador te asignara una casa. crear un objeto condicional que sirva para escoger la casa al que pertenece el estudiante, será condicional según tus cualidades y linaje.

// enviar.addEventListener("click",()=>{
//   const casass=document.querySelector("#resultado")
//   casass=casaResultado
// })



function sombreroSeleccionador(casas,x) {  
 casas.forEach((casa) => {
  if (
    casa.linaje.includes(x.nuevo.linaje) &&
    x.nuevo.cualidades.some((cualidades) => casa.cualidades.includes(cualidades))
  ) {
    x.nuevo.casa = casa.casa;
  }
 });
 return x
}


// paso 4. primer día de clases: vas temprano a clase de transformaciones, en clase de transformaciones que es un objeto, con transformaciones con boggarts, «Altera la habilidad de un boggart para cambiar de forma y provoca risa para derrotarlo.» esto se logra con el encantamiento "Riddikulus".
// Definir la clase de Transformaciones
// En este paso, estás creando un objeto llamado claseTransformaciones que representa la clase de Transformaciones. Estableces el nombre del profesor, el horario y una propiedad para rastrear la transformación de los boggarts.
// - Paso 2: Crear una función para realizar la transformación con "Riddikulus" Aquí defines una función realizarTransformacionRiddikulus dentro de claseTransformaciones. Esta función verifica si hay un boggart presente y, si es así, realiza la transformación con el encantamiento "Riddikulus".
// - Paso 3: Crear una función para enfrentar un boggart Aquí defines otra función enfrentarBoggart dentro de claseTransformaciones. Esta función toma un boggart como argumento, muestra un mensaje con la forma original del boggart, realiza la transformación y muestra el resultado.
// - Paso 4: Uso y llamada a las funciones En este paso, creas un objeto boggartEjemplo y luego llamas a la función enfrentarBoggart de claseTransformaciones para enfrentar el boggart.


console.log(clases.transformaciones.enfrenarBoggart());




//Declaraciones.
let estrellaS = '⭐'
let estrellaN = '☆'

//--------------------------------------------------------------------------------------------------
//Referencias de la interfaz.
familiasArticulos = document.getElementById('familiasArticulos') //Select familiasArticulos.
asideColumna= document.getElementById('columna') //Aside 'columna'
cajaPedidos=document.getElementById('cajaPedidos') //Contenedor 'cajaPedidos'.

//--------------------------------------------------------------------------------------------------
//Eventos.
//Cambio de la option en la select familiasArticulos.
familiasArticulos.addEventListener('change', leerArticulosFamilia, false)

//--------------------------------------------------------------------------------------------------
//Función que realiza la lectura de las familias de la base de datos.
function leerFamilias() {
  fetch(
    'http://www.informaticasc.com/daw_2122/AvisosMantenimiento/Articulos/php/consultaFamilia.php',
    {
      method: 'POST',
    },
  )
    .then((resp) => resp.json())
    // El objeto resp(response) es el objeto que recibe los datos devueltos por el servidor.
    .then((json) => {
      console.log(json)
      añadirOpcionesFamilia(json)
    })
    .catch((err) => {
      console.log('ERROR:' + err)
    })
}

//--------------------------------------------------------------------------------------------------
//Función que añade las opciones de los registros leídos a la select familiasArticulos.
function añadirOpcionesFamilia(datosLeidos) {
  for (i = 0; i < datosLeidos.length; i++) {
    let opcion = document.createElement('option') //Crea elemento option.
    opcion.value = datosLeidos[i].id //Asigna como valor el id.
    opcion.text = datosLeidos[i].Descripcion //Asigna como texto la descripción.
    // Añade a la select <select id=”familiasArticulos”> la option creada
    familiasArticulos.appendChild(opcion)
  }
}

//--------------------------------------------------------------------------------------------------
//Función que lee los articulos de una determinada familia.
function leerArticulosFamilia(evt) {
  let formData = new FormData()
  var dato = evt.target.value //Valor de la option familiasArticulos.
  formData.append('articulo', dato)
  fetch('https://www.informaticasc.com/daw_2122/AvisosMantenimiento/Articulos/php/consultaArticulos.php', {
    method: 'POST',
    body: formData,
  })
    .then((resp) => {
      return resp.json()
    })
    .then((json) => {
      console.log(json)
      mostrarArticulos(json)
    })
    .catch((err) => {
      console.log('ERROR :' + err)
    })
}

//--------------------------------------------------------------------------------------------------
//Función que muestra los articulos en la interfaz.
function mostrarArticulos(datosLeidos){
  borrarArticulos() //Borra los artículos.
  let primerDivAside = document.querySelector("#columna").childNodes[1];
  for (i = 0; i < datosLeidos.length; i++) {
    let contenedor= primerDivAside.cloneNode(true); //Clona el primer div del aside "columna".
	  //Obtiene el elemento img clonado e  cajon2
    let parrafo = contenedor.querySelector("p")
    parrafo.innerText=datosLeidos[i].Nombre
    let imagen=contenedor.querySelector("img")
    imagen.src="https://www.informaticasc.com/daw_2122/AvisosMantenimiento/Articulos/Imagenes/"+datosLeidos[i].UrlImagen
    imagen.addEventListener("click", seleccionarArticulo, false) //Añade el evento click a la imagen.
    let precio=contenedor.querySelector("b")
    precio.innerText=datosLeidos[i].PrecioVenta
    asideColumna.appendChild(contenedor)  //Añade el contenedor.
  }
}

//--------------------------------------------------------------------------------------------------
//Función que elimina los artículos del <aside id="columna">.
function borrarArticulos(){
  let aside=document.querySelector("#columna")
  let contenedores=aside.querySelectorAll("div")
  //Elimina todos los div dentro del aside menos el primero.
  for (let i = 1; i < contenedores.length; i++) {
    aside.removeChild(contenedores[i]);
  }
}

//--------------------------------------------------------------------------------------------------
//Función que responde al evento click sobre la imagen del artículo.
function seleccionarArticulo(evt){
  let articulo=document.createElement('div') //Crea un contenedor para cada artículo.
  //Botón borrar.
  let boton=document.createElement('button');
  boton.type='button'
  boton.innerText='X'
  articulo.appendChild(boton)
  //Botón añadir datos.
  boton=document.createElement('button');
  boton.type='button'
  boton.innerText='V'
  articulo.appendChild(boton)
  //Input cantidad.
  let inputNumber=document.createElement('input');
  inputNumber.type='number'
  inputNumber.setAttribute('min',0)
  inputNumber.value=0
  articulo.appendChild(inputNumber)
  //Etiqueta calificación.
  let etiqueta=document.createElement('label');
  etiqueta.for='calificacion'
  etiqueta.innerText=estrellaS
  articulo.appendChild(etiqueta) 
  cajaPedidos.appendChild(articulo) //Se añade a cajaPedidos.
}

//--------------------------------------------------------------------------------------------------
//Ejecución.
leerFamilias()
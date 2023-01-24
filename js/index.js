//Declaraciones.
let estrellaS = '⭐'
let estrellaN = '☆'

//--------------------------------------------------------------------------------------------------
//Referencias de la interfaz.
const familiasArticulos = document.getElementById('familiasArticulos') //Select familiasArticulos.
const asideColumna= document.getElementById('columna') //Aside 'columna'
const cajaPedidos=document.getElementById('cajaPedidos') //Contenedor 'cajaPedidos'.
const estrellas=document.getElementById('estrellas') //Contenedor 'estrellas'.
const cajaComprasAnteriores=document.getElementById('cajaComprasAnteriores') //Contenedor 'cajaComprasAnteriores'

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
      //console.log(json)
      añadirOpcionesFamilia(json)
    })
    .catch((err) => {
      //console.log('ERROR:' + err)
      mostrarVentanaEmergente('BASE DE DATOS','Error: '+err,'error')
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
      //console.log(json)
      mostrarArticulos(json)
    })
    .catch((err) => {
      //console.log('ERROR: ' + err)
      mostrarVentanaEmergente('BASE DE DATOS','Error: '+err,'error')
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
    imagen.setAttribute('articulo',JSON.stringify(datosLeidos[i])) //Convierte un JSON a String para pasarlo como atributo.
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
  //Elimina todos los div dentro del aside menos el primero (i=0).
  for (let i = 1; i < contenedores.length; i++) {
    aside.removeChild(contenedores[i]);
  }
}

//--------------------------------------------------------------------------------------------------
//Función que responde al evento click sobre la imagen del artículo.
function seleccionarArticulo(evt){
  let articulo=JSON.parse(evt.target.getAttribute('articulo')) //Objeto articulo.
  mostrarCalificacion(articulo) //Muestra la calificación del artículo seleccionado.
  let contenedorArticulo=document.createElement('div') //Crea un contenedor para cada artículo.
  //Botón añadir datos.
  let boton=document.createElement('button');
  boton.type='button'
  boton.innerText='V'
  boton.addEventListener('click', (evt)=>{actualizarArticulo(evt, articulo)},false)
  contenedorArticulo.appendChild(boton)
  //Botón borrar.
  boton=document.createElement('button');
  boton.type='button'
  boton.innerText='X'
  boton.addEventListener('click', borrarArticuloSeleccionado,false)
  contenedorArticulo.appendChild(boton)
  //Input cantidad.
  let inputNumber=document.createElement('input');
  inputNumber.type='number'
  inputNumber.setAttribute('min',1)
  inputNumber.value=1
  contenedorArticulo.appendChild(inputNumber)
  //Articulo.
  let nombreArticulo=document.createElement('p')
  //console.log(evt.target.getAttribute('articulo')) Depu
  nombreArticulo.innerText=articulo.Nombre
  contenedorArticulo.appendChild(nombreArticulo)
  //Etiqueta calificación.
  let etiqueta=document.createElement('label');
  etiqueta.for='calificacion'
  etiqueta.innerText=estrellaS
  contenedorArticulo.appendChild(etiqueta)
  //Input calificación.
  let inputRange=document.createElement('input');
  inputRange.id='calificacion'
  inputRange.type='range'
  inputRange.step="1"
  inputRange.value="0"
  inputRange.min='1'
  inputRange.max='5'
  inputRange.setAttribute('list','tickmarks')
  contenedorArticulo.appendChild(inputRange)
  cajaPedidos.appendChild(contenedorArticulo) //Se añade a cajaPedidos.
}

//--------------------------------------------------------------------------------------------------
//Función que visuliza laborra el div de los articulos seleccionados.
function mostrarCalificacion(articulo){
  let numeroEstrellasColor = articulo.SumaEstrellas / articulo.NumeroVentas
  let cadenaEstrellas=""
  for (let i = 0; i < parseInt(numeroEstrellasColor) && i<5; i++) {
    cadenaEstrellas+=estrellaS;
  }
  for (let i = 0; i < 5-parseInt(numeroEstrellasColor); i++) {
    cadenaEstrellas+=estrellaN;
  }
  estrellas.innerText=cadenaEstrellas;
}


//--------------------------------------------------------------------------------------------------
//Función que actualiza el articulo.
function actualizarArticulo(evt, articulo){
  //Actualizar base de datos.
  let formData = new FormData()
  formData.append('idArticulo', articulo.id)
  //console.log(evt.target.parentNode.childNodes[2].value) //Depuración.
  //console.log(evt.target.parentNode.childNodes[5].value) //Depuración.
  formData.append('cantidad', evt.target.parentNode.childNodes[2].value) //Cantidad del articulo.
  formData.append('estrellas', evt.target.parentNode.childNodes[5].value) //Cantidad de estrellas
  fetch('https://www.informaticasc.com/daw_2122/AvisosMantenimiento/Articulos/php/actualizarLineaPedido.php', {
    method: 'POST',
    body: formData,
  })
    .then((resp) => {
      return resp.text()
    }).then((mensaje)=>{
      //Adaptación del mensaje
      mostrarVentanaEmergente('BASE DE DATOS', mensaje, 'success')
      guardarArticuloLocalStorage(articulo) //Graba el articulo el localStorage
    })
    .catch((err) => {
      //console.log('ERROR: ' + err)
      mostrarVentanaEmergente('BASE DE DATOS','Error: '+err,'error')
    })
    borrarArticuloSeleccionado(evt)
}

//--------------------------------------------------------------------------------------------------
//Función que borra el div de los articulos seleccionados.
function borrarArticuloSeleccionado(evt){
  cajaPedidos.removeChild(evt.target.parentNode) //Se borra el nodo padre (div que contiene el artículo).
}

//--------------------------------------------------------------------------------------------------
//Función que muestra ventana emergente de notificaciones.
function mostrarVentanaEmergente(titulo, mensaje, icono) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
    confirmButtonText: 'Aceptar',
  })
}

//--------------------------------------------------------------------------------------------------
//Inicio de ejecución.
leerFamilias()
leerRegistrosLocalStorage()
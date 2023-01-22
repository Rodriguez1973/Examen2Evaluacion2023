//Declaraciones.
let estrellaS = '⭐'
let estrellaN = '☆'

//--------------------------------------------------------------------------------------------------
//Referencias de la interfaz.
familiasArticulos = document.getElementById('familiasArticulos') //Select familiasArticulos.

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
function añadirOpcionesFamilia(datosLeidos){
    for (i = 0; i < datosLeidos.length; i++) {
        let opcion = document.createElement('option') //Crea elemento option.
        opcion.value = datosLeidos[i].id //Asigna como valor el id.
        opcion.text = datosLeidos[i].Descripcion //Asigna como texto la descripción.
        // Añade a la select <select id=”familiasArticulos”> la option creada
        familiasArticulos.appendChild(opcion)
      }
}

//--------------------------------------------------------------------------------------------------
//Ejecución.
leerFamilias()

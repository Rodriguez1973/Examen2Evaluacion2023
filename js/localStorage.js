/*
Proyecto realizado por: José A. Rodríguez López
Fecha: 24/01/2022
*/
let registrosLocalStorage = [] //Array donde se almacenaran las variables locales del localStorage.
let ultimaClave = obtenerUltimaClave() //Ultima clave asignada.

//--------------------------------------------------------------------------------------------------
//Almacena un articulo en el localStorage.
function guardarArticuloLocalStorage(articulo) {
  if (typeof Storage !== 'undefined') {
    window.localStorage.setItem(++ultimaClave, articulo.Nombre)
  } else {
    mostrarVentanaEmergente(
      'Almacenamiento',
      'El navegador no admite almacenamiento local.',
      'warning',
    )
  }
}

//--------------------------------------------------------------------------------------------------
//Lee los registros del local storage.
function leerRegistrosLocalStorage() {
  registrosLocalStorage = []
  for (let indice = 0; indice < window.localStorage.length; indice++) {
    let clave = window.localStorage.key(indice)
    let registro = window.localStorage.getItem(clave)
    registrosLocalStorage[clave] = registro
  }
  registrosLocalStorage = registrosLocalStorage.reverse()
  mostrarRegistrosLocalStorage(registrosLocalStorage)
}

//--------------------------------------------------------------------------------------------------
//Muestra un registro del LocalStorage.
function mostrarRegistrosLocalStorage(registrosLocalStorage) {
  for (const clave in registrosLocalStorage) {
    let parrafo = document.createElement('p')
    parrafo.innerText = registrosLocalStorage[clave]
    cajaComprasAnteriores.appendChild(parrafo)
  }
}

//--------------------------------------------------------------------------------------------------
//Obtiene la última clave asignada en el local storage y si no devuelve 0.
function obtenerUltimaClave() {
  let uClave = 0

  for (let i = 0; i < window.localStorage.length; i++) {
    if (uClave < parseInt(window.localStorage.key(i))) {
      uClave = window.localStorage.key(i)
    }
  }
  return uClave
}
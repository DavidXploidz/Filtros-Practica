//Variables Globales

const titulo = document.querySelector('#titulo')
const descripcion = document.querySelector('#descripcion')
const fecha = document.querySelector('#fecha')
const imagen = document.querySelector('#imagen')

const contenedorPadre = document.querySelector('#contenedorPadre')

const blue = document.querySelector('#deportes')
const orange = document.querySelector('#entretenimiento')
const indigo = document.querySelector('#indigo')



let datosGenerales = []
let datosGuardados

//Obtener datos json
document.addEventListener('DOMContentLoaded',()=> {
    cargarDatos()
})


blue.addEventListener('click',() => {
  const todos = document.querySelectorAll('.descripcion')
  todos.forEach(function(parrafo){
   
    if(parrafo.textContent == 'Blue'){
      parrafo.parentElement.classList.toggle('mostrar')
    }

  })

})

orange.addEventListener('click',() => {
  const todos = document.querySelectorAll('.descripcion')
  todos.forEach(function(parrafo){

    if(parrafo.textContent == 'Orange'){
      parrafo.parentElement.classList.toggle('mostrar')

    }
 
    
  })
})



const cargarDatos = async () => {
    const respuesta = await fetch('http://127.0.0.1:5500/MOCK_DATA2.json')
    const resultado = await respuesta.json()
    const datos = resultado
    datosGenerales = datos
    generarData(datos)
}

function generarData(datos){
    limpiarHTML()
    datos.forEach(item => {
        const newDiv = document.createElement('DIV')
        newDiv.classList.add('ocultar')

        const newIMG = document.createElement('IMG')
        newIMG.src = `images/jordan1.jpg`

        const newParrafo = document.createElement('P')
        newParrafo.textContent = `${item.titulo}`
        newParrafo.classList.add('titulo')

        const newParrafo2 = document.createElement('P')
        newParrafo2.textContent = `${item.color}`
        newParrafo2.classList.add('descripcion')

        const newFecha = document.createElement('P')
        newFecha.textContent = `${item.precio}`

        newDiv.appendChild(newIMG)
        newDiv.appendChild(newParrafo)
        newDiv.appendChild(newParrafo2)
        newDiv.appendChild(newFecha)
        contenedorPadre.appendChild(newDiv)
    });
}



function limpiarHTML(){
    while(contenedorPadre.firstChild){
        contenedorPadre.removeChild(contenedorPadre.firstChild)
    }
}

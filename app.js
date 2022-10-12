//Variables Globales

const titulo = document.querySelector('.titulo')
const descripcion = document.querySelector('.descripcion')
const fecha = document.querySelector('.fecha')
const imagen = document.querySelector('#imagen')
const contenedorPadre = document.querySelector('#contenedorPadre')
// const filtro1 = document.querySelector('#deportes')
const filtro2 = document.querySelector('#entretenimiento')


let datosGenerales = []
let datosGuardados = []

//Obtener datos json
document.addEventListener('DOMContentLoaded',()=> {
    cargarDatos()
})


let checkbox = document.querySelector('#deportes')
checkbox.addEventListener("change", validaCheckbox, false)

function validaCheckbox()
{
  var checked = checkbox.checked;
  if(checked){
    const copyarray = [{id: 21, titulo: "Por favor!!", color: "Blue", precio: 155 }]
    const porColorAzul = datosGenerales.filter(filtrado => filtrado.color == 'Blue')
    datosGuardados = porColorAzul
    console.log(datosGuardados)
    console.log(copyarray)
    const array3 = porColorAzul.concat(copyarray);
    console.log(array3)
    generarData(array3)
  }else{
    const porColorAzul = datosGenerales.filter(filtrado => filtrado.color !== 'Blue')
    datosGuardados = porColorAzul
    generarData(datosGuardados)
  }
}

let checkbox2 = document.querySelector('#entretenimiento')
checkbox2.addEventListener("change", validaCheckbox2, false)

function validaCheckbox2()
{
  var checked = checkbox2.checked;
  if(checked){
    const porColorOrange = datosGenerales.filter(filtrado => filtrado.color == 'Orange')
    datosGuardados = porColorOrange
    datosGuardados.concat(porColorOrange)
    console.log(datosGuardados)
    generarData(porColorOrange)
  }else{
    const porColorOrange = datosGenerales.filter(filtrado => filtrado.color !== 'Orange')
    datosGuardados = porColorOrange
    generarData(porColorOrange)
  }
}

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


import { barcelona, roma, paris, londres } from './ciudades.js' //Desestructuracion de datos, importamos desde otro archivo js de esta manera

//obtener los elementos del dom (document object model)
//query = consulta
let enlaces = document.querySelectorAll('a') //Se guardan en una array por hacer una consulta todas las etiquetas con a
let eTitulo = document.getElementById('titulo')
let eSubtitulo = document.getElementById('subtitulo')
let eParrafo = document.getElementById('parrafo')
let ePrecio = document.getElementById('precio')
let eFechaVuelo = document.getElementById('fechaVuelo')

//Evento click a cada enlace para ejecutar una accion

enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        //remover la clase active de todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        })

        //Agregar que este activo al actual en uso
        this.classList.add('active')

        //obtener el contenido correspondiente segun el enlace
        let info = getInfo(this.textContent)

        //Mostrar el contenido en el dom
        eTitulo.innerHTML = info.titulo
        eSubtitulo.innerHTML = info.subtitulo
        eParrafo.innerHTML = info.parrafo
        ePrecio.innerHTML = info.precio
        eFechaVuelo.innerHTML = info.fechaVuelo

      })
});

//Funcion para traer la informacion correcta respectiva de cada ciudad
function getInfo(enlace){
    let info = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'Paris' : paris,
        'Londres' : londres
    }
    return info[enlace]
}

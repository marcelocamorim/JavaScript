//Aprendendo sobre Geolocalização em Javascript - Curso de Javascript - Aula 116

const long=document.getElementById("long")
const lati=document.getElementById("lati")


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocalização,erroLocalização)

}else{
    console.log("geolocalização não suportada")
}



function mostrarLocalização(pos){
    lati.innerHTML=`Latitude ${pos.coords.latitude}`
    long.innerHTML=`Longitude ${pos.coords.longitude}`

}

function erroLocalização(){
    console.log("erro ao obter a localização")
}

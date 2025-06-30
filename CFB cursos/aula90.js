//Aprendendo sobre Objetos Literais em Javascript #P1 - Curso de Javascript - Aula 90

const objetos = document.getElementById("objetos")

//cria o objeto
let computador = {
    cpu: "i9",
    ram: "64gb",
    hd: "2tb",
    info:function(){//cria funções dentro do objeto
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD.: ${this.hd}`)
    }
}

computador["monitor"]="22pol"//cria nova propriedade para o objeto
computador.placaVideo="RTX"//cria nova propriedade para o objeto
console.log(computador)

let computadores = [
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"

    },
    {
        cpu: "i7",
        ram: "32gb",
        hd: "2tb"

    },
    {
        cpu: "i5",
        ram: "16gb",
        hd: "1tb"

    },
]

computadores.forEach((c)=>{
    const div = document.createElement("div")
    div.innerHTML=c.cpu+"<br>"+c.ram+"<br>"+c.hd
    div.setAttribute("class","computador")
    objetos.appendChild(div)
})



// console.log(computadores)

// objetos.innerHTML = JSON.stringify(computadores)
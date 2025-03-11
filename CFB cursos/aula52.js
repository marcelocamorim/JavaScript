//trabalhando com ARRAYS

const caixa=document.querySelector("#caixa")

let cores=["azul","verde","vermelho"]
let cursos=["HTML","CSS","JavaScript",cores]//é possivel add um array dentro de outro array

cursos.push("Phyton", "C++") // metodo push adiciona elementos no final do array
cursos.pop() // retira o ultimo elemento do array

cursos.unshift("React") // aciciona elementos no inicio do array
cursos.shift() // retira o primeiro elemento do array



cursos.map((el)=>{
    let p=document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)

})

console.log(cursos[3][2])//primeiro indice é do primeiro array e o segundo é do segundo array
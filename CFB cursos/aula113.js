//Aprendendo sobre a propriedade accessKey em Javascript - Curso de Javascript - Aula 113

// A propriedade accessKey em JavaScript é usada para definir ou obter a tecla de atalho associada a um elemento HTML, permitindo que o usuário ative ou foque esse elemento usando uma combinação de teclas no teclado.

// Como funciona
// Quando você define um accessKey, o navegador permite acessar o elemento pressionando uma combinação de teclas (varia por sistema e navegador):

// Windows: Alt + accessKey
// Mac: Control + Option + accessKey


const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const posx = document.getElementById("posx")
const posy = document.getElementById("posy")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")

q1.accessKey="b"
q2.accessKey="n"

console.log("q1: "+ q1.accessKey)
console.log("q2: "+ q2.accessKey)


const info = (el) => {
    let DOMRectt_q = el.getBoundingClientRect()
    posx.innerText = `posx:${DOMRectt_q.x}`
    posy.innerText = `posy:${DOMRectt_q.y}`
    largura.innerText = `largura:${DOMRectt_q.width}`
    altura.innerText = `altura:${DOMRectt_q.height}`
}


q1.addEventListener("click", (evt) => {
    info(evt.target)
})

q2.addEventListener("click", (evt) => {
    info(evt.target)
})
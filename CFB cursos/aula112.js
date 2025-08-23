//função getBoundingClientRect() em Javascript - Curso de Javascript - Aula 112

const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const posx = document.getElementById("posx")
const posy = document.getElementById("posy")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")




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
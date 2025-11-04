const btn = document.getElementById("btn")
const texto = document.getElementById("texto")

const d1 = document.getElementById("dv1")
const d2 = document.getElementById("dv2")
const d3 = document.getElementById("dv3")

const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")


const cont1 = document.getElementById("cont1")
const cont2 = document.getElementById("cont2")
const cont3 = document.getElementById("cont3")
let ct1 = 0
let ct2 = 0
let ct3 = 0

cont1.innerHTML = `contagem: 0`
cont2.innerHTML = `contagem: 0`
cont3.innerHTML = `contagem: 0`


btn.addEventListener("click", (evt) => {

    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    texto.style.color = `rgb(${r}, ${g}, ${b})`
})

dv1.addEventListener("mouseover", (evt) => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    p1.style.color = `rgb(${r}, ${g}, ${b})`    
    ct1++
    cont1.innerHTML = `contagem: ${ct1}`

})
dv2.addEventListener("mouseover", (evt) => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    p2.style.color = `rgb(${r}, ${g}, ${b})`
    ct2++
    cont2.innerHTML = `contagem: ${ct2}`
})
dv3.addEventListener("mouseover", (evt) => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    p3.style.color = `rgb(${r}, ${g}, ${b})`
    ct3++
    cont3.innerHTML = `contagem: ${ct3}`
})





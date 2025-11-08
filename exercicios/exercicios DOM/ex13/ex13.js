const imgGrande=document.querySelector(".grande")

const css=document.getElementById("css")
const html=document.getElementById("html")
const js=document.getElementById("js")

css.addEventListener("click",()=>{
    imgGrande.setAttribute("src", "img-css.png")
})
html.addEventListener("click",()=>{
    imgGrande.setAttribute("src", "img-html.png")
})
js.addEventListener("click",()=>{
    imgGrande.setAttribute("src", "javascript-logo-png_seeklogo-255387.png")
})
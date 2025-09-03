//WebStorage, localStorage e SessionStorage em Javascript - Curso de Javascript - Aula 121

const f_texto=document.getElementById("f_texto")
const p_texto=document.getElementById("p_texto")
const btn_texto=document.getElementById("btn_texto")

btn_texto.addEventListener("click",(evt)=>{

})

let num=10
let curso="JavaScript"

localStorage.setItem("nome","bruno")
localStorage.setItem("canal","CFB cursos")
localStorage.setItem("curso",curso)
localStorage.clear()


//alert(localStorage.getItem(localStorage.key(0)))
// alert(window.localStorage.getItem("nome"))
// alert(window.localStorage.getItem("canal"))
// alert(window.localStorage.getItem("curso"))

//localStorage.clear()

sessionStorage.setItem("nome","bruno")
sessionStorage.setItem("canal","CFB cursos")
sessionStorage.setItem("curso",curso)
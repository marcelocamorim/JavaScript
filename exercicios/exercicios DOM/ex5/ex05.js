const img=document.getElementById("img")
const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")

btn1.addEventListener("click", ()=>{
    img.setAttribute("src", "img-css.png")
    img.setAttribute("alt", "Logo CSS 3")
})
btn2.addEventListener("click", ()=>{
    img.setAttribute("src", "img-html.png")
    img.setAttribute("alt", "Logo HTML 5")
})



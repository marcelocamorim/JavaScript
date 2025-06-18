const olhos=[...document.querySelectorAll(".olho")]




let posx_mouse=0
let posy_mouse=0



window.addEventListener("mousemove",(evt)=>{
    posx_mouse=evt.clientX
    posy_mouse=evt.clientY
    console.log(posx_mouse)
})
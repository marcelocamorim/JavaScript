const olhos=[...document.querySelectorAll(".olho")]




let posx_mouse=0
let posy_mouse=0



window.addEventListener("mousemove", (evt) => {
    const posx_mouse = evt.clientX
    const posy_mouse = evt.clientY

    // Exemplo: ângulo baseado sempre no canto superior esquerdo (0,0)
    const angle = Math.atan2(posy_mouse, posx_mouse) * 180 / Math.PI

    olhos.forEach(ol => {
        ol.style.transform = `rotate(${angle}deg)`
    })
})

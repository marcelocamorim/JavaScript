const olhos=[...document.querySelectorAll(".olho")]




let posx_mouse=0
let posy_mouse=0



window.addEventListener("mousemove", (evt) => {
    const posx_mouse = evt.clientX
    const posy_mouse = evt.clientY

    olhos.forEach(ol => {
        const rect = ol.getBoundingClientRect()
        const olhoX = rect.left + rect.width / 2
        const olhoY = rect.top + rect.height / 2

        const angle = Math.atan2(posy_mouse - olhoY, posx_mouse - olhoX) * 180 / Math.PI
        ol.style.transform = `rotate(${angle}deg)`
    })
})

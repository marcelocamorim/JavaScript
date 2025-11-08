const input = document.getElementById("input")
const btn = document.getElementById("btn")
const crono = document.getElementById("crono")

btn.addEventListener("click", () => {
    let tempo = parseInt(input.value)
    crono.innerHTML = tempo

    let intervalo = setInterval(() => {
        tempo--
        crono.innerHTML = tempo

        if (tempo <= 0) {
            clearInterval(intervalo)
            crono.innerHTML = `Tempo Zerado `
        }
    }, 1000)

})



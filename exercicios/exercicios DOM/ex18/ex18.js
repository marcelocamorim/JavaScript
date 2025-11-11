const nome = document.getElementById("nome")
const nota1 = document.getElementById("nota1")
const nota2 = document.getElementById("nota2")
const nota3 = document.getElementById("nota3")
const btn = document.getElementById("registrar")
const tabela = document.getElementById("listaAlunos")


function limpar() {
    nome.value = ""
    nota1.value = 0
    nota2.value = 0
    nota3.value = 0
}
let alunos = []

btn.addEventListener("click", () => {
    if (!nome.value || !nota1.value || !nota2.value || !nota3.value) {

        alert("Preencha todos os campos antes de registrar!")
        return
    }

    let notas = [Number(nota1.value), Number(nota2.value), Number(nota3.value)]


    function calcularMedia() {
        let soma = notas.reduce((acc, val) => acc + val, 0)
        let media = soma / notas.length
        return media.toFixed(2)
    }
    const media = calcularMedia()

    const tdNome = document.createElement("td")
    const tdNota1 = document.createElement("td")
    const tdNota2 = document.createElement("td")
    const tdNota3 = document.createElement("td")
    const tdMedia = document.createElement("td")
    const tdStatus = document.createElement("td")

    tdNome.textContent = nome.value.toLowerCase()
    tdNota1.textContent = nota1.value
    tdNota2.textContent = nota2.value
    tdNota3.textContent = nota3.value
    tdMedia.textContent = calcularMedia()
    media > 5 ? tdStatus.textContent = "Aprovado" : tdStatus.textContent = "Reprovado"

    if(tdStatus.textContent === "Aprovado"){        
        tdStatus.style.backgroundColor="rgba(4, 109, 21, 1)"
        tdStatus.style.color="rgba(255, 255, 255, 1)"
        
    }else{
        tdStatus.style.backgroundColor="rgba(216, 0, 0, 1)"
        tdStatus.style.color="rgba(255, 255, 255, 1)"
    }

    const tr = document.createElement("tr")
    tabela.appendChild(tr)
    tr.appendChild(tdNome)
    tr.appendChild(tdNota1)
    tr.appendChild(tdNota2)
    tr.appendChild(tdNota3)
    tr.appendChild(tdMedia)
    tr.appendChild(tdStatus)


    alunos.push({nome:nome.value, notas:[Number(nota1.value), Number(nota2.value), Number(nota3.value)]})
    limpar()
    console.log(alunos)

})


const buscar=document.getElementById("buscar")

buscar.addEventListener("input",()=>{
    let textoBuscado=buscar.value.toLoerCase()
    
})
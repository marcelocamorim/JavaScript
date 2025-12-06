// 📌 Exercícios com Objetos
// 🔹 Básicos

// Crie um objeto livro com titulo, autor e anoPublicacao. Altere o ano para 2025 e exiba o objeto atualizado.
let livro={
    titulo:"A torre negra",
    Autor:"Stephen King",
    ano:1999
}
livro.ano=2025
console.log(livro)
console.log("---------------------------")

// Crie um objeto carro com as propriedades: marca, modelo e ano. Depois mostre cada propriedade no console.
let carro={
    marca:"VolksWagen",
    modelo:"Fox",
    ano:2009,

    info:function(){
        console.log(`Marca: ${carro.marca} - Modelo: ${carro.modelo} - Ano: ${carro.ano}`)
        console.log("---------------------------")
    }
}
carro.info()


// Crie um objeto aluno com nome, idade e notas (um array de números). Mostre a média das notas.

let aluno={
    nome:"João",
    idade:18,
    notas:[10,6,5,10,3],

    calcularMedia:function(){
        let soma=this.notas.reduce((acc,val)=>acc+val,0)
        let media=soma/this.notas.length        
        return media
    },

    info:function(){
        console.log(`Informações do Aluno`)
        let mediaAluno=this.calcularMedia().toFixed(2)
        console.log(`Nome: ${aluno.nome}`)
        console.log(`Idade: ${aluno.idade}`)
        console.log(`Notas: ${aluno.notas}`)
        console.log(`Média: ${mediaAluno}`)

        if(mediaAluno>=5){
            console.log("Aluno Aprovado!")
        }else{
            console.log("Aluno Reprovado!")
        }
    }
    
}

aluno.info()

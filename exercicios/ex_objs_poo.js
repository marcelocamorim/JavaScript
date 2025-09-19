// 📌 Exercícios com Objetos
// 🔹 Básicos



// Crie um objeto livro com titulo, autor e anoPublicacao. Altere o ano para 2025 e exiba o objeto atualizado.



// Crie um objeto carro com as propriedades: marca, modelo e ano. Depois mostre cada propriedade no console.
let carro = {
    marca: "volksWagen",
    modelo: "fox",
    ano: 2009
}
console.log(carro.marca)
console.log(carro.modelo)
console.log(carro.ano)


// Crie um objeto aluno com nome, idade e notas (um array de números). Mostre a média das notas.
let aluno={
    nome: "joão",
    idade: 18,
    notas: [8,7,9,5,6,7,10],

    media: function(){
        let media=this.notas.reduce((acc,val)=>acc+val, 0)
        let result=media / this.notas.length
        return Number(result.toFixed(2))
    }
}
console.log(aluno.media())
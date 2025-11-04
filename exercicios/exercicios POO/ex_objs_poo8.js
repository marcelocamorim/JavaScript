// 🔹 4. Jogo de adivinhação com objeto
// Crie um objeto jogo com:
// Uma propriedade numeroSecreto (gerado aleatoriamente entre 1 e 10).
// Um método adivinhar(numero) que retorna:
// "Acertou!" se for igual.
// "Muito alto" ou "Muito baixo" caso contrário.


let jogo = {
    numeroSecreto: Math.floor(Math.random() * 10)+1,

    adivinhar: function (num) {
        let numero = this.numeroSecreto
        console.log(`palpite: ${num} - Sorteado: ${numero}`)
        if (num >= 0 && num <= 10) {
            if (num === numero) {
                return "Acertou"
            } else if (num > numero) {
                return "Numero muito alto"
            } else{
                return "Numero muito baixo"
            }


        } else {
            return "numero invalido - digite um numero de 0 a 10"
        }

    }
}

console.log(jogo.adivinhar(2))



// 🔹 5. Cadastro de alunos
// Crie um objeto escola que armazena alunos em um array, cada aluno sendo {nome, notas: []}.
// Métodos:
// adicionarAluno(nome)
// adicionarNota(nome, nota)
// calcularMedia(nome)
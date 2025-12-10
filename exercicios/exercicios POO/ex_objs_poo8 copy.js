// 🔹 4. Jogo de adivinhação com objeto
// Crie um objeto jogo com:
// Uma propriedade numeroSecreto (gerado aleatoriamente entre 1 e 10).
// Um método adivinhar(numero) que retorna:
// "Acertou!" se for igual.
// "Muito alto" ou "Muito baixo" caso contrário.


const jogo = {
    numeroSecreto: Math.floor(Math.random()*11),

    adivinhar:function(num){
        if(num===this.numeroSecreto){
            console.log(`ACERTOU!!! Palpite: ${num} - Sorteado: ${this.numeroSecreto}`)
        }else if(num<this.numeroSecreto){
            console.log(`Não foi dessa Vez! número sorteado MAIOR do que seu palpite`)
        }else if(num>this.numeroSecreto){
            console.log(`Não foi dessa Vez! número sorteado MENOR do que seu palpite`)
        }
    }
}

jogo.adivinhar(4)
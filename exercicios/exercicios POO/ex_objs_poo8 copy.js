// 🔹 4. Jogo de adivinhação com objeto
// Crie um objeto jogo com:
// Uma propriedade numeroSecreto (gerado aleatoriamente entre 1 e 10).
// Um método adivinhar(numero) que retorna:
// "Acertou!" se for igual.
// "Muito alto" ou "Muito baixo" caso contrário.

const jogo={
    numeroSecreto: Math.floor(Math.random()*10)+1, 

    adivinhar:function(palpite){
        if(palpite>this.numeroSecreto){
            console.log(`Palpite "MAIOR" que o numero sorteado - `)
            return
        }else if(palpite<this.numeroSecreto){
            console.log(`Palpite "MENOR" que o numero sorteado`)
            return
        }

        console.log(`Parabéns! Você Ganhou!`)
    }
}
jogo.adivinhar(5)

console.log(jogo.numeroSecreto)
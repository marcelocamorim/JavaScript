// Aprendendo sobre a função SYMBOL em Javascript 

const nome = Symbol("nome")
const numero = Symbol("numero")
const corUniforme = Symbol("cor do uniforme")

const jogador = {
    [nome]: "j1",
    [numero]: 10,
    [corUniforme]: "amarelo"
}

for (p in jogador) {
    console.log(p)
}

console.log(jogador[nome])
console.log(jogador[numero])
console.log(jogador[corUniforme])



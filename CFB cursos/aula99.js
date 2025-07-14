// Aprendendo sobre a função SYMBOL em Javascript 

class Jogador {
    constructor(nome) {
        this.id = Symbol()
        this.nome = nome
    }
}

let jogadores = [new Jogador("j1"), new Jogador("j2"), new Jogador("j3"), new Jogador("j4"), new Jogador("j1"), new Jogador("j3"),]

let s=[]

let s_jogadores=jogadores.filter((j)=>{
    return j.nome=="j1"
})

s=s_jogadores.map((j)=>{
    return j.id
})

console.log(jogadores)
console.log(s_jogadores)
console.log(s)


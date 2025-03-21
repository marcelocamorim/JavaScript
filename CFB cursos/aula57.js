class Pessoa{
    constructor(pnome){
        this.nome=pnome
    }
}

let p1=new Pessoa("bruno")
let p2=new Pessoa("marcelo")
let p3=new Pessoa("joãozinho")

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)

// A classe Pessoa é um molde para criar pessoas com um nome personalizado.
// O constructor(pnome) é chamado automaticamente quando você cria um novo objeto usando new.
// A propriedade nome de cada objeto é definida com o valor passado (bruno, marcelo, joãozinho).
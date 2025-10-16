// PARTE 2 — Herança e Reuso
// 🔹 4. Classe Animal e subclasses
// Crie uma classe Animal com nome e um método falar().
// Depois crie subclasses:
// Cachorro → método falar() diz "Au au"
// Gato → método falar() diz "Miau"
// 🧠 Desafio extra: adicione uma propriedade tipo no construtor das subclasses.
class Animal{
    constructor(nome){
        this.nome=nome
    }

    falar(){
        console.log("Som de animal")
    }
}

class Cachorro extends Animal{
    constructor(nome, tipo){
        super(nome)
        this.tipo=tipo
    }
    falar(){
        console.log(this.tipo + "au au")
    }
    
}
class Gato extends Animal{
    constructor(nome, tipo){
        super(nome)
        this.tipo=tipo
    }
    falar(){
        console.log(this.tipo +"Miauu")
    }
    
}

const c1 = new Cachorro("ralf", "Cachorro")
const g1 = new Gato("banguela", "gato")

g1.falar()
c1.falar()

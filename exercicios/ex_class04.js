// Crie uma classe Carro com marca, modelo, ano e um método ligar().
// Depois crie dois carros diferentes e teste o método.
class Carro{
    constructor(nome,modelo,ano){
        this.nome=nome
        this.modelo=modelo
        this.ano=ano
    }

    ligar(){
        this.ligado=true
        console.log("Carro Ligado")
    }

    desligar(){
        this.ligado=false
        console.log("Carro Desligado")
    }


}

let carro1= new Carro("Fox", "route", 2009)
carro1.ligar()
carro1.desligar()

// 2. Praticar métodos e propriedades
// Aprenda a criar métodos que alteram os dados internos do objeto.
// Crie uma classe Produto com nome, preco e estoque.
// Adicione métodos para aumentar e diminuir o estoque.

class Produto{
    constructor(nome, preco, estoque=0){
        this.nome=nome
        this.preco=preco
        this.estoque=estoque
    }

    maisEstoque(quant){
        this.estoque += quant
    }
    menosEstoque(quant){
        if(quant<=this.estoque){
            this.estoque -= quant
        }else{
            console.log(`Estoque insuficiente requisição:${quant} - Estoque real:${this.estoque}`)
        }
    }
}

let p1 = new Produto("cenoura", 5, 10)
console.log(p1)
p1.maisEstoque(10)
console.log(p1)
p1.menosEstoque(4)
console.log(p1)
p1.menosEstoque(20)
console.log(p1)

// 3. Aprender sobre herança (extends)
// Uma classe pode herdar de outra:
// 🎯 Exercício:
// Crie uma classe Funcionario e uma classe Gerente que herda de Funcionario.
// O gerente deve ter um bônus no salário.


class Funcionario{
    constructor(nome, salario){
        this.nome=nome
        this.salario=salario
    }

    apresentar(){
        console.log(`Nome: ${this.nome} - Salario: ${this.salario}`)
    }
}


class Gerente extends Funcionario{
    constructor(bonus){
        this.bonus=bonus
    }
}
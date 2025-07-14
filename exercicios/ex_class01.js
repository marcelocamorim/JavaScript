//  Exercício 1 – Criar uma classe Carro
// Objetivo: Criar um objeto com marca, modelo e ano e exibir no console.
class Carro{
    constructor(nome,portas,velocidade){
        this.nome=nome
        this.portas=portas
        this.velocidade=velocidade
    }
    info(){
        console.log(this.nome)
        console.log(this.portas)
        console.log(this.velocidade)
    }
}

const c1=new Carro("ferrari",2,350)

c1.info()
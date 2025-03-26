//Entendendo sobre Herança em POO com Javascript - Objetos #P6 - Aula 62

class Carro{ //class Pai / base / super class
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }

}

class Militar extends Carro{ // class filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem=blindagem
        this.municao=municao  
        this.setCor("Verde")      // define a cor por padrão, todos serão verdes
    }

    atirar=function(){
        if(this.municao>0){
            this.municao--
        }

    }
}

const c1=new Carro("normal",4)
c1.ligar()
c1.setCor("Preto")

const c2=new Militar("Lutardor",1,100,50)
c2.setCor("Azul")


console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log(`----------------`)

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`----------------`)
-//criar class carro
//nome,portas,
// ligado,velocidade,cor
//metodo, ligar, mudar cor
//criar claa militar
//nome,portas, blindagem, munição
//definir cor como verde
// criar metodo para atirar
//criar dois carros


class Carro{
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

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem=blindagem
        this.municao=municao
        this.setCor("verde")
    }

    atirar=function(){
        if(this.municao>0)
            this.municao--
    }
}

const c1=new Carro("fox",4)
c1.ligar()
c1.setCor("preto")

const c2=new Militar("tanque",1,100,50)
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
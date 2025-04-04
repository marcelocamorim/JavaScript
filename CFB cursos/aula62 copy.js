-//criar class carro
//nome,portas,
// ligado,velocidade,cor
//metodo, ligar, mudar cor
//criar claa militar
//nome,portas, blindagem, munição
//definir cor como verde
// criar metodo para atirar
//criar dois carros

//adicionar carros no html
//carro normal bloqueia blindagem e municao



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

class Mililitar extends Carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem=blindagem
        this.municao=municao
        this.setCor("verde")
    }

    atirar=function(){
        if(this.municao>0){
            municao--
        }
    }

    
}

const c1=new Carro("palio", 4)

const c2=new Mililitar("tanque",1,100,80)
c2.setCor("Azul Camuflado")
c2.ligar()
c2.atirar()
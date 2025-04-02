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
        this.ligar=false
        this.vel=0
        this.cor=undefined
    }

    ligado=function(){
        this.ligar=true
    }
    desligado=function(){
        this.ligar=false
    }
    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{
    constructor(nome,portas,blindagem,municao){
        this.blindagem=blindagem
        this.municao=municao
        this.setCor("verde")
    }

    atirar=function(){
        if(municao>0){
            municao--
        }
    }
}


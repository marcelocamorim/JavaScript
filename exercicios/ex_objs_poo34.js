// 🚀 Exercícios — Padrão Factory Method (nível intermediário → avançando)
/*
Exercício 4 – Fábrica de Formas Geométricas

Crie:

Circulo (método area() → π * raio²)

Quadrado (método area() → lado²)

Retangulo (método area() → base * altura)

Crie FormaFactory com método criarForma(tipo, ...parametros) e use switch para retornar o objeto correto.
Teste cada forma chamando area().
*/
class Circulo{
    constructor(raio){
        this.raio=raio
    }
    area(){
        return (Math.PI * Math.pow(this.raio,2)).toFixed(2)
    }
}

class Quadrado{
    constructor(lado){
        this.lado=lado
    }
    area(){
        return Math.pow(this.lado,2)
    }
}

class Retangulo{
    constructor(base, altura){
        this.base=base
        this.altura=altura
    }
    area(){
        return this.base * this.altura
    }
}

class FormaFactory{

    criarForma(){
        switch(tipo){
            case circulo:
                
        }

    }
}
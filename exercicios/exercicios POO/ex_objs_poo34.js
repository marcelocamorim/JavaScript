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
class Forma {
    constructor(opcoes) {
        this.raio = opcoes.raio
        this.lado = opcoes.lado
        this.base = opcoes.base
        this.altura = opcoes.altura
    }
}

class Circulo extends Forma {
    constructor(opcoes) {
        super(opcoes)
    }
    area() {
        return (Math.PI * Math.pow(this.raio, 2)).toFixed(2)
    }
}

class Quadrado extends Forma{
    constructor(opcoes) {
        super(opcoes)
    }
    area() {
        return Math.pow(this.lado, 2)
    }
}

class Retangulo extends Forma{
    constructor(opcoes) {
        super(opcoes)
    }
    area() {
        return this.base * this.altura
    }
}

class FormaFactory {

    criarForma(tipo, opcoes={}) {
        switch (tipo.toLowerCase()) {
            case "circulo":
                console.log(`Circulo criado com sucesso!`)
                return new Circulo(opcoes)
            case "quadrado":
                console.log(`quadrado criado com sucesso!`)
                return new Quadrado(opcoes)
            case "retangulo":
                console.log(`retangulo criado com sucesso!`)
                return new Retangulo(opcoes)
            default:
                throw new Error(`Tipo de Forma "${tipo}" Invalido!`)
        }

    }
}

const fabrica=new FormaFactory()

const c1 = fabrica.criarForma("circulo", {raio:5})
const q1 = fabrica.criarForma("quadrado", {lado:5})
const r1 = fabrica.criarForma("retangulo", {base:10, altura:4})

console.log(c1.area())
console.log(q1.area())
console.log(r1.area())
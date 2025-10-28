// 🚀 Exercícios — Padrão Factory Method (nível intermediário → avançando)
// Exercício 1 – Fábrica de Veículos

// Crie as classes:
// Carro (com método dirigir())
// Moto (com método pilotar())

// Crie uma classe VeiculoFactory com o método criarVeiculo(tipo) que:
// se tipo for "carro", retorna uma instância de Carro
// se tipo for "moto", retorna uma instância de Moto
// Teste criando veículos diferentes e chamando seus métodos específicos.

class Carro{
    constructor(nome){
        this.nome=nome

    }

    dirigir(){
        console.log(`Carro ${this.nome} em movimento`)
    }
}

class Moto{
    constructor(nome){
        this.nome=nome
    }

    pilotar(){
        console.log(`Moto ${this.nome} em movimento`)
    }
}

class VeiculoFactory{

    criarVeiculo(tipo, nome){
        if(tipo==="carro"){return new Carro(nome)}
        if(tipo==="moto"){return new Moto(nome)}
    }
}

const veiculoFactory = new VeiculoFactory()

const carro1 = veiculoFactory.criarVeiculo("carro", "Fox")
const carro2 =veiculoFactory.criarVeiculo("carro", "HB20")
const carro3 =veiculoFactory.criarVeiculo("carro", "Palio")

const moto1= veiculoFactory.criarVeiculo("moto", "Honda 150" )
const moto2= veiculoFactory.criarVeiculo("moto", "Kawasaki Ninja" )

carro1.dirigir()
carro2.dirigir()
carro3.dirigir()


moto1.pilotar()
moto1.pilotar()


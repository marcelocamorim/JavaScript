// 🚀 Exercícios — Padrão Factory Method (nível intermediário → avançando)
// Exercício – Fábrica de Veículos dinamica
// com mais de um tipo de objeto

/*
crie a class carro com tipo, marca, modelo, ano, cor, id, portas e ligado=bolean
metodo ligar
metodo desligar
metodo status mostra toda informação do carro
*/

/*
crie a class moto com tipo, marca, modelo, ano, cor, id, cilindradas e ligado=bolean
metodo ligar
metodo desligar
metodo status mostra toda informação do carro
*/


/*
crie a class caminhao com tipo, marca, modelo, ano, cor, eixos, capacidade, id, e ligado=bolean
metodo ligar
metodo desligar
metodo status mostra toda informação do carro
*/



/*
crie a class veiculoFactory com:
veiculosCriados = array
idAtual para identificar os ids de cada carro
metoto criarVeiculo(tipo,  opcoes={})
em opçoes adicione todos os parametros da class e valores alternativos para caso não sejam especificados
metodo listar veiculos - exibe informaçoes de todos os veiculos criados
*/



//tipo, marca, modelo, ano, cor, id, portas e ligado=bolean
class Carro{
    constructor({tipo, marca, modelo, ano, cor, id, portas}){
        this.tipo=tipo
        this.marca=marca
        this.modelo=modelo
        this.ano=ano
        this.cor=cor
        this.id=id
        this.portas=portas
        this.ligado=false
    }

    ligar(){
        this.ligado=true
        console.log(`${this.tipo} ${this.modelo} Ligado!`)
    }

    desligar(){
        this.ligado=false
        console.log(`${this.tipo} ${this.modelo} Desligado!`)
    }

    status(){
        console.log(`ID: ${this.id} - Tipo: ${this.tipo} - Marca: ${this.marca} - Modelo: ${this.modelo} - ano: ${this.ano} - Cor: ${this.cor} - Portas: ${this.portas} - Status: ${this.ligado?"ligado":"Desligado"}`)
    }
}

//tipo, marca, modelo, ano, cor, id, cilindradas e ligado=bolean
class Moto{
    constructor({tipo, marca, modelo, ano, cor, id, cilindradas,}){
        this.tipo=tipo
        this.marca=marca
        this.modelo=modelo
        this.ano=ano
        this.cor=cor
        this.id=id
        this.cilindradas=cilindradas
        this.ligado=false
    }

    ligar(){
        this.ligado=true
        console.log(`${this.tipo} ${this.modelo} Ligado!`)
    }

    desligar(){
        this.ligado=false
        console.log(`${this.tipo} ${this.modelo} Desligado!`)
    }

    status(){
        console.log(`ID: ${this.id} - Tipo: ${this.tipo} - Marca: ${this.marca} - Modelo: ${this.modelo} Cilindradas: ${this.cilindradas} - ano: ${this.ano} - Cor: ${this.cor} - Status: ${this.ligado?"ligado":"Desligado"}`)
    }
}

//tipo, marca, modelo, ano, cor, eixos, capacidade, id, e ligado=bolean
class Caminhao{
    constructor({tipo, marca, modelo, ano, cor, eixos, capacidade, id,}){
        this.tipo=tipo
        this.marca=marca
        this.modelo=modelo
        this.ano=ano
        this.cor=cor
        this.eixos=eixos
        this.capacidade=capacidade
        this.id=id
    }

    ligar(){
        this.ligado=true
        console.log(`${this.tipo} ${this.modelo} Ligado!`)
    }

    desligar(){
        this.ligado=false
        console.log(`${this.tipo} ${this.modelo} Desligado!`)
    }

      status(){
        console.log(`ID: ${this.id} - Tipo: ${this.tipo} - Marca: ${this.marca} - Modelo: ${this.modelo} - ano: ${this.ano} - Cor: ${this.cor} - Eixos: ${this.eixos} -  Capacidade: ${this.capacidade} - Status: ${this.ligado?"ligado":"Desligado"}`)
    }
}



class VeiculoFactory{
    constructor(){
        this.veiculosCriados=[]
        this.idAtual=1
    }

    //tipo, marca, modelo, ano, cor, id, portas
    criarCarro(tipo, opcoes={}){
        const carro = new Carro({
            tipo,
            marca: opcoes.marca || "Marca Indefinida",
            modelo: opcoes.modelo || "Modelo Indefinido",
            ano: opcoes.ano || "Ano Indefinido",
            cor: opcoes.cor || "Cor Indefinida",
            portas: opcoes.portas || "Portas Indefinidas",
            id: this.idAtual++
        })

        console.log(`${tipo} ${opcoes.modelo} Criado com sucesso!`)
        this.carrosCriados.push(carro)
        return carro
    }

    listarVeiculos(){
        console.log("Lista de carros")
        this.carrosCriados.forEach((el)=>{
            return el.status()
        })
    }
}


//padrao de novo carro => (tipo, {marca, modelo, ano, cor, id, portas})
const fabrica=new CarroFactory()


const fox=fabrica.criarCarro("carro", {marca: "VolksWagen", modelo:"Fox", ano:2025, cor:"Prata", portas:4})
const hb20 = fabrica.criarCarro("carro", {marca: "Hyundai", modelo: "HB20", ano:2023, cor:"branco", portas:4})
const celta = fabrica.criarCarro("carro", {marca: "Chevrolet", modelo: "Celta", ano:2015, cor:"Vermelho", portas:2})


fabrica.listarCarros()

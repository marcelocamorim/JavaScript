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
class Carro {
    constructor({ tipo, marca, modelo, ano, cor, id, portas }) {
        this.tipo = tipo
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
        this.id = id
        this.portas = portas
        this.ligado = false
    }

    ligar() {
        this.ligado = true
        console.log(`${this.tipo} ${this.modelo} Ligado!`)
    }

    desligar() {
        this.ligado = false
        console.log(`${this.tipo} ${this.modelo} Desligado!`)
    }

    status() {
        console.log(`ID: ${this.id} - Tipo: ${this.tipo} - Marca: ${this.marca} - Modelo: ${this.modelo} - ano: ${this.ano} - Cor: ${this.cor} - Portas: ${this.portas} - Status: ${this.ligado ? "ligado" : "Desligado"}`)
    }
}

//tipo, marca, modelo, ano, cor, id, cilindradas e ligado=bolean
class Moto {
    constructor({ tipo, marca, modelo, ano, cor, id, cilindradas, }) {
        this.tipo = tipo
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
        this.id = id
        this.cilindradas = cilindradas
        this.ligado = false
    }

    ligar() {
        this.ligado = true
        console.log(`${this.tipo} ${this.modelo} Ligado!`)
    }

    desligar() {
        this.ligado = false
        console.log(`${this.tipo} ${this.modelo} Desligado!`)
    }

    status() {
        console.log(`ID: ${this.id} - Tipo: ${this.tipo} - Marca: ${this.marca} - Modelo: ${this.modelo} - Cilindradas: ${this.cilindradas} - ano: ${this.ano} - Cor: ${this.cor} - Status: ${this.ligado ? "ligado" : "Desligado"}`)
    }
}

//tipo, marca, modelo, ano, cor, eixos, capacidade, id, e ligado=bolean
class Caminhao {
    constructor({ tipo, marca, modelo, ano, cor, eixos, capacidade, id, }) {
        this.tipo = tipo
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
        this.eixos = eixos
        this.capacidade = capacidade
        this.id = id
        this.ligado = false
    }

    ligar() {
        this.ligado = true
        console.log(`${this.tipo} ${this.modelo} Ligado!`)
    }

    desligar() {
        this.ligado = false
        console.log(`${this.tipo} ${this.modelo} Desligado!`)
    }

    status() {
        console.log(`ID: ${this.id} - Tipo: ${this.tipo} - Marca: ${this.marca} - Modelo: ${this.modelo} - ano: ${this.ano} - Cor: ${this.cor} - Eixos: ${this.eixos} -  Capacidade: ${this.capacidade} - Status: ${this.ligado ? "ligado" : "Desligado"}`)
    }
}



class VeiculoFactory {
    constructor() {
        this.veiculosCriados = []
        this.idAtual = 1
    }

    criarVeiculo(tipo, opcoes = {}) {
        if (tipo === "carro") {
            //tipo, marca, modelo, ano, cor, id, portas
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
            this.veiculosCriados.push(carro)
            return carro

        } else if (tipo === "moto") {
            //tipo, marca, modelo, ano, cor, id, cilindradas
            const moto = new Moto({
                tipo,
                marca: opcoes.marca || "Marca Indefinida",
                modelo: opcoes.modelo || "Modelo Indefinido",
                ano: opcoes.ano || "Ano Indefinido",
                cor: opcoes.cor || "Cor Indefinida",
                cilindradas: opcoes.cilindradas || "Cilindradas Indefinidas",
                id: this.idAtual++

            })

            console.log(`${tipo} ${opcoes.modelo} Criada Com Sucesso!`)
            this.veiculosCriados.push(moto)
            return moto

        } else if (tipo === "caminhao") {
            //tipo, marca, modelo, ano, cor, eixos, capacidade, id, e ligado=bolean
            const caminhao = new Caminhao({
                tipo,
                marca: opcoes.marca || "Marca Indefinida",
                modelo: opcoes.modelo || "Modelo Indefinido",
                ano: opcoes.ano || "Ano Indefinido",
                cor: opcoes.cor || "Cor Indefinida",
                eixos: opcoes.eixo || "Eixos Indefinidos",
                capacidade: opcoes.capacidade || "Capacidade Indefinida",
                id: this.idAtual++
            })

            console.log(`${tipo} ${opcoes.modelo} Criado com Sucesso!`)
            this.veiculosCriados.push(caminhao)
            return caminhao

        }else{
            throw new Error(`ERRO - Veiculo ${tipo} indisponivel!`)
        }
    }

    listarVeiculos() {
        console.log("Lista de carros")
        this.veiculosCriados.forEach((el) => {
            return el.status()
        })
    }
}


//padrao de novo carro => (tipo, {marca, modelo, ano, cor, id, portas})

//padrão de nova Moto => tipo, marca, modelo, ano, cor, id, cilindradas

//padrão de novo Caminhão => //tipo, marca, modelo, ano, cor, eixos, capacidade, id
const fabrica = new VeiculoFactory()


const fox = fabrica.criarVeiculo("carro", { marca: "VolksWagen", modelo: "Fox", ano: 2025, cor: "Prata", portas: 4 })
const hb20 = fabrica.criarVeiculo("carro", { marca: "Hyundai", modelo: "HB20", ano: 2023, cor: "branco", portas: 4 })
const celta = fabrica.criarVeiculo("carro", { marca: "Chevrolet", modelo: "Celta", ano: 2015, cor: "Vermelho", portas: 2 })

const kawasaki = fabrica.criarVeiculo("moto", { marca: "Kawasaki", modelo: "Ninja", ano: 2020, cor: "Verde", cilindradas: 400 })

const scania = fabrica.criarVeiculo("caminhao", {marca: "Scania", modelo: "560 G Super XT", ano: 2022, cor:"Prata", eixos:"8x4", capacidade:"8 Ton"})

fabrica.listarVeiculos()

// 🚀 Exercícios — Padrão Observer (nível avançado, mas didático)
/*
Exercício 3 – Sistema de Bolsa de Valores

Crie:

Bolsa → sujeito com método atualizarPreco(empresa, valor)

Investidor → observador com método notificar(empresa, valor)

“Carlos recebeu atualização: AAPL agora vale $187.50”

Permita que investidores escolham em quais empresas querem se inscrever.
*/



class Bolsa {
    constructor() {
        if(Bolsa.instancia){
            return Bolsa.instancia
        }
        this.empresas=[]
        
        Bolsa.instancia=this
    }

    cadastrarEmpresa(empresa){
        const empresaExistente=this.empresas.find(e=>e.nome===empresa.nome)
        if(empresaExistente){
            console.log(`Empresa: ${empresa.nome} já está cadastrada na Bolsa!`)
            return
        }
        this.empresas.push(empresa)
        console.log(`Empresa: ${empresa.nome} Cadastrada na Bolsa com Sucesso!`)
    }

    atualizarPreco(empresa, valor) {
        console.log(`empresa ${empresa} agora vale: ${valor}`)
    }

    notificar(empresa, valor){
        this.empresas.forEach((el)=>{
            
        })
    }
}


class Empresa{
    constructor(nome){
        this.nome=nome
        this.investidores=[]
    }

    cadastrarInvestidor(investidor){
        this.investidores.push(investidor)
        console.log(`investidor ${investidor.nome} Cadastrado na ${this.nome} Com Sucesso!`)
    }

    info(){
        console.log(`Empresa ${this.nome}`)
        console.log(`Investidores:`)
        this.investidores.forEach((el=>console.log(el.nome)))
        
    }
    
}


class Investidor{
    constructor(nome) {            
        this.nome = nome
        
    }

    notificar(empresa, valor) {
        console.log(`${this.nome} Recebeu Atualização. ${empresa} Agora Vale: R$${valor}`)
    }

    
}

const bolsa=new Bolsa()

const empresa1=new Empresa("google")
const empresa2=new Empresa("amazon")
const empresa3=new Empresa("apple")
const empresa4=new Empresa("xiaomi")

const invest1 = new Investidor("joão")
const invest2 = new Investidor("maria")
const invest3 = new Investidor("sofia")
const invest4 = new Investidor("antonio")

bolsa.cadastrarEmpresa(empresa1)
bolsa.cadastrarEmpresa(empresa2)
bolsa.cadastrarEmpresa(empresa3)
bolsa.cadastrarEmpresa(empresa4)

empresa1.cadastrarInvestidor(invest1)
// invest2.solicitarInscrição("google")
// invest3.solicitarInscrição("xiaomi")
// invest4.solicitarInscrição("amazon")

empresa1.info()

console.log(bolsa.empresas)
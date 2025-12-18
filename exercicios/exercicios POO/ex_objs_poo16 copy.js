// Exercício 2 – Herança e Limite

// Crie uma classe Funcionario com:

// nome, cargo e salário

// método aumentarSalario(percentual)

// Depois crie duas subclasses:

// Gerente (aumenta o salário com um bônus fixo de +10%)

// Estagiario (não pode receber aumento acima de 5%)

// Teste os três tipos e veja a diferença.

class Funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }

    aumentarSalario(porcentagem) {
        const salarioAumentado = this.salario + (this.salario * (porcentagem / 100))
        console.log(`Salario Aumentado em ${porcentagem}% - Novo Salario: R$${salarioAumentado.toFixed(2)}`)
        this.salario=salarioAumentado
        return salarioAumentado
    }

    info(){
        console.log(`Nome: ${this.nome} - Cargo: ${this.cargo} - Salario: R$${this.salario.toFixed(2)}`)
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario) {
        super(nome, "gerente", salario)
    }

    aumentarSalario(porcentagem) {
        const bonus = 10
        const aumentoTotal= porcentagem + bonus       
        
        super.aumentarSalario(aumentoTotal)
        
    }
}

class Estagiario extends Funcionario{
    constructor(nome,salario){
        super(nome, "Estagiario", salario)
    }

    aumentarSalario(porcentagem){
        if(porcentagem>5){
            console.log(`ERRO - Estagiarios não podem receber aumento superior a "5%"`)
            return
        }
        super.aumentarSalario(porcentagem)
    }
}

const funcionario1 = new Funcionario("joão", "ajudante", 1000)

const estagiario1 = new Estagiario("felipe", 800)
const ger1 = new Gerente("jack", 5000)
ger1.aumentarSalario(10)
estagiario1.aumentarSalario(6)
ger1.info()
estagiario1.info()

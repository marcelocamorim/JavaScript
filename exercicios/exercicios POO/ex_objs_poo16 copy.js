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

    aumentarSalario(percentual) {
        const calculo = percentual / 100 * this.salario
        this.salario += calculo

        console.log(`Solicitação de aumento de salario`)
        console.log(`--Funcionario: ${this.nome} - Cargo: ${this.cargo} - Requisição de aumento: ${percentual}%`)     
        console.log(`--Salario aumentado em ${percentual}%`)
        console.log(`--Novo salario ${this.salario}`)
    }

    separarInfo(){
        console.log("------------------------------------")
    }
}

class Estagiario extends Funcionario{
    constructor(nome,salario){
        super(nome,"Estagiario",salario)
    }

    aumentarSalario(percentual){
        if(percentual > 5){
            console.log(`ERRO - estagiarios não podem receber aumento superior a 5%`)
            return
        }

        super.aumentarSalario(percentual)
        super.separarInfo()
    }
}

class Gerente extends Funcionario{
    constructor(nome,salario){
        super(nome,"gerente",salario)
        this.nome=nome
        this.salario=salario
    }

    aumentarSalario(percentual){
        const bonusFixo=10
        let percentualTotal = percentual + bonusFixo

        const calculo = percentualTotal / 100 * this.salario
        this.salario+= calculo

        console.log(`Solicitação de aumento de salario`)
        console.log(`--Funcionario: ${this.nome} - Cargo: ${this.cargo} - Bonus do cargo ${bonusFixo}% - Requisição de aumento: ${percentual}%`)
        console.log(`--Salario aumentado em ${percentualTotal}%`)
        console.log(`--Novo salario ${this.salario}`)
        
        super.separarInfo()
    }

}

const gerente1 = new Gerente("pedro",5000)
gerente1.aumentarSalario(10)

const estagiario1 = new Estagiario("lucas",1200)
estagiario1.aumentarSalario(5)

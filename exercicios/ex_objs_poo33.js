// 🚀 Exercícios — Padrão Factory Method (nível intermediário → avançando)
/*
Exercício 3 – Fábrica de Funcionários

Crie:
Gerente (salário base + bônus de 30%)
Desenvolvedor (salário base + bônus de 10%)
Estagiario (sem bônus)

Crie uma FuncionarioFactory com:
método criarFuncionario(tipo, nome, salarioBase)

método mostrarDetalhes() dentro de cada classe que exibe nome e salário final.

Desafio extra:
Armazene todos os funcionários criados em um array dentro da fábrica.
*/
class Funcionario {
    constructor(nome, tipo, salario, bonus) {
        this.nome = nome
        this.tipo = tipo
        this.salario = salario
        this.bonus = bonus
    }

    calcSalario() {
        return this.salario + (this.bonus / 100 * this.salario)

    }

    info() {
        console.log(`Nome: ${this.nome} - Cargo: ${this.tipo} - Salario: ${this.salario}`)
    }
}


class Gerente extends Funcionario {
    constructor(nome) {
        super(nome, "gerente", 5000, 30)
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome) {
        super(nome, "Desenvolvedor", 2500, 10)
    }
}

class Estagiario extends Funcionario {
    constructor(nome) {
        super(nome, "Estagiario", 1800, 0)
    }
}

class FuncionarioFactory {
    constructor() {
        this.listaFuncionarios = []
    }

    criarFuncionario(nome, tipo) {
        if (tipo === "gerente") {
            const gerente = new Gerente(nome)
            gerente.calcSalario()
            this.listaFuncionarios.push(gerente)
            console.log(`${tipo} ${nome} Criado com Sucesso!`)
            return gerente

        } else if (tipo === "desenvolvedor") {
            const desenvolvedor = new Desenvolvedor(nome)
            desenvolvedor.calcSalario()
            this.listaFuncionarios.push(desenvolvedor)
            console.log(`${tipo} ${nome} Criado com Sucesso!`)
            return desenvolvedor

        } else if (tipo === "estagiario") {
            const estagiario = new Estagiario(nome)
            this.listaFuncionarios.push(estagiario)
            console.log(`${tipo} ${nome} Criado com Sucesso!`)
            return estagiario

        } else {
            throw new Error(`Cargo ${tipo} Indisponivel!`)
        }
    }

    infoFunc() {
        this.listaFuncionarios.forEach((el) => {
            el.info()
        })
    }
}

const fabrica = new FuncionarioFactory()

const gerente1 = fabrica.criarFuncionario("joão", "gerente")
const desenvolvedor1 = fabrica.criarFuncionario("maria", "desenvolvedor")
const estagiario = fabrica.criarFuncionario("ana", "estagiario")

fabrica.infoFunc()
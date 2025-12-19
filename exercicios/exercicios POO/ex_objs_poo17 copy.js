// Exercício 3 – Misturando Composição + Herança

// Crie:

// uma classe Endereco (rua, cidade, cep)

// uma classe Pessoa (nome, idade, e tem um endereço)

// uma classe Cliente que herda de Pessoa, e tem também um atributo saldo

// método mostrarDados() que mostra todas as informações, inclusive o endereço.


class Endereco{
    constructor(rua,cidade,cep){
        this.rua=rua
        this.cidade=cidade
        this.cep=cep
    }
}

class Pessoa{
    constructor(nome,idade,endereco){
        this.nome=nome
        this.idade=idade
        this.endereco=endereco
    }

    info(){
        console.log(`Nome: ${this.nome} - Idade: ${this.idade}`)
        console.log(`Endereço -  Rua: ${this.endereco.rua} - Cidade: ${this.endereco.cidade} - Cep: ${this.endereco.cep}`)

    }
}

class Cliente extends Pessoa{
    constructor(nome,idade,endereco,saldo){
        super(nome, idade, endereco)
        this.saldo=saldo
    }

    info(){
        super.info()
        console.log(`Saldo: R$${this.saldo}`)
    }
}

const endereco1= new Endereco("albelindosk", "são androdivisk", 7507500)
const pessoa1 = new Pessoa("spopovich", 45, endereco1)
const cliente1 = new Cliente("spopovich", 45, endereco1, 1200)

cliente1.info()

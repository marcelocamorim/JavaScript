// Exercício 3 – Misturando Composição + Herança

// Crie:

// uma classe Endereco (rua, cidade, cep)

// uma classe Pessoa (nome, idade, e tem um endereço)

// uma classe Cliente que herda de Pessoa, e tem também um atributo saldo

// método mostrarDados() que mostra todas as informações, inclusive o endereço.

class Endereco{
    constructor(rua, cidade, cep){
        this.rua=rua
        this.cidade=cidade
        this.cep=cep
    }

    info(){
        console.log(`Rua: ${this.rua}, Cidade: ${this.cidade}, Cep: ${this.cep}`)
    }
}

class Pessoa{
    constructor(nome, idade, endereco){
        this.nome=nome
        this.idade=idade
        this.endereco=endereco
    }

    info(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`)
        this.endereco.info()
    }
}

class Cliente extends Pessoa{
    constructor(nome, idade, endereco, saldo){
        super(nome, idade, endereco)
        this.saldo=saldo
    }

    info(){
        super.info()
        console.log(`Saldo: ${this.saldo}`)
    }
}

const endereco1 = new Endereco("rua das laranjas", "Capuava", 98745638)
const pessoa1= new Pessoa("João", 22, endereco1)
const cliente = new Cliente("João", 22, endereco1, 1200)

//endereco1.info()
//pessoa1.info()
cliente.info()
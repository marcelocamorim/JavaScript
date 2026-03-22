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
    info(){
        console.log(`--Rua: ${this.rua} - Cidade: ${this.cidade} - Cep: ${this.cep}`)
    }
}

class Pessoa{
    constructor(nome,idade,endereco){
        this.nome=nome
        this.idade=idade
        this.endereco=endereco
    }
}

class Cliente extends Pessoa{
    constructor(nome,idade,endereco,saldo){
        super(nome,idade,endereco)
        this.saldo=saldo
    }


    mostrarDados(){
        console.log(`Dados do cliente`)
        console.log(`--Nome: ${this.nome} - Idade: ${this.idade}`)
        console.log(`Endereço:`)
        this.endereco.info()
        console.log(`Saldo:${this.saldo} `)
        console.log("----------------------------------")
    }
}


const endereco1= new Endereco("backstreet","maua","09654892")
const endereco2= new Endereco("beco diagonal","maua","09222878")
const pessoa1=new Pessoa("joão",22,endereco1)
const cliente1=new Cliente("maria",31,endereco2,1500)

console.log(cliente1)
cliente1.mostrarDados()
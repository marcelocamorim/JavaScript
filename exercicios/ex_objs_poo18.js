// Exercício 4 – Pensando como um arquiteto

// Crie uma mini simulação:

// Classe Computador com atributos cpu, memoria, armazenamento

// Classe SistemaOperacional com nome e versão

// Classe Usuario que tem nome e um computador

// Método usarComputador() no usuário, que mostra algo como:

// “Carlos está usando um computador com CPU i7 e Windows 11.”

class Computador{
    constructor(cpu, memoria,armazenamento){
        this.cpu=cpu
        this.memoria=memoria
        this.armazenamento=armazenamento
    }

    info(){
        return `${this.cpu} - ${this.memoria} - ${this.armazenamento}`
    }
}

class SistemaOperacional{
    constructor(nome, versao){
        this.nome=nome
        this.versao=versao
    }
    info(){
        return `${this.nome} ${this.versao}`
    }
}

class Usuario{
    constructor(nome, computador, sistema){
        this.nome=nome
        this.Computador=computador
        this.sistema=sistema
    }

    usarComputador(){
        console.log(`${this.nome} está usando um PC com ${computador1.info()} e Sistema ${sistema1.info()}`)
    }
}


const computador1 = new Computador("i7", "8gb Ram", "1TB")
const sistema1 = new SistemaOperacional("Windows", 11)
const usuario = new Usuario ("João", computador1, sistema1)

usuario.usarComputador()
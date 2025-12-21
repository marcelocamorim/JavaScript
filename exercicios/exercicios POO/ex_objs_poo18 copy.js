// Exercício 4 – Pensando como um arquiteto

// Crie uma mini simulação:

// Classe Computador com atributos cpu, memoria, armazenamento

// Classe SistemaOperacional com nome e versão

// Classe Usuario que tem nome e um computador

// Método usarComputador() no usuário, que mostra algo como:

// “Carlos está usando um computador com CPU i7 e Windows 11.”

class Computador{
    constructor(cpu, memoria,armazenamento,sistemaOperacional){
        this.cpu=cpu
        this.memoria=memoria
        this.armazenamento=armazenamento
        this.sistemaOperacional=sistemaOperacional
    }

    info(){
        console.log(`CPU: ${this.cpu} - Memoria: ${this.memoria} - Armazenamento: ${this.armazenamento} - Sistema: ${this.sistemaOperacional.nome} ${this.sistemaOperacional.versao}`)
    }
}

class SistemaOperacional{
    constructor(nome,versao){
        this.nome=nome
        this.versao=versao
    }
}

class Usuario{
    constructor(nome, computador){
        
        this.nome=nome
        this.computador=computador
    }

    usarComputador(){
        console.log(`Usuario ${this.nome} Está usando um Computador com:`)
        this.computador.info()
    }
}

const sistema1=new SistemaOperacional("windows", 11)
const computador1 = new Computador("I7", "12g", "1tb", sistema1)
computador1.info()

const usuario1=new Usuario("Amanda", computador1)

usuario1.usarComputador()
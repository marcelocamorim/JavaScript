// Exercício 4 – Pensando como um arquiteto

// Crie uma mini simulação:

// Classe Computador com atributos cpu, memoria, armazenamento

// Classe SistemaOperacional com nome e versão

// Classe Usuario que tem nome e um computador

// Método usarComputador() no usuário, que mostra algo como:

// “Carlos está usando um computador com CPU i7 e Windows 11.”
class SistemaOperacional{
    constructor(nome,versao){
        this.nome=nome
        this.versao=versao
    }
    info(){
        console.log(`Sistema operacional: ${this.nome} - Versão do sistema: ${this.versao}`)
    }
}

class Computador{
    constructor(cpu,memoria,armazenamento,sistema){
        this.sistema=sistema
        this.cpu=cpu
        this.memoria=memoria
        this.armazenamento=armazenamento
    }

    
    info(){
        this.sistema.info()
        console.log(`CPU: ${this.cpu} - Memória RAM: ${this.memoria} - Armazenamento: ${this.armazenamento}`)
    }
}


class Usuario{
    constructor(nome,computador){
        this.nome=nome
        this.computador=computador
    }

    usarComputador(){
        console.log(`Usuario: ${this.nome} Está usando o computador com:`)
        this.computador.info()
    }
}
const sistema1 = new SistemaOperacional("windows", "versão 7" )
const computador1= new Computador("core I7", "12gb", "SSD 2tb", sistema1)
const ususario1= new Usuario("joão",computador1 )


ususario1.usarComputador()
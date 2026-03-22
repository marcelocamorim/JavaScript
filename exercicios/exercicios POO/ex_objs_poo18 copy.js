// Exercício 4 – Pensando como um arquiteto

// Crie uma mini simulação:

// Classe Computador com atributos cpu, memoria, armazenamento

// Classe SistemaOperacional com nome e versão

// Classe Usuario que tem nome e um computador

// Método usarComputador() no usuário, que mostra algo como:

// “Carlos está usando um computador com CPU i7 e Windows 11.”

class Computador{
    constructor(cpu,memoria,armazenamento){
        this.cpu=cpu
        this.memoria=memoria
        this.armazenamento=armazenamento
    }
}

class SistemaOperacional{
    constructor(nome,versao){
        this.nome=nome
        this.versao=versao
    }
}

class Usuario{
    constructor(nome,computador){
        this.nome=nome
        this.computador=computador
    }
}
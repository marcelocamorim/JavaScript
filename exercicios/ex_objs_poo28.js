// 🚀 Exercícios — Padrão Singleton (nível intermediário → avançando)
// Exercício 5 – Sessão de Usuário

// Crie uma classe SessaoUsuario que:
// tenha usuarioAtual
// método login(nome) → define o usuário
// método logout() → limpa o usuário
// método mostrarUsuario() → exibe o nome
// Implemente como Singleton.
// Assim, se em qualquer parte do código você chamar new SessaoUsuario(), o mesmo usuário continuará logado.

class SessaoUsuario {
    constructor() {
        if (SessaoUsuario.instancia) {
            return SessaoUsuario.instancia
        }
        this.usuarioAtual = null
        SessaoUsuario.instancia = this
    }

    login(nome) {
        if (this.usuarioAtual === null) {
            this.usuarioAtual = nome
            console.log(`Usuario ${nome} logado com sucesso!`)
        } else {
            console.log(`Impossivel logar ${nome} - Usuario ${this.usuarioAtual} Logado. Realize LogOut!`)
            return
        }
    }

    logout() {
        this.usuarioAtual = null
        console.log("LogOut Realizado com sucesso!")
        return
    }

    mostrarUsuario() {
        if (this.usuarioAtual === null) {
            console.log("Nenhum Usuario Logado")
        }
        console.log(`Usuario Atual: ${this.usuarioAtual}`)
    }

}

const sesUsuario = new SessaoUsuario()
const sesUsuario2 = new SessaoUsuario()

sesUsuario.login("joão")
sesUsuario.mostrarUsuario()
sesUsuario.login("maria")
sesUsuario.logout()
sesUsuario.login("maria")
sesUsuario.mostrarUsuario()

sesUsuario2.login("maria")
sesUsuario2.mostrarUsuario()
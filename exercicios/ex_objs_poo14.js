// 🔹 5. Sistema de login e autenticação
// Crie um objeto sistema com:
// usuarios: array de objetos { usuario, senha }
// logado: boolean
// E métodos:
// registrar(usuario, senha) → adiciona novo usuário.
// login(usuario, senha) → verifica credenciais e muda logado para true.
// logout() → muda logado para false.
// 🧠 Desafio: não permitir dois cadastros com o mesmo nome de usuário.

let sistema = {
    usuarios: [
        { usuario: "mario", senha: 123456 },
        { usuario: "geny", senha: 98745 },
        { usuario: "luane", senha: 454588 },
    ],

    logado: false,

    registrarUsuario: function (user, senha) {
        let usuario = this.usuarios.find((u => u.usuario === user))
        if (usuario) {
            console.log(`Usuario ${user} já cadastrado, tente outro nome`)
            return
        }

        this.usuarios.push({ usuario: user, senha: senha })
        console.log(`Usuario ${user} cadastrado com Sucesso!`)

    },

    login: function (user, senha) {
        if (this.logado) {
            console.log(`Usuario ${user} já está logado! - Faça LogOut.`)
            return
        }

        let usuar = this.usuarios.find((u => u.usuario === user))

        if (!usuar) {
            console.log(`Usuário "${user}" não encontrado ou não cadastrado.`)
            return
        }

        if(usuar.senha!==senha){
            console.log(`Senha incorreta para o usuário ${user}.`)
            return
        }

        this.logado = true
        console.log(`Login Realizado com Sucesso! Usuario ${user} - online `)
        return

    },

    logout: function () {
        this.logado = false
        console.log("Logout Realizado com Sucesso!")
        return
    }
}

sistema.registrarUsuario("marcelo", 89898989)
sistema.registrarUsuario("marcelo", 89898989)
sistema.login("geny", 98745)
sistema.login("geny", 98745)
sistema.logout()
sistema.login("geny", 98745)
console.log(sistema.logado)
//console.log(sistema.usuarios)



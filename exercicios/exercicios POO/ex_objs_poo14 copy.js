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
        { nome: "joão", senha: "123456", logado: false }
    ],

    separar: function () {
        console.log("---------------------------")
    },

    registrarUsuario: function (nome, senha) {
        const usuarioExistente = this.usuarios.find(u => u.nome === nome)
        if (usuarioExistente) {
            console.log(`ERRO ao registrar usuario`)
            console.log(`--Nome de usuario "${nome}" não disponivel`)
            console.log(`--Tente outro nome`)
            this.separar()
            return
        }


        this.usuarios.push({ nome: nome, senha: senha, logado: false })
        console.log(`Usuario "${nome}" cadastrado com sucesso!`)
        this.separar()

    },

    login: function (nome, senha) {
        const usuarioExistente = this.usuarios.find(u => u.nome === nome)

        if (!usuarioExistente) {
            console.log(`ERRO ao realizar login`)
            console.log(`Usuario "${nome}" não cadastrado`)
            this.separar()
            return
        }
        if (senha !== usuarioExistente.senha) {
            console.log(`ERRO ao realizar login`)
            console.log(`Senha inválida - Tente novamente`)
            this.separar()
            return
        }
        if (usuarioExistente.logado) {
            console.log(`ERRO ao realizar login`)
            console.log(`Usuario já está logado - Execute logOff`)
            this.separar()
            return

        }


        usuarioExistente.logado = true
        console.log(`Login realizado com sucesso!`)

    },

    logoff: function (nome) {
        const usuarioExistente = this.usuarios.find(u => u.nome === nome)

        if (!usuarioExistente) {
            console.log(`ERRO ao realizar login`)
            console.log(`Usuario "${nome}" não cadastrado`)
            this.separar()
            return
        }

        if (!usuarioExistente.logado) {
            console.log(`ERRO ao realizar logoff`)
            console.log(`Execute login primeiro`)
            this.separar()
            return

        }

        usuarioExistente.logado = false
        console.log(`Logoff realizado com sucesso!`)


    }

}

sistema.registrarUsuario("leila", "789456")
sistema.registrarUsuario("leila", "789456")
sistema.login("leila", "789456")
sistema.logoff("leila")
console.log(sistema.usuarios)
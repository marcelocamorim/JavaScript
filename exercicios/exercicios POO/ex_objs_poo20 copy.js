// 💪 Exercícios de Fixação — Composição e Lógica de Objetos
// Exercício 1 – Sistema de Biblioteca

// Crie as classes:
// Livro → propriedades: titulo, autor, disponivel (true por padrão)

// Usuario → propriedades: nome, livrosEmprestados (array vazio)

// Biblioteca → propriedades: livros (array), usuarios (array)
// Métodos:

// adicionarLivro(livro) → adiciona o livro na lista
// registrarUsuario(usuario) → adiciona o usuário na lista
// emprestarLivro(titulo, usuarioNome)
// encontra o livro e o usuário
// se o livro estiver disponível, adiciona ao array do usuário e marca como disponivel = false
// caso contrário, mostra que o livro já está emprestado
// mostrarLivrosEmprestados() → exibe quem pegou o quê

class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
        this.disponivel = true
    }
}

class Usuario {
    constructor(nome) {
        this.nome = nome
        this.livrosEmprestados = []
    }

    infoUsuario(){
        console.log(`Usuario: ${this.nome}`)
        if(!this.livrosEmprestados.length){
            console.log(` Não Possui Livros Emprestados `)
            return
        }
        console.log(`Livros Emprestados:`)
        this.livrosEmprestados.forEach((el)=>{
            console.log(`Livro: ${el.titulo}`)
        })
        console.log("-----------------------")
    }
}

class Biblioteca {
    constructor() {
        this.livros = []
        this.usuarios = []
    }

    adicionarLivro(livro) {
        let livroExistente = this.livros.find(li => li.titulo === livro.titulo)

        if (livroExistente) {
            console.log(`ERRO - Livro ${livro.titulo} já cadastrado`)
            console.log("-----------------------")
            return
        }

        this.livros.push(livro)
        console.log(`Livro ${livro.titulo} Cadastrado com Sucesso!`)
        console.log("-----------------------")
    }


    registrarUsuario(usuario) {
        const usuarioExistente = this.usuarios.find(user => user.nome === usuario.nome)

        if (usuarioExistente) {
            console.log(`ERRO - Usuario ${usuario.nome} já cadastrado`)
            console.log("-----------------------")
            return
        }

        this.usuarios.push(usuario)
        console.log(`Usuario ${usuario.nome} Registrado com Sucesso!`)
        console.log("-----------------------")
    }


    mostrarLivros() {
        console.log(`Lista de Livros cadastrados`)
        this.livros.forEach((el) => {
            console.log(`Livro: ${el.titulo} - Autor: ${el.autor} - Status: ${el.disponivel ? "Disponivel" : "Emprestado"}`)
        })
        console.log("-----------------------")
    }

    mostrarUsuarios(){
        console.log(`Lista de Usuarios cadastrados`)
        this.usuarios.forEach((el)=>{
            el.infoUsuario()
        })
        
    }
}

const livro1 = new Livro("A torre negra", " Stephen King")
const livro2 = new Livro("Harry Potter", "JK Rolling")
const livro3 = new Livro("A Guerra dos Tronos", "RR Martin")
const livro4 = new Livro("Legados de Loriem", "Pitacus Lore")

const usuario1 = new Usuario("amanda")
const usuario2 = new Usuario("mirian")
const usuario3 = new Usuario("luiz")
const usuario4 = new Usuario("bili")

const biblioteca1 = new Biblioteca
biblioteca1.adicionarLivro(livro1)
biblioteca1.adicionarLivro(livro1)

biblioteca1.registrarUsuario()
biblioteca1.mostrarLivros()
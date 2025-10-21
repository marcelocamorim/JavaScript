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


class Livro{
    constructor(titulo, autor){
        this.titulo=titulo
        this.autor=autor
        this.disponivel=true
    }

    info(){
        return `Livro: ${this.titulo} - Autor: ${this.autor} - Status: ${this.disponivel?"disponivel":"Indisponivel"}`
    }
}

class Usuario{
    constructor(nome){
        this.nome=nome
        this.livrosEmprestados=[]
    }
}

class Biblioteca{
    constructor(){
        this.livros=[]
        this.usuarios=[]
    }

    adicionarLivro(livro){
        this.livros.push(livro)
    }

    adicionarUsuario(usuario){
        this.usuarios.push(usuario)
    }

    
    infoLivros(){
        console.log("Lista de livros:")
        this.livros.forEach((el)=>{
            console.log(`Livro: ${el.titulo} - Autor: ${el.autor} - Status: ${el.disponivel?"Disponivel":"Indisponivel"}`)
        })
        console.log("---------------------------------")
    }

    infoUsuarios(){
        console.log("Lista de Usuarios cadastrados:")
        this.usuarios.forEach((el)=>{
            console.log(`Usuario: ${el.nome}`)
        })
        console.log("---------------------------------")
    }
}

const livro1 = new Livro("harry potter", "JK Rolling")
const livro2 = new Livro("A torre negra", "Stephen king")
const livro3 = new Livro("As Cronicas de narnia", "CS lewis")


const usuario1 = new Usuario("joão")
const usuario2 = new Usuario("maria")
const usuario3 = new Usuario("carlos")

const biblioteca = new Biblioteca()
biblioteca.adicionarLivro(livro1)
biblioteca.adicionarLivro(livro2)
biblioteca.adicionarLivro(livro3)


biblioteca.adicionarUsuario(usuario1)
biblioteca.adicionarUsuario(usuario2)
biblioteca.adicionarUsuario(usuario3)

biblioteca.infoLivros()
biblioteca.infoUsuarios()
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


    mostrarLivros(){
        this.livros.forEach((el)=>{
            console.log(`Livro: ${el.titulo} - Autor: ${el.autor} - Status: ${el.disponivel?"Disponivel":"Emprestado"}`)
        })
    }
 }

 const livro1=new Livro("A torre negra", " Stephen King")
 const livro2=new Livro("Harry Potter", "JK Rolling")
 const livro3=new Livro("A Guerra dos Tronos", "RR Martin")
 const livro4=new Livro("Legados de Loriem", "Pitacus Lore")

 const biblioteca1=new Biblioteca
 biblioteca1.adicionarLivro(livro1)
 biblioteca1.mostrarLivros()
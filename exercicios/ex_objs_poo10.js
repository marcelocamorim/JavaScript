// 🚀 Exercícios com Objetos — Nível Intermediário/Avançado
// 🔹 1. Sistema de biblioteca com busca por autor

// Crie um objeto biblioteca que contenha um array livros, onde cada livro é um objeto { titulo, autor, ano }.
// Implemente métodos:
// adicionarLivro(titulo, autor, ano)
// buscarPorAutor(autor) → retorna todos os livros desse autor.
// listarLivrosOrdenados() → mostra todos os livros ordenados por ano.
// 🧠 Desafio extra: use sort() para ordenar os livros e filter() na busca por autor.
let biblioteca = {
    livros: [
        { titulo: "harry potter", autor: "JK Rolling", ano: 2000 },
        { titulo: "Osenhor dos aneis", autor: "JRR Tolkien", ano: 1994 },
        { titulo: "Aguerra dos tronos", autor: "George RR Martin", ano: 2007 },
        { titulo: "A torre negra", autor: "Stephen King", ano: 1993 },
    ],

    addLivro:function(tit, aut, ano){
        let livro=this.livros.find((li =>li.titulo === tit))
        if(livro){
            console.log(`Livro ${tit} - já cadastrado`)
            return
        }else{
            this.livros.push({titulo:tit, autor:aut, ano:ano})
        }
    }
}

biblioteca.addLivro("harry potter")
biblioteca.addLivro("As cronicas de narnia", "CS Lewis", 2002)
console.log(biblioteca)
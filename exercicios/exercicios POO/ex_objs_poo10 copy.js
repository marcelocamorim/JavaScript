// 🚀 Exercícios com Objetos — Nível Intermediário/Avançado
// 🔹 1. Sistema de biblioteca com busca por autor

// Crie um objeto biblioteca que contenha um array livros, onde cada livro é um objeto { titulo, autor, ano }.
// Implemente métodos:
// adicionarLivro(titulo, autor, ano)
// buscarPorAutor(autor) → retorna todos os livros desse autor.
// listarLivrosOrdenados() → mostra todos os livros ordenados por ano.
// 🧠 Desafio extra: use sort() para ordenar os livros e filter() na busca por autor.


let biblioteca={
    livros:[
        { titulo: "harry potter", autor: "JK Rolling", ano: 2000 },
        { titulo: "O senhor dos aneis", autor: "JRR Tolkien", ano: 1994 },
        { titulo: "Aguerra dos tronos", autor: "George RR Martin", ano: 2007 },
        { titulo: "A torre negra", autor: "Stephen King", ano: 1993 },
        { titulo: "Aespera de um milagre", autor: "Stephen King", ano: 1990 },
        { titulo: "IT A coisa", autor: "Stephen King", ano: 2007 },
    ],

    listarLivros:function(){
        this.livros.sort((a,b)=>a.ano-b.ano)
        this.livros.forEach((el)=>{
            console.log(`Livro: ${el.titulo} - Autor: ${el.autor} - Ano: ${el.ano}`)
        })
    },

    adicionarLivro:function(nome,autor,ano){
        let livroExistente=this.livros.find(livro=>livro.titulo===nome)
        if(livroExistente){
            console.log(`Livro ${nome} Já Cadastrado!`)
            console.log(`----------------------------`)
            return
        }

        this.livros.push({titulo:nome, autor:autor, ano:ano})
        console.log(`Livro: ${nome} Adicionado Com Sucesso!`)
        console.log(`----------------------------`)
    },

    BuscaPorAutor:function(termo){        
        let encontrados=this.livros.filter((en=>en.autor.toLowerCase().includes(termo)))

        if(!encontrados.length){
            console.log(`autor "${termo}" Não Encontrado!`)
            console.log(`----------------------------`)
            return
        }

        console.log(`Obras de "${termo}" Encontradas`)
        encontrados.forEach((el)=>{
            console.log(`Livro: ${el.titulo} - Autor: ${el.autor} - Ano: ${el.ano}`)
        })
        console.log(`----------------------------`)

        return encontrados
    }
}
biblioteca.adicionarLivro("O Nevoeiro", "Stephen King", 2007)
biblioteca.adicionarLivro("O Nevoeiro", "Stephen King", 2007)
biblioteca.BuscaPorAutor("step")

biblioteca.listarLivros()
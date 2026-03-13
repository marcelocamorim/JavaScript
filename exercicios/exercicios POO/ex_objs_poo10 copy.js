// 🚀 Exercícios com Objetos — Nível Intermediário/Avançado
// 🔹 1. Sistema de biblioteca com busca por autor

// Crie um objeto biblioteca que contenha um array livros, onde cada livro é um objeto { titulo, autor, ano }.
// Implemente métodos:
// adicionarLivro(titulo, autor, ano)
// buscarPorAutor(autor) → retorna todos os livros desse autor.
// listarLivrosOrdenados() → mostra todos os livros ordenados por ano.
// 🧠 Desafio extra: use sort() para ordenar os livros e filter() na busca por autor.

const biblioteca = {
    livros: [
        { titulo: "harry potter", autor: "JK Rolling", ano: 2000 },
        { titulo: "O senhor dos aneis", autor: "JRR Tolkien", ano: 1994 },
        { titulo: "Aguerra dos tronos", autor: "George RR Martin", ano: 2007 },
        { titulo: "A torre negra", autor: "Stephen King", ano: 1993 },
        { titulo: "Aespera de um milagre", autor: "Stephen King", ano: 1990 },
        { titulo: "IT A coisa", autor: "Stephen King", ano: 2007 },
    ],

    //apenas separação no console
    separar: function () {
        console.log("------------------------------------")
    },

    //adicionar livro
    adicionarLivro: function (titulo, autor, ano) {
        const livroExistente = this.livros.find(livro => livro.titulo === titulo)
        if (livroExistente) {
            console.log(`Falha ao adicionar livro`)
            console.log(` -- ERRO - Livro: "${titulo}" já cadastrado!`)
            this.separar()
            return
        }
        this.livros.push({ titulo: titulo, autor: autor, ano: ano })
        console.log(`Livro "${titulo}" adicionado com sucesso!`)
        this.separar()
    },

    buscaPorAutor: function (autorBuscado) {
        let obrasEncontradas = this.livros.filter(obras => obras.autor.toLowerCase().includes(autorBuscado.toLowerCase()))

        console.log(`Busca Por autor`)

        if (obrasEncontradas.length) {
            console.log(`"${obrasEncontradas.length}" Obras de ${autorBuscado} encontradas`)
            obrasEncontradas.forEach((el) => {
                console.log(` --  Livro: ${el.titulo} - Autor: ${el.autor} - Ano: ${el.ano}`)
            })
        }else{
            console.log(`"Sem resultados" - autor "${autorBuscado}" não encontrado`)
        }
        this.separar()
    },


    //listar todos os livros
    listarLivros: function () {
        this.livros.sort((a, b) => a.ano - b.ano)
        console.log(`Lista de livros disponíveis`)
        this.livros.forEach((el) => {
            console.log(` --  Livro: ${el.titulo} - Autor: ${el.autor} - Ano: ${el.ano}`)
        })
        this.separar()
    }
}


biblioteca.adicionarLivro("legados de lorien", "Pitacus Lore", 2002)
biblioteca.adicionarLivro("legados de lorien", "Pitacus Lore", 2002)
biblioteca.buscaPorAutor("step")
biblioteca.listarLivros()
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
        { titulo: "O senhor dos aneis", autor: "JRR Tolkien", ano: 1994 },
        { titulo: "Aguerra dos tronos", autor: "George RR Martin", ano: 2007 },
        { titulo: "A torre negra", autor: "Stephen King", ano: 1993 },
        { titulo: "Aespera de um milagre", autor: "Stephen King", ano: 1990 },
        { titulo: "IT A coisa", autor: "Stephen King", ano: 2007 },
    ],

    addLivro: function (tit, aut, ano) {
        let livro = this.livros.find((li => li.titulo === tit))
        if (livro) {
            console.log(`Livro ${tit} - já cadastrado`)
            return
        } else {
            this.livros.push({ titulo: tit, autor: aut, ano: ano })
        }
    },

    buscarAutor: function (aut) {
        //let autor = this.livros.find(a => a.autor === aut)
        let encontrados = this.livros.filter(a => a.autor.toLowerCase().includes(aut.toLowerCase()))
        if (!encontrados.length) {
            console.log(`Autor ${aut} - não encontrado`)
            return
        } else {
            console.log(`${encontrados.length} Obras do autor ${aut} encontradas: `)
            encontrados.forEach((el) => {
                console.log(`livro: ${el.titulo} - autor: ${el.autor}`)
            })
        }
        return encontrados

    },

    listarLivros: function () {
        let livrosOrdenados = [...this.livros].sort((a, b) => {
           return a.ano - b.ano
        })

        livrosOrdenados.forEach((el)=>{
            console.log(`Livro: ${el.titulo} - Autor: ${el.autor} - Ano: ${el.ano}`)
        })
        return livrosOrdenados
    }
}

// biblioteca.addLivro("harry potter")
// biblioteca.addLivro("As cronicas de narnia", "CS Lewis", 2002)
// biblioteca.buscarAutor("king")

biblioteca.listarLivros()

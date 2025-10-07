// 🚀 Exercícios com Objetos — Nível Intermediário/Avançado
// 🔹 1. Sistema de biblioteca com busca por autor

// Crie um objeto biblioteca que contenha um array livros, onde cada livro é um objeto { titulo, autor, ano }.
// Implemente métodos:
// adicionarLivro(titulo, autor, ano)
// buscarPorAutor(autor) → retorna todos os livros desse autor.
// listarLivrosOrdenados() → mostra todos os livros ordenados por ano.
// 🧠 Desafio extra: use sort() para ordenar os livros e filter() na busca por autor.








// 🔹 2. Sistema de notas com ranking

// Crie um objeto turma com um array alunos, cada aluno sendo { nome, notas: [] }.
// Adicione métodos:

// calcularMedia(nome)

// ranking() → retorna uma lista de alunos ordenada da maior para a menor média.

// 🧠 Dica: use map() e sort() juntos para gerar o ranking.

// 🔹 3. Simulador de conta bancária com histórico

// Crie um objeto conta com:

// saldo: 0,
// historico: []


// E métodos:

// depositar(valor) → soma ao saldo e adiciona ao histórico.

// sacar(valor) → subtrai do saldo se houver saldo suficiente.

// exibirExtrato() → mostra todas as operações com tipo e valor.

// 🧠 Desafio: registre cada operação como um objeto:

// { tipo: "depósito", valor: 100, data: "2025-10-07" }

// 🔹 4. Sistema de pedidos de restaurante

// Crie um objeto restaurante que contenha:

// cardapio (array de objetos { nome, preco })

// pedidos (array de pedidos feitos)
// E métodos:

// fazerPedido(nomePrato, quantidade) → adiciona ao array de pedidos.

// calcularTotal() → soma o valor total do pedido.

// mostrarPedidos() → lista todos os pratos e quantidades.

// 🧠 Desafio extra: evite pedidos duplicados (se já existir, apenas aumente a quantidade).

// 🔹 5. Sistema de login e autenticação

// Crie um objeto sistema com:

// usuarios: array de objetos { usuario, senha }

// logado: boolean
// E métodos:

// registrar(usuario, senha) → adiciona novo usuário.

// login(usuario, senha) → verifica credenciais e muda logado para true.

// logout() → muda logado para false.

// 🧠 Desafio: não permitir dois cadastros com o mesmo nome de usuário.
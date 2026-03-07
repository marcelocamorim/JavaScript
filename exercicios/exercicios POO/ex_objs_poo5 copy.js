//📌 Exercícios com Objetos (nível intermediário)
// 🔹 1. Agenda de contatos
// Crie um objeto agenda que armazena contatos (nome e telefone) em um array interno.
// Adicione métodos para:
// adicionarContato(nome, telefone)
// listarContatos()
// buscarContato(nome) (retorna o telefone ou "não encontrado").


let agenda = {
    contatos: [
        //nome,telefone

    ],
    separar: function () {
        console.log("-------------------------------")
    },

    adicionarContato: function (nom, tel) {
        this.contatos.push({ nome: nom, telefone: tel })
        console.log(`Contato "${nom}" Adicionado com sucesso!`)
        this.separar()
    },

    listarContatos: function () {
        console.log(`Lista de contatos`)
        this.contatos.forEach((el) => {
            console.log(`Nome: ${el.nome} - Telefone: ${el.telefone}`)
        })
        this.separar()
    },

    buscaPorNome: function (nomeBuscado) {
        let encontrados = this.contatos.filter(c => c.nome.toLowerCase().includes(nomeBuscado.toLowerCase()))

        if (encontrados.length) {
            console.log(`Busca por nome - Contatos encontrados:`)
            encontrados.forEach((el) => {
                console.log(`nome: ${el.nome} - Telefone: ${el.telefone}`)
            })
            return
        }

        console.log(`Contato nome:"${nomeBuscado}" Não encontrado!`)
    },

    buscaPorTelefone: function (telBuscado) {
        console.log(`Busca por Telefone - Contatos encontrados:`)
        let encontrados = this.contatos.filter(c => String(c.telefone).includes(String(telBuscado)))
        if (encontrados.length) {
            encontrados.forEach((el) => {
                console.log(`nome: ${el.nome} - Telefone: ${el.telefone}`)
            })
            return
        }
        console.log(`Contato telefone:"${telBuscado}" Não encontrado!`)
    }

}


agenda.adicionarContato("maria", 111111111)
agenda.adicionarContato("joão", 2222222222)
agenda.adicionarContato("leticia", 333333333)
agenda.adicionarContato("marcia", 4444444444)

agenda.listarContatos()
agenda.buscaPorNome("raimun")
agenda.buscaPorTelefone(11111)
agenda.buscaPorTelefone(22)
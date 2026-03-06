// 🔹 Intermediários

// Crie um objeto pessoa com nome, idade e um método chamado apresentar() que retorne uma frase com essas informações.
let pessoa={
    nome:"marcelo",
    idade:32,


    apresentar:function(){
        console.log(`Nome: ${pessoa.nome} - Idade: ${pessoa.idade}`)
    }

}
pessoa.apresentar()


// Crie um objeto usuario com nome e email. Depois adicione uma função alterarEmail(novoEmail) que muda o email do usuário.

const usuario={
    nome:"joão",
    email:"joao@jojo.com.br",

    alterarEmail:function(novoEmail){
        this.email= novoEmail
        console.log(`Email alterado com sucesso! - Novo Email: ${novoEmail}`)
    }
}

console.log(usuario.email)
usuario.alterarEmail("joao@jorobives.com.br")
console.log(usuario.email)


// Crie um objeto cachorro com propriedades nome e raca. Depois adicione dinamicamente a propriedade idade.

const cachorro={
    nome:"shadow",
    raca:"Pastor alemão",

}

cachorro.idade=`5 anos`
console.log(cachorro)




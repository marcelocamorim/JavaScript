// 🔹 Intermediários

// Crie um objeto pessoa com nome, idade e um método chamado apresentar() que retorne uma frase com essas informações.
let pessoa={
    nome:"marcelo",
    idade:31,

    apresentar:function(){
        console.log(`Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos`)
    }
}
pessoa.apresentar()



// Crie um objeto usuario com nome e email. Depois adicione uma função alterarEmail(novoEmail) que muda o email do usuário.

let usuario={
    nome:"Maria",
    email:"maria@maria.com",

    alterarEmail:function(novoEmail){
        this.email=novoEmail
        console.log(`E-mail Alterado com Sucesso!`)
        console.log(`Novo E-mail: ${novoEmail}`)
    }
}

usuario.alterarEmail("maria@maria123.com.br")




// Crie um objeto cachorro com propriedades nome e raca. Depois adicione dinamicamente a propriedade idade.

const cachorro={
    nome:"Rex",
    raca:"Pastor Alemão"
}

cachorro.idade=5

console.log(cachorro)




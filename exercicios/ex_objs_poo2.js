// 🔹 Intermediários

// Crie um objeto pessoa com nome, idade e um método chamado apresentar() que retorne uma frase com essas informações.

let pessoa={
    nome: "marcelo",
    idade:31,
    
    apresentar:function(){
        console.log(`Olá meu nome é ${this.nome}, e tenho ${this.idade} anos de idade`)
    }
}

pessoa.apresentar()


// Crie um objeto usuario com nome e email. Depois adicione uma função alterarEmail(novoEmail) que muda o email do usuário.

let usuario={
    nome: "miguel",
    email: "miguel@mig123.com.br",
    
    alterarEmail:(novoEmail)=>{
        usuario.email=novoEmail
    }
}

usuario.alterarEmail("mig@mig321.com.br")
console.log(usuario.email)


// Crie um objeto cachorro com propriedades nome e raca. Depois adicione dinamicamente a propriedade idade.

let cachorro={
    nome: "striker",
    raca: "pastor alemão",    
}
cachorro.idade=3

console.log(cachorro)


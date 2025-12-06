// 🔹 Percorrendo Objetos

// Crie um objeto produtos com vários itens e preços. Use for...in para mostrar o nome do produto e o preço.
let produtos = {
    "maçã": 10,
    "uva": 20,
    "pera": 30,

}

for (let p in produtos) {
    console.log(produtos[p])
}




// Crie um objeto pessoa com várias informações (nome, idade, cidade). Use Object.keys() para listar as chaves e Object.values() para listar os valores.

let pessoa={
    nome:"João",
    idade:18,
    cidade:"mauá"
}

//percorre as chaves do objeto
for(let chaves of Object.keys(pessoa)){
    console.log(chaves)
}

//percorre valores
for(let valores of Object.values(pessoa)){
    console.log(valores)
}

//percorre valores e chaves
for(let [chave,valor] of Object.entries(pessoa)){
    console.log(`${chave}: ${valor}`)
}

// Crie um array de objetos alunos com nome e nota. Use for...of para percorrer e mostrar apenas os alunos com nota maior ou igual a 7.

let alunos=[
     {nome:"joão", nota:10},
     {nome:"maria", nota:5},
     {nome:"pedro", nota:7},
     {nome:"matheus", nota:3},    
]  

for( let a of alunos){
    if(a.nota>=7){
        console.log(`Nome: ${a.nome} - Nota: ${a.nota}`)
    }
}


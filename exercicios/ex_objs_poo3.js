// 🔹 Percorrendo Objetos

// Crie um objeto produtos com vários itens e preços. Use for...in para mostrar o nome do produto e o preço.
let produtos={
    "mouse": 50,
    "teclado": 70,
    "caixa de som": 120,
    "monitor": 850,
    "placa de video": 1350,
    "memória RAM": 350,
}

for( let p in produtos){
    console.log(`item: ${p}, valor R$:${produtos[p]}`)
    
}


// Crie um objeto pessoa com várias informações (nome, idade, cidade). Use Object.keys() para listar as chaves e Object.values() para listar os valores.
let pessoa={
    nome: "joão",
    idade: "35",
    cidade:"São Paulo"
}
//percorre chaves
for(let chave of Object.keys(pessoa)){
    console.log(chave)
}

//percorre valores
for(let valores of Object.values(pessoa)){
    console.log(valores)
}

//percorre valores e chaves
for(let [chave, valor] of Object.entries(pessoa)){
    console.log(`${chave}: ${valor}`)
}

// Crie um array de objetos alunos com nome e nota. Use for...of para percorrer e mostrar apenas os alunos com nota maior ou igual a 7.
let alunos=[
    {nome: "thiago", nota:6},
    {nome: "fernando", nota:8},
    {nome: "emily", nota:9},
    {nome: "jony", nota:5},
    {nome: "taynara", nota:4},
]

for(let a of alunos){
    if(a.nota>=7){
        console.log(a)
    }
}
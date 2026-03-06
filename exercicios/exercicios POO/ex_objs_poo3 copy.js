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
for (let p in produtos){
    console.log(`Nome: ${p} - Preço: R$${produtos[p]}`)
}



// Crie um objeto pessoa com várias informações (nome, idade, cidade). Use Object.keys() para listar as chaves e Object.values() para listar os valores.

const pessoa={
    nome:"maria",
    idade:"25",
    cidade:"santo andré",
    
}
//percorre as chaves do objeto
console.log(`Chaves do objeto pessoa:`)
for (let chave of Object.keys(pessoa)){
    console.log(`-${chave}`)
}

//percorre valores
for (let valor of Object.values(pessoa)){
    console.log(`-${valor}`)
}

//percorre valores e chaves
console.log(`Chaves e valores do objeto pessoa:`)
for (let [chave,valor] of Object.entries(pessoa)){
    console.log(`Chave: ${chave} - Valor: ${valor}`)
}


// Crie um array de objetos alunos com nome e nota. Use for...of para percorrer e mostrar apenas os alunos com nota maior ou igual a 7.

let alunos=[
    {nome:"julia", nota:8},
    {nome:"leila", nota:10},
    {nome:"amanda", nota:6},
    {nome:"livia", nota:5},
]

console.log(`Alunos com nota acima de 7`)
for(let a of alunos){
    if(a.nota>=7){
        console.log(`Aluno: ${a.nome} - Nota: ${a.nota}`)
    }
}


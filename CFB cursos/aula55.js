// Coleção SET em Javascript 

// O Set é uma coleção no JavaScript que armazena valores únicos, ou seja, não permite duplicatas. Ele é útil quando você quer garantir que uma lista de valores não tenha repetições.

// Principais características do Set:
// Armazena valores únicos, descartando duplicatas automaticamente.
// Pode armazenar qualquer tipo de dado (números, strings, objetos, etc.).
// É iterável e mantém a ordem de inserção dos valores.
// Possui métodos úteis para adicionar, remover e consultar valores.

const caixa=document.querySelector("#caixa")

let musicas=new Set(["musica 1", "musica boa", "musica10"])


musicas.add("musica muito legal")
musicas.add("musica 1")
musicas.add("musica 1")
musicas.add("musica10")

console.log(musicas)

musicas.forEach((el)=>{
    caixa.innerHTML+=el+"<br/>"
})
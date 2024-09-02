/*
//Operador spread == (...)

let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3=[...n1,...n2]

console.log('n3: ' + n3)
console.log('tipo de n3: ' + typeof n3)


let jogador1={nome:'naruto', força:12, velocidade:100}
let jogador2={nome:'rock lee', força:15, velocidade:250}
let jogador3={...jogador1, ...jogador2}

console.log(jogador3)
//nesse exemplo acima os dados de jogador1 e 2 são iguais então a saida usa apenas os dados do jogador 2 que foi o ultimo a ser lido no código


let jogador4={nome:'naruto', força:12, velocidade:100, chakra:9000}
let jogador5={nome:'rock lee', força:15, velocidade:250, taijutsu:15000}
let jogador6={...jogador4, ...jogador5}

console.log(jogador6)
//já nesse exemplo a saída adiciona os atributos iguais dos dois jogadores e acrescenta os atributos diferentes que foram chakra e taijutsu

const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}

let valores=[1,5,4]

console.log(soma(...valores))
*/


const objs1=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]


objs2.forEach(Element => {
    Element.innerHTML="curso"
})
/*
Códigos Explicados:

const objs1 = document.getElementsByTagName("div");
const objs2 = [...document.getElementsByTagName("div")];
Explicação de Cada Linha:
Primeira Linha:


const objs1 = document.getElementsByTagName("div");
Aqui, getElementsByTagName("div") busca todos os elementos <div> na página e retorna uma HTMLCollection.
HTMLCollection é uma coleção ao vivo (live collection) de elementos que se atualiza automaticamente quando a estrutura do DOM muda, mas não é um array verdadeiro.
objs1 agora contém essa HTMLCollection, que pode ser usada para acessar elementos <div>, mas tem algumas limitações em relação a arrays.

Segunda Linha:

const objs2 = [...document.getElementsByTagName("div")];
O operador spread (...) é usado aqui para converter a HTMLCollection retornada por getElementsByTagName("div") em um array real.
objs2 agora é um array com todos os <div>s da página.
Esse array não é ao vivo, o que significa que ele não se atualiza automaticamente se a estrutura do DOM mudar após a criação do array.
Diferenças Entre objs1 e objs2:

Tipo de Dados:
objs1 é uma HTMLCollection: Uma coleção que se atualiza automaticamente conforme o DOM muda, mas não possui todos os métodos de um array (como map(), filter(), etc.).
objs2 é um Array: Uma cópia dos elementos no momento da criação. Ele tem todos os métodos de um array comum e é mais flexível para manipulações.

Atualização:
objs1 (HTMLCollection): Se o DOM mudar (ex: um novo <div> for adicionado), objs1 refletirá essas mudanças automaticamente.
objs2 (Array): É estático após a criação. Qualquer mudança no DOM depois disso não afetará objs2.
Uso de Métodos de Array:

objs1: Você precisa converter a HTMLCollection para um array para usar métodos como map(), filter(), etc.
objs2: Como já é um array, você pode usar diretamente todos os métodos de arrays JavaScript.
Resumo:
Use getElementsByTagName() diretamente (objs1) quando precisar de uma coleção ao vivo dos elementos.
Use o operador spread para criar um array (objs2) quando precisar manipular os elementos com a flexibilidade dos métodos de arrays.
*/


// For of e For in

const objs=document.getElementsByTagName("div")
let num=[10,20,30,40,50]

for(let o in objs){
    console.log(o)
}
//exemplo de for in.
//itera sobre as posições dos elementos do array, o indice do array num, saída 0, 1, 2, 3, 4
//igual ao comando abaixo
/*
for(let i=0; i<num.length;i++){
    console.log(i)
}
*/

for(let o of objs){
    console.log(o)
}
/*
Exemplo de for of.
itera diretamente sobre os elementos dentro do array num, saída: 10, 20, 30, 40, 50
igual exemplo abaixo
for(let i=0; i<num.length;i++){
    console.log(num[i])
*/
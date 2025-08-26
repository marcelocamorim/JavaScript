//Casos em que o Ponto e Vírgula é obrigatório em Javascript #P1 - Curso de Javascript - Aula 117

let i=null

for(i=0;i<10;i++);
console.log(i)

let a=null; a=0
console.log(a)

//caso a próxima linha comece com () ou [] exemplo:
let canal="CFB cursos";//ponto e virgula necessario aqui
["J","A","V","B","R"].forEach(l=>console.log(l))

let n1=[1,2]
let n2=[3,4];//ponto e virgula necessario aqui
[n1,n2].map(v=>console.log(v))
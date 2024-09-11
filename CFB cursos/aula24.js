//Funções Anônimas
//funções anônimas não possuem nomes e são declaradas a uma variavel
//exemplo de função anonima
let f=function(v1,v2){
    return v1+v2
}

console.log(f(10,20))



//exemplo de função anonima 'função construtor'
//declara a function a uma const
//usa "new" antes de function e "Function" com F maiusculo
//toda função deve ser colocada no local dos argumentos e como strings
// o último argumento sempre será o corpo da função
const func=new Function ('v1','v2','v3', 'return v1+v2+v3')
console.log(func(10,20,30))
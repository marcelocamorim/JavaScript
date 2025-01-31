let num=6

let resultado=(num%2==0 ? "par":"ímpar")
console.log(resultado)

let idade=18
let maiorIdade=(idade >= 18 ? "Maior de idade":"Menor de idade" )
console.log(maiorIdade)

let compra=100
let desconto=(compra>=100 ? compra* 0.9 : "não atingiu valor mínimo para desconto")
console.log(`desconto: R$${desconto.toFixed(2)}`)//fixa a casa decimal dois digitos após a virgula

let status=true
let statusUsuario=(status ? "Usuario online":"Usuario Offline")
console.log(statusUsuario)

let numero=10
let tipoNumero= (numero>0) ? "Positivo" : (numero<0)?"Negativo":"zero"

console.log(tipoNumero)

let a=10, b=20
let maior=(a>b?"a":"b")
console.log("o maior é "+ maior)

let nota=6
let res=(nota>=7?"aprovado":"reprovado")
console.log(res)


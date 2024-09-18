// Arrow Function

//exemplo de function comum
function soma1(n1,n2){
    return n1+n2
}

let res=soma1(10,20)
console.log(res)


//exemplo de Arrow function (mesma função do exemplo acima)
//pode ser usada com "return" ou sem, em funções mais simples
let soma2=(n1,n2)=>{return n1+n2} //exemplo com "return"
//let soma2=(n1,n2)=>n1+n2  - Exemplo sem return
console.log(soma2(10,20))


const soma3=(n1,n2)=>{ //em funções mais complexas é necessario o "return" e as chaves "{}"
    let res=n1*n2
    return res
}

console.log(soma3(2,40))


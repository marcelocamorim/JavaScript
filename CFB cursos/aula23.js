//Parâmetros REST em funções 
//permitem que uma função receba um número indeterminado de argumentos como um array

function soma(...valores){ //cria um array com spread
    let res=0 //inicia res com 0
    for( let v of valores){ //itera V sobre os valores dos elementos do array valores
        res+=v //res que iniciou em 0 será acrescido com com V que é os elementos do array
    }
    return res //retorna res
}

console.log(soma(10, 20, 30,40,50)) //chama a função soma com cinco argumentos: 10, 20, 30, 40 e 50. "a quantidade pode ser indeterminada"


//Esses valores são capturados pelo ...valores como um array [10, 20, 30, 40, 50].

//parâmetros rest são úteis pois permitem que uma função receba um número indeterminado de argumentos como um array.
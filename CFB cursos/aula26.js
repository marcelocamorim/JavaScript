const soma=(...valores)=>{
    const somar=(val)=>{
        let res=0
        for(v of val)
            res+=v
        return res
    }
    return somar (valores)
}

console.log(soma(10,5,15))

//function soma recebe o array...valores e dentro de soma temos somar que recebe o argumento val (val ainda não foi declarado), variavel res recebe 0, loop for of faz v iterar sobre cada elemento de val (que ainda não foi declarado), res inicia em 0 e soma v a cada iteração, a função soma retorna res, depois o retorno da função soma chama a função somar e declara val com valores (que ainda não foi declarado), depois console.log chama a função soma e declara valores com 10,5,15, array valores agora é 10,5,15 logo o argumento val que foi declarado como valores tambem recebe 10,5,15 
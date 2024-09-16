function* perguntas(){ //function geradora
    const nome=yield 'Qual seu nome?' //
    const esporte=yield 'Qual seu esporte favorito?'
    return "Seu nome é: " + nome + ", Seu esporte favorito é: "+ esporte
}

const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next('bruno').value)
console.log(itp.next('natação').value)

//A primeira chamada de itp.next() começa a execução da função geradora até o primeiro yield. Ela retorna a string 'Qual seu nome?', e a função é pausada aqui, esperando que seja chamada novamente.

//A segunda chamada de next('bruno') faz a execução continuar de onde foi pausada. O valor 'bruno' é passado para o yield anterior, e é atribuído à variável nome.

//Em seguida, a execução continua até o próximo yield, que retorna 'Qual seu esporte favorito?'. A função agora espera que seja fornecida a resposta para essa pergunta.

//A terceira chamada de next('natação') continua a execução. O valor 'natação' é passado para o yield anterior, sendo atribuído à variável esporte.

//A função atinge a linha return, que retorna a string final: "Seu nome é: bruno, Seu esporte favorito é: natação". Isso conclui a execução da função geradora.
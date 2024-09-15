function* perguntas(){
    const nome=yield 'Qual seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return "Seu nome é: " + nome + ", Seu esporte favorito é: "+ esporte
}

const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next('bruno').value)
console.log(itp.next('natação').value)
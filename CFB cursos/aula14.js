//Comando Switch Case

let colocaçao=6

switch(colocaçao){
    case 1:
        console.log("Primeiro lugar")
        break //necessario sempre finalizar com "break" para não rodar os outros cases
    case 2:
        console.log("Segundo lugar")    
        break
    case 3:
        console.log("terceiro lugar")
        break
    case 4: case 5: case 6: // possível colocar mais de um case na mesma linha
        console.log("Premio de participação")
        break
    default: // default será executado caso nenhum case seja verdadeiro
        console.log("Não subiu no pódio")
        break
}
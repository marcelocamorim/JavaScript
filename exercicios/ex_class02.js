// Exercício 2 – Classe Aluno com média
// Objetivo: Criar um aluno com 2 notas e calcular média.

class Aluno{
    constructor(nome, nota1, nota2){
        this.nome=nome
        this.nota1=nota1
        this.nota2=nota2
    }

    notaMedia(){
        return (this.nota1+this.nota2)/2
    }

    status(){
        let med=this.notaMedia()
        return med>=6?"Aprovado":"Reprovado"
    }
}

const aluno1=new Aluno("joão", 5, 4)
const aluno2=new Aluno("Maria",8,7)

console.log(`${aluno1.nome} está ${aluno1.status()} com média ${aluno1.notaMedia()}`)
console.log(`${aluno2.nome} está ${aluno2.status()} com média ${aluno2.notaMedia()}`)


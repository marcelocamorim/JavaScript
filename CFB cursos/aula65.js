//Aprendendo sobre conversões de JSON e Objetos em Javascript - Aula 65

const pessoa={
    nome:"Bruno",
    canal:"CFB Cursos",
    curso:"JavaScript",
    aulas: {
        aula01: "Introdução",
        aula02: "Variáveis",
        aula03: "Condicional",     
    },
}

const string_pessoa='{"nome":"Bruno","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

const s_json_pessoa=JSON.stringify(pessoa) // converte objeto em string json
const o_json_pessoa=JSON.parse(s_json_pessoa)//converte jsonem objeto


console.log(pessoa)
console.log(s_json_pessoa)
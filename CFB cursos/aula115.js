//Aprendendo sobre Desestruturação em Javascript #P2 - Curso de Javascript - Aula 114
// A desestruturação em JavaScript é uma forma prática de extrair valores de arrays ou objetos e atribuí-los a variáveis de maneira simples e legível.

let numeros=[10,20,30,40,50,60,70,80,90]

//declara um valor para cada mas para o "C" recebe todo restante do array
let[a,b,c,...d]=numeros
console.log(a)
console.log(b)
console.log(c)
console.log(d)



let obj={nome:"bruno", canal:"CFB cursos", curso:"JavaScript"}
let{nome,canal}=obj
console.log(nome)
console.log(canal)


const cores=()=>{
    return["verde","amarelo","azul","branco"]

}
//pula a 3° cor(azul) deixando o espaço com virgula no lugar
let [c1,c2, ,c3]=cores()
console.log(c1)
console.log(c2)
console.log(c3)

let texto="curso de JavaScript"
let[...t]=texto.split(" ")
console.log(t)


//Aprendendo trabalhar com módulos em Javascript #P1 - Curso de Javascript - Aula 92

// //Módulos em JavaScript (ES Modules)
// Os módulos são usados em JavaScript para dividir o código em partes reutilizáveis e organizadas. Cada módulo é um arquivo separado que pode exportar variáveis, funções, classes etc., e outro arquivo pode importar esse conteúdo.


//importa o código de outro documento para esse
import { carros, cursos } from "./aula92-cursos.js"

console.log("rodando")
console.log(cursos)
console.log(carros)
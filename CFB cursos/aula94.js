//importar o modulo todo e renomea-lo

import * as m_cursos from './aula94-cursos.js'
//importa o módulo da "aula94-cursos" inteiro e renomeia ele com "as" m_cursos(novo nome)

//agora basta chamar (m_curso."qualquer coisa do modulo")
console.log(m_cursos.cursos)
console.log(m_cursos.getCurso(1))
console.log(m_cursos.default())
// método MAP em Javascript 

/*
const curso=['html', 'css', 'javascript', 'php', 'react']
curso.map((el,i)=>{
    console.log('curso:'+el+' - '+'posição do curso:'+i)
})
*/

//usa o metodo map para percorrer todo o array
//executa uma arrow function
//el == o elemento do array
//i == o indice do elemento no array

//-------------------------------------------------------------

/*
const curso=['html', 'css', 'javascript', 'php', 'react']
let c =curso.map((el,i)=>{
    return '<div>'+el+'</div>'
})
console.log(c)
*/



// let el=document.getElementsByTagName('div')
// el =[...el]
// el.map((e,i)=>{
//     e.innerHTML="cfb cursos"
// })

/*
document.getElementsByTagName('div') retorna um HTMLCollection, que não é um array.
el = [...el] usa o operador spread (...) para converter o HTMLCollection em um array real.
Agora você pode usar métodos de array, como map(), em el.
*/

const el=document.getElementsByTagName("div")
const val=array.prototype.map.call(el,({innerHTML})=>innerHTML)
console.log(val)
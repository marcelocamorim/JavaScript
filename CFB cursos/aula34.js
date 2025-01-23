const c1=document.querySelector("#c1")//variavel c1 recebe item de ID c1

// const msg=()=>{// function para gerar um alerta
//     alert("clicou")
// }
//c1.addEventListener("click",msg) //adiciona o evento a c1(por click- função)

//--------------------------------------------------------------------------

// c1.addEventListener("click",()=>{
//     alert("clicou")
// })
//mesmo exemplo acima porem ao invés de criar a function separada aqui ela é criada com função anonima logo após o evento "click"

// c1.addEventListener("click",(evt)=>{
//     const el=evt.target
//     el.classList.add("destaque")
// })

// evt captura o evento que ocorreu (um clique no caso).
// evt.target identifica o elemento que disparou o evento (neste caso, c1).
// classList.add("destaque") adiciona a classe destaque ao elemento clicado.

// Colocar o parâmetro evt na função:

// É opcional, mas necessário se você quiser acessar informações detalhadas sobre o evento.
// Permite usar evt.target, que identifica o elemento que disparou o evento.
// Permite rastrear outros dados úteis, como:
// A posição do clique,
// As teclas pressionadas,
// Se o evento foi prevenido com evt.preventDefault(), entre outros.

const cursos=[...document.querySelectorAll(".curso")]

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el=evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML + " foi clicado")
    })
})
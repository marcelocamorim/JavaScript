const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector("#btn_copiar")
const todosCursos=[...document.querySelectorAll(".curso")]



todosCursos.map((el)=>{//itera cada elemento do array todosCursos
    el.addEventListener("click",(evt)=>{//add evento de click
        const curso=evt.target//captura o elemento clicado
        curso.classList.toggle("selecionado")// add com toggle a class no elemento capturado
    })
})

btn.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]    
    const cursosNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado)")]
    console.log(cursosNaoSelecionados)
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})


//add evento por click no botão
//cria array com todos elementos que possuem a class 
//itera os elementos do array com ".map" e com appendChild manda o elemento "el" para caixa2
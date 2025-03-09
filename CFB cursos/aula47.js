//metodo find
//O método .find() em JavaScript é usado para encontrar o primeiro elemento de um array que satisfaça uma condição específica. Ele retorna o próprio elemento encontrado ou undefined caso nenhum elemento corresponda ao critério.


const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btnPesquisar=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=[10,5,8,2,9,15,20]
p_array.innerHTML=elementos_array

btnPesquisar.addEventListener("click",()=>{
    resultado.innerHTML="Valor não Encontrado"
    const ret=elementos_array.find((e,i)=>{
        if(e==txt_pesquisar.value){
            resultado.innerHTML="Valor Encontrado "+e+" na posição " +i
            return e
        }
    })
    console.log(ret)
})
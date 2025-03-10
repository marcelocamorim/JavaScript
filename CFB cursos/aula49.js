//metodo some
// O método .some() em JavaScript é usado para verificar se pelo menos um elemento de um array passa em um teste específico. Ao contrário do .every(), que exige que todos os elementos passem no teste, o .some() só precisa de um único elemento que satisfaça a condição.


const p_array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[16,12,10,17,15,13,11,19]
p_array.innerHTML="["+elementos_array+"]"

btnVerificar.addEventListener("click",(evt)=>{    
    const ret=elementos_array.some((e,i)=>{
        if(e<18){
            resultado.innerHTML="Array não conforme na posição "+i
        }
        return e>=18
    })
    if(ret){
        resultado.innerHTML="Ok!"
    }    
})
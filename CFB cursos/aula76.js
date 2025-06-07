const btn_promessa=document.getElementById('btn_promessa')
const numero = document.getElementById("numero")

btn_promessa.addEventListener("click",(evt)=>{
    numero.innerHTML = "Processando..."
    promessa()
})




const promessa=()=>{
    let promise = new Promise((resolve, reject) => {//res=resolvido ok, rej =rejeitado 
        let resultado = true
        let tempo = 3000
    
        setTimeout(() => {
            if(resultado){
                resolve("Deu tudo certo")
            }else{
                reject("Deu tudo errado")
            }
        }, tempo)
    
    })
    
    promise.then((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.add("ok")
        numero.classList.remove("erro")
    })//caso a promise caia em resolve ela vem para then
    
    promise.catch((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })// caso a promise caia em reject ela vem para catch

}

numero.innerHTML = "Esperando..."
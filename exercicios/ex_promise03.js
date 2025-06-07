/*
Exercício 3 – Simular busca de dados
Objetivo: Criar uma função que simula buscar dados de um servidor, usando Promise com um setTimeout.
*/
dadosEncontrados=true

function buscandoDados(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            if(dadosEncontrados){
                res("Arquivos encontrados")
            }else{
                rej("Erro! Nenhum arquivo encontrado")
            }
            
        }, 3000);
    })
}

buscandoDados()
    .then((msg)=>{console.log('Sucesso!', msg)})
    .catch((erro)=>{console.log(erro)})


console.log("Buscando informações...")
// 🚀 Exercícios — Padrão Singleton (nível intermediário → avançando)
// Exercício 4 – Registro de Logs

// Crie uma classe Logger que:
// tenha um array logs

// método registrar(mensagem) que adiciona a mensagem no array
// método mostrarLogs() que exibe todas as mensagens
// Use o padrão Singleton para que todos os lugares da aplicação compartilhem o mesmo histórico de logs.

class Logger{
    constructor(){
        if(Logger.instancia){
            return Logger.instancia
        }

        this.logs=[]

        Logger.instancia=this
    }

    registrarMensagem(msg){
        this.logs.push(msg)
        console.log("Mensagem adicionada ao histórico")
    }

    mostrarLogs(){
        this.logs.forEach((el)=>{
            console.log(el)
        })
    }


}

const log1=new Logger()
const log2=new Logger()

log1.registrarMensagem("testando mensagem1111111")
log1.registrarMensagem("testando mensagem2222222")
log1.registrarMensagem("testando mensagem3333333")
log1.registrarMensagem("testando menssagem4444444")



log2.registrarMensagem("testando mensagem55555555555555")
log2.registrarMensagem("testando mensagem77777777777777")

log1.mostrarLogs()
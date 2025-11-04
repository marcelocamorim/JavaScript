// 🚀 Exercícios — Padrão Factory Method (nível intermediário → avançando)
// Exercício 2 – Fábrica de Mensagens

// Crie:

// MensagemEmail (método enviar() → “Enviando e-mail…”)

// MensagemSMS (método enviar() → “Enviando SMS…”)

// MensagemPush (método enviar() → “Enviando notificação push…”)

// Depois, crie uma MensagemFactory que tenha o método criarMensagem(tipo).
// Teste criando tipos diferentes e chamando enviar() em cada um.

// Desafio extra:
// Se o tipo não existir, retorne uma mensagem de erro elegante.

class Mensagem{
    enviarMensagem(tipo){
        console.log(`Enviando mensagem de ${tipo}...`)
    }
}

class MensagemEmail extends Mensagem{
    enviarMensagem(){
        super.enviarMensagem("e-mail")
    }
}
class MensagemSMS extends Mensagem{
    enviarMensagem(){
        super.enviarMensagem("sms")
    }
}
class MensagemPush extends Mensagem{
    enviarMensagem(){
        super.enviarMensagem("Notificação Push")
    }
}

class mensagemFactory{
    criarMensagem(tipo){
        if(tipo==="email"){return new MensagemEmail}
        if(tipo==="sms"){return new MensagemSMS}
        if(tipo==="push"){return new MensagemPush}
        throw new Error (`Tipo de Mensagem ${tipo} não é suportado`)
    }
}

const fabrica = new mensagemFactory()

const email1 = fabrica.criarMensagem("email")
email1.enviarMensagem()

const sms1= fabrica.criarMensagem("sms")
sms1.enviarMensagem()

const push1= fabrica.criarMensagem("push")
push1.enviarMensagem()

const fax= fabrica.criarMensagem("fax")
fax.enviarMensagem()
// 🚀 Exercícios — Padrão Observer (nível avançado, mas didático)
// Exercício 1 – Sistema de Notificações

// Crie:

// Classe Canal → tem uma lista de inscritos (observers)
//class canal -> nome -> array de usuarios ->

// método inscrever(observer)
//usuario -> push arrray inscritos

// método cancelarInscricao(observer)
//remove usuario de array inscritos com filter

// método publicar(video) → notifica todos os inscritos

// Classe Usuario → método notificar(video) que mostra

// “Fulano recebeu notificação do vídeo: [título]”

// Teste com vários usuários inscritos e diferentes vídeos sendo publicados.

class Canal {
    constructor(nome) {
        this.nome = nome
        this.inscritos = []
        this.videos=[]
    }

    inscrever(usuario) {
        console.log(`${usuario.nome} se Inscreveu no canal ${this.nome}`)
        this.inscritos.push(usuario)
    }

    cancelarInscrição(usuario) {
        this.inscritos = this.inscritos.filter((u => u.nome !== usuario.nome))
        console.log(`Usuario ${usuario.nome} Cancelou a inscrição no canal ${this.nome}`)
    }

    Publicar(video){
        console.log(`Canal ${this.nome} publicou um novo Video: ${video}`)
        this.videos.push(video)
        this.notificar(video)
    }

    notificar(video){
        this.inscritos.forEach((el)=>{
            el.notificar(this.nome, video)
        })
    }

    info(){
        console.log(`Resumo do Canal ${this.nome}`)
        console.log(`Inscritos ativos: ${this.inscritos.length}`)
        this.inscritos.forEach((el)=>{
            console.log(el.nome)
        })
        console.log("--------------------------")
        console.log(`Videos Publicados: ${this.videos.length}`)
        this.videos.forEach((el)=>{
            console.log(el)
        })
    }
}


class Usuario{
    constructor(nome){
        this.nome=nome
    }

    notificar(canal, video){
        console.log(`${this.nome} Recebeu notificação: Novo Vídeo: ${video} do canal: ${canal} `)
    }
}

const canal1 = new Canal("Ninja tech")

const usuario1 = new Usuario("joão")
const usuario2 = new Usuario("maria")
const usuario3 = new Usuario("carlos")

canal1.inscrever(usuario1)
canal1.inscrever(usuario2)
canal1.inscrever(usuario3)

canal1.Publicar("dicas do VS Code")
// canal1.Publicar("Como pensar como um dev pro")
// canal1.Publicar("entenda lógica de programação")

canal1.info()


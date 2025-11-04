// 🚀 Exercícios — Padrão Observer (nível avançado, mas didático)
// Exercício 1 – Sistema de Notificações

// Crie:

// Classe Canal → tem uma lista de inscritos (observers)


// método inscrever(observer)


// método cancelarInscricao(observer)


// método publicar(video) → notifica todos os inscritos

// Classe Usuario → método notificar(video) que mostra

// “Fulano recebeu notificação do vídeo: [título]”

// Teste com vários usuários inscritos e diferentes vídeos sendo publicados.

class Canal{
    constructor(nome){
        this.nome=nome
        this.inscritos=[]
        this.videos=[]
    }

    follow(usuario){
        this.inscritos.push(usuario)
        console.log(`${usuario.nome} Se inscreveu no canal ${this.nome}`)
        console.log("------------------------------------")
    }

    unFollow(usuario){
        this.inscritos = this.inscritos.filter(u=>u.nome!==usuario.nome)
        console.log(`Usuario ${usuario.nome} Deixou de seguir o canal ${this.nome}`)
        console.log("------------------------------------")
    }

    publicar(video){
        this.videos.push(video)
        console.log(`Video "${video}" Publicado com sucesso!`)

        this.inscritos.forEach((el)=>{
            el.notificar(this.nome, video)
        })
    }



    info(){
        console.log(`Resumo do Canal ${this.nome}`)
        console.log(`Inscritos Ativos: ${this.inscritos.length}`)
        console.log(`Videos Publicados: ${this.videos.length}`)
        console.log("------------------------------------")

        console.log("Lista de Inscritos:")
        this.inscritos.forEach((el)=>{
            console.log(el.nome)
        })
        console.log("------------------------------------")

        console.log("Lista de Vídeos Publicados:")
        this.videos.forEach((el)=>{
            console.log(el)
        })     
        console.log("------------------------------------")   
    }
}








class Usuario{
    constructor(nome){
        this.nome=nome
    }

    notificar(canal, video){
        console.log(`${this.nome} Recebeu notificção - Novo video: "${video}" no Canal: ${canal}`)
    }

}

const canal1=new Canal("Ninja Tech")

const user1 = new Usuario("joão")
const user2= new Usuario("maria")
const user3 = new Usuario("pedro")
const user4 = new Usuario("alice")

canal1.follow(user1)
canal1.follow(user2)
canal1.unFollow(user1)
canal1.follow(user3)
canal1.follow(user4)

canal1.publicar("Atalhos ninjas para o VScode")

//canal1.info()

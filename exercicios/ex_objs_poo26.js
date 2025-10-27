// 🚀 Exercícios — Padrão Singleton (nível intermediário → avançando)
// Exercício 3 – Controle de Volume

// Crie uma classe ControleDeVolume com:

// propriedade nivel (0 a 100)
// métodos aumentar() e diminuir(), com limites entre 0 e 100

// A ideia: o volume do sistema é único, então só deve existir um controle.
// Implemente o Singleton e teste com dois objetos — ambos devem alterar o mesmo volume.

class ControleDeVolume {
    constructor() {
        if (ControleDeVolume.instancia) {
            return ControleDeVolume.instancia
        }
        this.nivel = 0


        ControleDeVolume.instancia = this
    }

    aumentar() {
        if (this.nivel >= 100) {
            console.log(`Volume Maximo ${this.nivel}`)
            return
        }

        this.nivel += 10
        console.log(`Volume Atual ${this.nivel}`)
    }


    dimunuir() {

        if (this.nivel <= 0) {
            console.log(`Volume Mutado ${this.nivel}`)
            return
        }
        this.nivel -= 10
        console.log(`Volume Atual ${this.nivel}`)
    }
}

const volume = new ControleDeVolume()
const volume2 = new ControleDeVolume()

volume2.aumentar()
volume2.aumentar()
volume2.aumentar()


volume.aumentar()
volume.aumentar()






console.log(volume)
console.log(volume===volume2)
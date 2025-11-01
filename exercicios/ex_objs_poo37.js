// 🚀 Exercícios — Padrão Observer (nível avançado, mas didático)
/*
Exercício 2 – Sensor de Temperatura

Crie:

SensorTemperatura (sujeito) → armazena temperatura e uma lista de observadores

método registrar(observer)

método atualizarTemperatura(valor) → notifica todos

Display (observador) → método atualizar(temp) que mostra a nova temperatura

Simule o sensor atualizando a temperatura e veja todos os displays sendo atualizados em tempo real.

Desafio extra:
Adicione um Alertas que dispara uma mensagem se a temperatura ultrapassar um valor limite.
*/

class SensorTemperatura {
    constructor() {
        this.temperatura = 0
        this.displays = []
    }

    registrar(display) {
        this.displays.push(display)
        console.log(`Display ${display.local} Registrado com Sucesso!`)
    }

    atualizarTemperatura(graus) {
        this.temperatura = graus
        console.log(`Temperatura atualizada - ${graus}°`)
        this.notificar()
    }

    notificar() {
        if (this.temperatura <= 3) {
            this.displays.forEach((el) => {
                console.log(`Atenção! Frio intenso ${el.local} - ${this.temperatura}°`)
            })

        } else if (this.temperatura >= 40) {
            this.displays.forEach((el) => {
                console.log(`Atenção! Calor intenso - Risco de Vida! ${el.local} - ${this.temperatura}°`)
            })

        } else {
            this.displays.forEach((el) => {
                console.log(`Atualização de temperatura - ${el.local} - ${this.temperatura}°`)
            })

        }

    }
}

class Display {
    constructor(local) {
        this.local = local
    }
}

const sensor = new SensorTemperatura()

const display1 = new Display("sala central")
const display2 = new Display("laboratorio")
const display3 = new Display("refeitorio")

sensor.registrar(display1)
sensor.registrar(display2)
sensor.registrar(display3)

sensor.atualizarTemperatura(40)


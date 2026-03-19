// 🚀 Exercícios — Tema: Composição vs Herança
// 🧠 Nível: intermediário → avançando aos poucos
// Exercício 1 – Composição básica

// Crie uma classe Motor que tenha:

// uma propriedade potencia

// um método ligar() que mostra “Motor ligado com X cavalos de potência.”

// Crie uma classe Carro que tenha um motor (ou seja, receba um objeto Motor no construtor).
// Adicione um método dirigir() que chama o método ligar() do motor antes de exibir “Carro está em movimento.”

// Desafio extra: o mesmo carro pode trocar de motor (ex: motor mais potente).

class Motor{
    constructor(potencia){
        this.potencia=potencia
    }

    ligar(){
        console.log(`Motor ligado com ${this.potencia} cavalos de potencia`)
    }
}

class Carro{
    constructor(motor){
        this.motor=motor
    }

    dirigir(){
        this.motor.ligar()
        console.log(`Carro em movimento`)
    }

    trocarMotor(novoMotor){
        this.motor=novoMotor
        console.log(`Motor trocado para ${novoMotor.potencia} cavalos`)
    }
}

const motor1=new Motor(150)
const motor2=new Motor(350)
const motor3=new Motor(750)

const carro1 = new Carro(motor1)

carro1.dirigir()

carro1.trocarMotor(motor2)
carro1.dirigir()
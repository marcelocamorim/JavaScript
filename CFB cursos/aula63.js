//pegar valores dos campos para criar os carros
//pegar os tipos radios
//pegar botao
// pegar div onde vai os carros
//bloquear e desbloquear blindagem e municao de acordo com o tipo selecionado
//limpar os campos sempre que trocar o tipo de carro
//criar carros com botão dependendo do tipo selecionado
// add os carros em um array
//iterar array para criar objs html- nome, portas, blindagem, municao
//adicionar carros na div a baixo


//campos
const f_nome=document.querySelector("#f_nome")
const f_portas=document.querySelector("#f_portas")
const f_blindagem=document.querySelector("#f_blindagem")
const f_municao=document.querySelector("#f_municao")

//radios
const f_tipoMilitar=document.querySelector("#f_tipoMilitar")
const f_tipoNormal=document.querySelector("#f_tipoNormal")

//button
const btn_addCarro=document.querySelector("#btn_addCarro")

//div
const carros=document.querySelector("#carros")

//bloqueia, desbloqueia e limpa os campos
f_tipoMilitar.addEventListener("click",(evt)=>{
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.disabled=false
    f_municao.disabled=false
})

f_tipoNormal.addEventListener("click",(evt)=>{
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.disabled=true
    f_municao.disabled=true
})

//array dos carros
const a_carros=[]

const gerenciarExibicaoCarros=()=>{
    carros.innerHTML=""
    a_carros.map((c)=>{
        const div=document.createElement("div")
        div.setAttribute("class", "carro")
        div.innerHTML=`Nome: ${c.nome}<br>`
        div.innerHTML+=`Portas: ${c.portas}<br>`
        div.innerHTML+=`Cor: ${c.cor}<br>`

        if(c instanceof Militar){
            div.innerHTML+=`Blindagem: ${c.blindagem}`
            div.innerHTML+=`Munição: ${c.municao}`
        }

        carros.appendChild(div)
    })
}

const limparCampos=()=>{
    f_nome.value=""
    f_portas.value=0
    f_blindagem.value=0
    f_municao.value=0  
}

//cria os carros com o button
btn_addCarro.addEventListener("click",()=>{  

    if (f_nome.value === "") {
        alert("Por favor, digite o nome do carro.")
        limparCampos()
        return
    }


    if (f_portas.value < 0 || f_blindagem.value < 0 || f_municao.value < 0) {
        alert("Os valores não podem ser negativos!")
        limparCampos()
        return      
    }


    if(f_tipoNormal.checked){
        const c=new Carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    }else{
        const c=new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c)
    } 
    gerenciarExibicaoCarros()

})








class Carro{ //Classe PAI / BASE
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor="preto"
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends Carro{ //Classe Filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem=blindagem
        this.municao=municao
        this.setCor("Verde")
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

const c1=new Carro("Normal",4)
c1.ligar()
c1.setCor("Preto")

const c2=new Militar("Lutador",1,100,50)
//c2.setCor("Azul")
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("-------------------------")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?"Sim":"Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Cor: ${c2.cor}`)
console.log("-------------------------")
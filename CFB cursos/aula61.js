// Função para criar novos objetos Pessoa
const criarPessoa = (pnome, pidade) => {
    return {
        nome: pnome,
        idade: pidade,

        getNome: function() {
            return this.nome;
        },

        getIdade: function() {
            return this.idade;
        },

        setNome: function(nome) {
            this.nome = nome;
        },

        setIdade: function(idade) {
            this.idade = idade;
        }
    };
};

let pessoas = [];

const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");

const addPessoa = () => {
    res.innerHTML = "";
    pessoas.map((p) => {
        const div = document.createElement("div");
        div.setAttribute("class", "pessoa");
        div.innerHTML = `Nome: ${p.getNome()}<br/>Idade: ${p.getIdade()}`;
        res.appendChild(div);
    });
};

btn_add.addEventListener("click", () => {
    const nome = document.querySelector("#f_nome");
    const idade = document.querySelector("#f_idade");

    const p = criarPessoa(nome.value, idade.value); // Criamos um novo objeto Pessoa
    pessoas.push(p); // Adicionamos ao array

    nome.value = "";
    idade.value = "";
    nome.focus();
    addPessoa();
});

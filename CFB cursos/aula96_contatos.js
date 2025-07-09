import { contatos } from "./aula96_bancoContatos.js"

let contato = {
    getTodosContatos: function () {
        return contatos
    },

    getContato: function (i_cont) {
        return contatos[i_cont]
    },

    addContato: function (novoContato, destinoDOM) {
        const cont = {
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
        }

        contatos.push(cont)
        this.renderizarContatos(destinoDOM)
        
    },

    renderizarContatos: function (destinoDOM) {
        destinoDOM.innerHTML = ""

        contatos.forEach((c, i) => {
            const div = document.createElement("div")
            div.setAttribute("class", "contato")

            const p_nome = document.createElement("p")
            p_nome.textContent = c.nome

            const p_telefone = document.createElement("p")
            p_telefone.textContent = c.telefone

            const p_email = document.createElement("p")
            p_email.textContent = c.email

            const btn_remover = document.createElement("button")
            btn_remover.textContent = "Excluir"

            btn_remover.addEventListener("click", () => {
                contatos.splice(i, 1)
                this.renderizarContatos(destinoDOM)
            })

            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            div.appendChild(btn_remover)

            destinoDOM.appendChild(div)
        })
    }
}

export default contato
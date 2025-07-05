import { contatos } from "./aula96_bancoContatos.js";

let contato = {
    getTodosContatos: function () {
        return contatos
    },

    getContato: function (i_cont) {
        return contato[i_cont]
    },

    addContato: function () {

    }
}

export default contato
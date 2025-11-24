let data = new Date()

/*
Exercício 20 — Tema automático com horário
Crie um script que altera o tema da página automaticamente: Tema claro das 6h às 18h Tema escuro das 18h às 6h
*/


if (data.getHours() >= 18 || data.getHours() <=6) {
    document.documentElement.classList.add("temaEscuro")
    document.documentElement.classList.remove("temaClaro")
}
else{
    document.documentElement.classList.add("temaClaro")
    document.documentElement.classList.remove("temaEscuro")
}


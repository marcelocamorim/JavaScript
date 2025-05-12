const display = document.getElementById("display");
let expressao = "";
let ligado = false;

// Atualiza o texto do display
const atualizarDisplay = () => {
  display.innerText = expressao || "0";
};

// Liga/desliga a calculadora
document.getElementById("ton").addEventListener("click", () => {
  ligado = !ligado;
  expressao = "";
  atualizarDisplay();
  display.style.color = ligado ? "black" : "gray";
});

// Limpa o display
document.getElementById("tlimpar").addEventListener("click", () => {
  if (ligado) {
    expressao = "";
    atualizarDisplay();
  }
});

// Adiciona números e operadores
document.querySelectorAll(".num, .op").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (ligado) {
      let valor = btn.innerText;
      if (valor === ",") valor = ".";
      if (valor === "x") valor = "*";
      expressao += valor;
      atualizarDisplay();
    }
  });
});

// Executa o cálculo ao pressionar "="
document.getElementById("tigual").addEventListener("click", () => {
  if (ligado) {
    try {
      const resultado = eval(expressao);
      expressao = resultado.toString();
    } catch {
      expressao = "Erro";
    }
    atualizarDisplay();
  }
});
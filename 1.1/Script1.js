const button1 = document.getElementById('conferirResultado');
const button2 = document.getElementById('limparResultado');
const campoTexto1 = document.getElementById('Jogador1');
const campoTexto2 = document.getElementById('Jogador2');

button1.addEventListener("click", conferirResultado);
button2.addEventListener("click", limparResultado);

function conferirResultado() {

alert("1: " + campoTexto1.value.toLowerCase() + "\n2: " + campoTexto2.value.toLowerCase());

const Jogador1 = campoTexto1.value.toLowerCase();
const Jogador2 = campoTexto2.value.toLowerCase();

if (Jogador1 !== "tesoura" && Jogador1 !== "papel" && Jogador1 !== "pedra") {
    limpar();
    alert("Jogador 1 opção inválida!");
    alert("Jogo finalizado!");
  } else if (Jogador2 !== "tesoura" && Jogador2 !== "papel" && Jogador2 !== "pedra") {
    limpar();
    alert("Jogador 2 opção inválida!");
    alert("Jogo finalizado!");
  } else {
    if (Jogador1 === "tesoura" && Jogador2 === "papel") {
      alert("O  Jogador 1 venceu!");
    } else if (Jogador1 === "papel" && Jogador2 === "pedra") {
      alert("O  Jogador 1 venceu!");
    } else if (Jogador1 === "pedra" && Jogador2 === "tesoura") {
      alert("O  Jogador 1 venceu!");
    } else if (Jogador1 === Jogador2) {
      alert("Empate!");
    } else {
      alert("O Jogador 2 foi o venceu!");
    }
  }
}

function limparResultado() {
    document.getElementById('Jogador1').value = "";
    document.getElementById('Jogador2').value = "";
  }


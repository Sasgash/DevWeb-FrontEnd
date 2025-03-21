document.addEventListener('DOMContentLoaded', () => {
    const vetCidades = ['BELO HORIZONTE', 'SÃO PAULO', 'RIO DE JANEIRO', 'SALVADOR', 'CURITIBA'];
    const inputNome = document.getElementById('inputNome');
    const inputDiaEntrada = document.getElementById('inputDiaEntrada');
    const inputDiaSaida = document.getElementById('inputDiaSaida');
    const selectTipoQuarto = document.getElementById('selectTipoQuarto');
    const inputCidade = document.getElementById('inputCidade');
    const botaoCalcular = document.getElementById('botaoCalcular');
    const relatorioContas = document.getElementById('relatorioContas');
  
    let contas = [];
  
    botaoCalcular.addEventListener('click', () => {
      const nome = inputNome.value.trim();
      const diaEntrada = parseInt(inputDiaEntrada.value, 10);
      const diaSaida = parseInt(inputDiaSaida.value, 10);
      const tipoQuarto = selectTipoQuarto.value;
      const cidade = inputCidade.value.trim().toUpperCase();
  
      if (!nome || isNaN(diaEntrada) || isNaN(diaSaida) || !vetCidades.includes(cidade) || diaSaida <= diaEntrada) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
      }
  
      const valorDiaria = calcularValorDiaria(tipoQuarto);
      const valorConta = calcularConta(diaEntrada, diaSaida, valorDiaria);
      
      contas.push({ nome, valorConta });
      atualizarRelatorio(contas);
      limparCampos();
    });
  
    function calcularValorDiaria(tipoQuarto) {
      switch (tipoQuarto) {
        case 'STANDARD':
          return 120.00;
        case 'LUXO':
          return 150.00;
        case 'SUPER-LUXO':
          return 180.00;
        default:
          return 0;
      }
    }
  
    function calcularConta(diaEntrada, diaSaida, valorDiaria) {
      return (diaSaida - diaEntrada) * valorDiaria;
    }
  
    function atualizarRelatorio(contas) {
      const valorMedio = calcularValorMedio(contas);
      relatorioContas.innerHTML = '<li>Nome do hóspede | Valor da Conta</li>';
      contas
        .filter(conta => conta.valorConta >= valorMedio)
        .forEach(conta => {
          const li = document.createElement('li');
          li.textContent = `${conta.nome} | R$ ${conta.valorConta.toFixed(2)}`;
          relatorioContas.appendChild(li);
        });
    }
  
    function calcularValorMedio(contas) {
      if (contas.length === 0) return 0;
      const total = contas.reduce((acc, conta) => acc + conta.valorConta, 0);
      return total / contas.length;
    }
  
    function limparCampos() {
      inputNome.value = '';
      inputDiaEntrada.value = '';
      inputDiaSaida.value = '';
      selectTipoQuarto.value = 'STANDARD';
      inputCidade.value = '';
    }
  });

document.addEventListener('DOMContentLoaded', () => {
    const inputNome = document.getElementById('inputNome');
    const inputPecas = document.getElementById('inputPecas');
    const botaoEnviar = document.getElementById('botaoEnviar');
    const listaSalario = document.getElementById('listaSalario');
    const totalSalarioElem = document.getElementById('totalSalario');
    const mediaSalarioElem = document.getElementById('mediaSalario');
  
    let salarios = [];
  
    botaoEnviar.addEventListener('click', () => {
      const nomeFuncionario = inputNome.value.trim();
      const pecasFabricadas = parseInt(inputPecas.value, 10);
  
      if (nomeFuncionario === '' || isNaN(pecasFabricadas) || pecasFabricadas <= 0) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
      }
  
      const salarioFuncionario = calcularSalario(pecasFabricadas);
      salarios.push(salarioFuncionario);
      adicionarLista(nomeFuncionario, salarioFuncionario);
      atualizarRelatorio(calcularTotalSalarios(salarios), salarios.length);
      limparCampos();
    });
  
    function calcularSalario(pecas) {
      if (pecas <= 200) {
        return pecas * 2.00;
      } else if (pecas <= 400) {
        return pecas * 2.30;
      } else {
        return pecas * 2.50;
      }
    }
  
    function adicionarLista(nome, salario) {
      const itemLista = document.createElement('li');
      itemLista.textContent = `${nome} | R$ ${salario.toFixed(2)}`;
      listaSalario.appendChild(itemLista);
    }
  
    function limparCampos() {
      inputNome.value = '';
      inputPecas.value = '';
    }
  
    function calcularTotalSalarios(salarios) {
      return salarios.reduce((total, salario) => total + salario, 0);
    }
  
    function atualizarRelatorio(totalSalario, quantidade) {
      const mediaSalario = quantidade > 0 ? totalSalario / quantidade : 0;
      totalSalarioElem.textContent = `Total pago com salários: R$ ${totalSalario.toFixed(2)}`;
      mediaSalarioElem.textContent = `Média dos salários: R$ ${mediaSalario.toFixed(2)}`;
    }
  });

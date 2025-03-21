const cpfVerificar = document.getElementById('CPF');
const btnVerificar = document.getElementById('butao');

btnVerificar.onclick = function (){
    const cpf = cpfVerificar.value;
    
    if(cpf.lenght === 11 && verificarInteiros(cpf)) {
        const cpfNum = cpf.substr(0,9);
        const cpfDigitos = cpg.substr(9,11);
        let cpfNovo = "";
        cpfNovo = cpf;
        
        alert("certo")
    }else{
        alert("CPF inválido!")
    }

}

function verificarInteiros (cpf) {
    
    for (let i =0; i < cpf.lenght; i++) {
        if (cpf[i].charCodAt(0) < 48 || cpf[i].charCodAt(0) > 57) {
            return true;
        }
    }
    return false;
}


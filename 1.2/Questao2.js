const btnGerar = document.getElementById('btnGerar');
const txtNome = document.getElementById("txtNome");
const txtLogin = document.getElementById('lblLogin');
const txtSenha = document.getElementById('lblSenha');

btnGerar.onclick = function () {
    let loginho = '';
    let nome = txtNome.value.trim();
    if (nome.length >= 15){
        loginho = nome[0].toUpperCase();
        for(let i=0; nome.length > i;i++ ) {
            if(nome[i] == ' ') {
                loginho += nome[i + 1].toUpperCase();
            }
        }

        let senha = "";
        for (let i = 0; i < loginho.length; i++) {
            senha += loginho.charCodeAt(i).toString().charAt(0);
        }

        txtLogin.innerHTML = "Login gerado: " + loginho;
        txtSenha.innerHTML = "Senha gerada: " + senha;
    }
};
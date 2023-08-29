function mostraLogin() {
    document.querySelector('.login').style.display = 'block';
    document.querySelector('.formulario').style.display = 'none';
}

function mostraCadastro() {
    document.querySelector('.formulario').style.display = 'block';
    document.querySelector('.login').style.display = 'none';
}

let cpfCadastro, nomeCadastro, enderecoCadastro, senhaCadastro, confirmesenhaCadastro, telefoneCadastro, emailCadastro;

function cadastrar() {
    cpfCadastro = document.getElementById('cpf').value;
    nomeCadastro = document.getElementById('nome').value;
    enderecoCadastro = document.getElementById('endereco').value;
    senhaCadastro = document.getElementById('senha').value;
    confirmesenhaCadastro = document.getElementById('confirma').value;
    telefoneCadastro = document.getElementById('telefone').value;
    emailCadastro = document.getElementById('email').value;
}

function fazerLogin() {
    let emailLogin = document.getElementById('emailLogin').value;
    let senhaLogin = document.getElementById('senhaLogin').value;

    if (emailLogin === emailCadastro && senhaLogin === senhaCadastro) {

        // Redirecionar para a página desejada
        window.location.href = '../cursos.html';
    } else {
      alert('Credenciais inválidas. Verifique seu email e senha.');
    }
  }
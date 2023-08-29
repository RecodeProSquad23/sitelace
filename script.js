window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    document.querySelector(".parallax-background").style.transform = "translateY(" + offset * 0.5 + "px)";
});

document.addEventListener("DOMContentLoaded", function () {
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    const closeButtons = document.querySelectorAll(".close-button");

    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", function () {
            const modalId = trigger.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.style.display = "none";
        });
    });
});

$(document).ready(function () {
    // ... (seu código existente)
    $('.perguntas_ul li').click(function () {
        $(".perguntas_ul li").find(".resposta").slideUp(250);
        $(this).find(".resposta").slideToggle(250);
    });

    $(".perguntas_ul li").first().click();

    $('.perguntas_ul li b').click(function () {
        $('.perguntas_ul li b').removeClass('ativar_faq');
        $(this).addClass('ativar_faq');
    });
});

$(document).ready(function () {
    // Função para mostrar o conteúdo de acordo com o ID do botão
    function showContent(contentId) {
        $(".content").hide(); // Esconde todos os conteúdos
        $("#" + contentId).show(); // Mostra o conteúdo correspondente ao ID
    }

    // Ao clicar nos botões do menu lateral
    $("#opencursos").click(function () {
        showContent("meuscursos");
    });

    $("#openaulas").click(function () {
        showContent("aulas");
    });

    $("#openatividades").click(function () {
        showContent("atividades");
    });

    $("#openavaliacoes").click(function () {
        showContent("avaliacoes");
    });

    $("#opencertificados").click(function () {
        showContent("certificados");
    });

    $("#openperfil").click(function () {
        showContent("perfil");
    });

    $("#openrecursos").click(function () {
        showContent("recursos");
    });

    // Ao carregar a página, exibe o conteúdo inicial
    showContent("meuscursos");
});




function avaliarRespostas() {
    // Resto do seu código de avaliação aqui

    if (acertos >= minAcertos) {
        alert(`Parabéns! Você acertou ${acertos} questões.`);

        if (acertos > maiorPontuacao) {
            maiorPontuacao = acertos;
            localStorage.setItem('maiorPontuacao', maiorPontuacao); // Salva no armazenamento local
            document.getElementById('maiorPontuacao').textContent = maiorPontuacao;
        }
    } else {
        // Resto do seu código para tratar quando a pontuação não atinge o mínimo
    }
}
window.addEventListener('DOMContentLoaded', () => {
    const maiorPontuacao = localStorage.getItem('maiorPontuacao');
    if (maiorPontuacao) {
        document.getElementById('maiorPontuacao').textContent = maiorPontuacao;
    }
});
window.addEventListener('DOMContentLoaded', () => {
    const maiorPontuacao = localStorage.getItem('maiorPontuacao');
    if (maiorPontuacao) {
        document.getElementById('maiorPontuacao').textContent = maiorPontuacao;
    }
});

let tentativas = 0;
const minAcertos = 3;
let acertos = 0;
let maiorPontuacao = 0;

function avaliarRespostas() {
    const form = document.getElementById('quizForm');
    const respostasCorretas = ['d', 'd', 'a', 'd', 'd']; // Adicione mais respostas corretas

    acertos = 0;
    for (let i = 1; i <= respostasCorretas.length; i++) {
        const respostaSelecionada = form.elements['q' + i].value;
        if (respostaSelecionada === respostasCorretas[i - 1]) {
            acertos++;
        }
    }

    if (acertos >= minAcertos) {
        alert(`Parabéns! Você acertou ${acertos} questões.`);

        if (acertos > maiorPontuacao) {
            maiorPontuacao = acertos;
            document.getElementById('maiorPontuacao').textContent = maiorPontuacao;
        }
    } else {
        tentativas++;
        if (tentativas < 3) {
            alert(`Você acertou ${acertos} questões. Tente novamente para alcançar pelo menos ${minAcertos} acertos.`);
        } else {
            alert(`Você não atingiu o mínimo de ${minAcertos} acertos após ${tentativas} tentativas. Continue praticando!`);
        }
    }
}

function mostraLogin(){
    document.querySelector('.login').style.display = 'block';
    document.querySelector('.formulario').style.display = 'none';
}

function mostraCadastro() {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".formulario").style.display = "block";
}



function mostraLoginD(){
    document.querySelector('.loginDoador').style.display = 'block';
    document.querySelector('.formularioDoador').style.display = 'none';
}

function mostraCadastroD() {
    document.querySelector(".loginDoador").style.display = "none";
    document.querySelector(".formularioDoador").style.display = "block";
}


const openModalButtonAluno = document.getElementById('openModalButtonAluno');
const modal = document.getElementById('myModal');
const closeModal = document.querySelector('.close');

openModalButtonAluno.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

const openModalButtonDoador = document.getElementById('openModalButtonDoador');
const modalDoador = document.getElementById('myModalDoador');
const closeModalDoador = modalDoador.querySelector('.close');

openModalButtonDoador.addEventListener('click', () => {
    modalDoador.style.display = 'block';
});

closeModalDoador.addEventListener('click', () => {
    modalDoador.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modalDoador) {
        modalDoador.style.display = 'none';
    }
});

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
        window.location.href = 'cursos.html';
    } else {
      alert('Credenciais inválidas. Verifique seu email e senha.');
    }
  }

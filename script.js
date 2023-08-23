window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    document.querySelector(".parallax-background").style.transform = "translateY(" + offset * 0.5 + "px)";
});

document.addEventListener("DOMContentLoaded", function() {
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    const closeButtons = document.querySelectorAll(".close-button");
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", function() {
            const modalId = trigger.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });
    
    closeButtons.forEach(button => {
        button.addEventListener("click", function() {
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
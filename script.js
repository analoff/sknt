$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

function validateForm() {
    // Validar o campo nome
    const name = document.getElementById('name').value;
    if (name === "") {
        alert("Por favor, preencha seu nome.");
        return false;
    }

    // Validar o campo email
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    // Validar o campo mensagem
    const message = document.getElementById('message').value;
    if (message === "") {
        alert("Por favor, escreva uma mensagem.");
        return false;
    }

    // Se todos os campos estiverem válidos, o formulário pode ser enviado
    alert("Mensagem enviada com sucesso!");
    return true;
}
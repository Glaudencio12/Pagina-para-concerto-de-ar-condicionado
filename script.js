const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
        const resposta = pergunta.nextElementSibling;
        if (resposta.classList.contains('resposta-visivel')) {
            resposta.classList.remove('resposta-visivel');
            resposta.classList.add('resposta');
        } else {
            resposta.classList.remove('resposta');
            resposta.classList.add('resposta-visivel');
        }
    });
});
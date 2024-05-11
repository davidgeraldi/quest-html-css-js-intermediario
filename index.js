const blocosTexto = document.querySelectorAll('.bloco');
const alertaCampoObrigatorio = document.querySelectorAll('.alerta');
const botaoEnviar = document.querySelector('.botao-enviar');

//para cada bloco de input, se o campo estiver com texto aplicar a borda verde
blocosTexto.forEach(bloco => {
    bloco.addEventListener('change', () => {
        if (bloco.value !== "") {
            bloco.classList.add('ativo');
        }
        else {
            bloco.classList.remove('ativo');
        }
    });
});

//agora um eventlistener para o botao enviar com a condicao de que se algum bloco estiver vazio despertar o alerta de campo obrigatorio e a borda ficar vermelho. 
botaoEnviar.addEventListener('click', () => {
    blocosTexto.forEach(bloco => {
        if (bloco.value === "") {
            bloco.classList.add('campo-vazio');
            verificarSeTemTextoNoInput();
        }
    });
});

function verificarSeTemTextoNoInput() {
    for (let i = 0; i < blocosTexto.length; i++) {
        if (blocosTexto[i].classList.contains('campo-vazio')) {
            alertaCampoObrigatorio[i].classList.add('ativado');
        }
    }
}

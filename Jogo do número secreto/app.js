let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0; // Inicializa o contador de tentativas

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value); // Converte o valor para número inteiro
    tentativas++; // Incrementa o número de tentativas

    if (chute === numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);

        // Ativa o botão "Novo Jogo"
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor!');
    } else if (chute < numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é maior!');
    }

    // Limpa o campo de entrada
    document.querySelector('input').value = '';
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); // Gera um novo número secreto
    tentativas = 0; // Reseta o contador de tentativas
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

    // Desativa o botão "Novo Jogo" novamente
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

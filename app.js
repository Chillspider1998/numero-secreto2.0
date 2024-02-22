//pegando elementos do arquivo html com js usando o querySelector
// let titulo = document.querySelector('h1');

//inserindo o texto dentro (innerHTML) da tag h1
// titulo.innerHTML = 'Jogo do Número Secreto';

//fazendo o mesmo com a tag p (paragrafo)
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// criando funcao com parametros
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
mensagemInicial();

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//funcao que exibe as mensagens iniciais 
function mensagemInicial() {
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}


// sempre que queremos usar o elemento 'onclick' passamos nele o nome da nossa funcao que sera feita aqui no js
// no arquivo html o nome da nossa funcao eh 'verificarChute', logo, devemos cria-la aqui com o mesmo nome
function verificarChute() {
    let chute = document.querySelector('input').value; //estamos pegando o valor digitado dentro do input do html
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O numero secreto e menor.');
        }else {
            exibirTexto('p', 'O numero secreto e maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio () {
   return parseInt(Math.random() * 10 + 1);
}

//funcao que limpa o input sempre que o usuario realiza uma tentativa
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
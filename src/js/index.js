const btnAvancarP = document.getElementById("btn-avancar-p");
const btnVoltarP = document.getElementById("btn-voltar-p");
let cartaoAtualP = 0;
const cartoesP = document.querySelectorAll(".personagens-slider .cartao");

btnAvancarP.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtualP === cartoesP.length - 1;
    if (ehUltimoCartao) return;

    esconderCartaoSelecionadoP();

    cartaoAtualP++;
    mostrarCartaoP();
});

btnVoltarP.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtualP === 0;
    if (ehPrimeiroCartao) return;

    esconderCartaoSelecionadoP();

    cartaoAtualP--;
    mostrarCartaoP();
});

function mostrarCartaoP() {
    cartoesP[cartaoAtualP].classList.add("selecionado");
}

function esconderCartaoSelecionadoP() {
    const cartaoSelecionado = document.querySelector(".personagens-slider .selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

//Slider Magatamas

const btnAvancarM = document.getElementById("btn-avancar-m");
const btnVoltarM = document.getElementById("btn-voltar-m");
let cartaoAtualM = 0;
const cartoesM = document.querySelectorAll(".magatamas-slider .cartao");

btnAvancarM.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtualM === cartoesM.length - 1;
    if (ehUltimoCartao) return;

    esconderCartaoSelecionadoM();

    cartaoAtualM++;
    mostrarCartaoM();
});

btnVoltarM.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtualM === 0;
    if (ehPrimeiroCartao) return;

    esconderCartaoSelecionadoM();

    cartaoAtualM--;
    mostrarCartaoM();
});

function mostrarCartaoM() {
    cartoesM[cartaoAtualM].classList.add("selecionado");
}

function esconderCartaoSelecionadoM() {
    const cartaoSelecionado = document.querySelector(".magatamas-slider .selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

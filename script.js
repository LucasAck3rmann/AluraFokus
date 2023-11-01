//tag html
const html = document.querySelector("html");

//botoes
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const botoes = document.querySelectorAll(".app__card-button");
const startPauseBt = document.querySelector("#start-pause");
const iniciarOuPausarBt = document.querySelector("#start-pause span");

//img
const banner = document.querySelector(".app__image");

//titulo
const titulo = document.querySelector(".app__title");

//Musicas
const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("/sons/luna-rise-part-one.mp3");
const audioPlay = new Audio("/sons/play.wav");
const audioPausa = new Audio("/sons/pause.mp3");
const audioTempoFinalizado = new Audio("./sons/beep.mp3");

//temporizador
let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

musica.loop = true;

musicaFocoInput.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

const messages = {
  foco: 'Otimize sua produtividade,<br /><strong class="app__title-strong">mergulhe no que importa.</strong>',
  "descanso-curto":
    'Que tal dar uma respirada?<br /><strong class="app__title-strong">Faça uma pausa curta!</strong>',
  "descanso-longo":
    'Hora de voltar à superfície,<br /><strong class="app__title-strong">Faça uma pausa longa. </strong>',
};

focoBt.addEventListener("click", function () {
  alterarContexto("foco");
  focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
  alterarContexto("descanso-curto");
  curtoBt.classList.add("active");
});

longoBt.addEventListener("click", () => {
  alterarContexto("descanso-longo");
  longoBt.classList.add("active");
});

function alterarContexto(contexto) {
  buttons.forEach((contexto) => {
    contexto.classList.remove("active");
  });
  html.setAttribute("data-contexto", contexto);
  img.setAttribute("src", `/imagens/${contexto}.png`);
  titulo.innerHTML = messages[contexto];
}

const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    //audioTempoFinalizado.play();
    alert("Tempo finalizado!");
    zerar();
    return;
  }
  tempoDecorridoEmSegundos -= 1;
  console.log("Temporizador: " + tempoDecorridoEmSegundos);
};

startPauseBt.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
  if (intervaloId) {
    audioPausa.play();
    zerar();
    return;
  }
  audioPlay.play();
  intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
  clearInterval(intervaloId);
  intervaloId = null;
}

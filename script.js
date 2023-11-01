const html = document.querySelector("html");
const checkboxfoco = document.querySelector(".app__card-button--foco");
const checkboxcurto = document.querySelector(".app__card-button--curto");
const checkboxlongo = document.querySelector(".app__card-button--longo");
const img = document.querySelector(".app__image");
const title = document.querySelector(".app__title");
const buttons = document.querySelectorAll(".app__card-button");
const musicFocoInput = document.querySelector("#alternar-musica");
const music = new Audio("/sons/luna-rise-part-one.mp3");
music.loop = true;
let volume = 1;
let fadeOut;

musicFocoInput.addEventListener("change", () => {
  if (music.paused) {
    music.play();
  } else {
    volume;
    fadeOut = setInterval(function () {
      if (volume > 0) {
        volume -= 0.1;
        music.volume = volume;
      } else {
        clearInterval(fadeOut);
        music.pause();
      }
    }, 100);
  }
});

const messages = {
  foco: 'Otimize sua produtividade,<br /><strong class="app__title-strong">mergulhe no que importa.</strong>',
  "descanso-curto":
    'Que tal dar uma respirada?<br /><strong class="app__title-strong">Faça uma pausa curta!</strong>',
  "descanso-longo":
    'Hora de voltar à superfície,<br /><strong class="app__title-strong">Faça uma pausa longa. </strong>',
};

checkboxfoco.addEventListener("click", () => {
  alterarContexto("foco");
  checkboxfoco.classList.add("active");
});

checkboxcurto.addEventListener("click", () => {
  alterarContexto("descanso-curto");
  checkboxcurto.classList.add("active");
});

checkboxlongo.addEventListener("click", () => {
  alterarContexto("descanso-longo");
  checkboxlongo.classList.add("active");
});

function alterarContexto(contexto) {
  buttons.forEach((contexto) => {
    contexto.classList.remove("active");
  });
  html.setAttribute("data-contexto", contexto);
  img.setAttribute("src", `/imagens/${contexto}.png`);
  title.innerHTML = messages[contexto];
}

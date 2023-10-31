const html = document.querySelector("html");
const checkboxfoco = document.querySelector(".app__card-button--foco");
const checkboxcurto = document.querySelector(".app__card-button--curto");
const checkboxlongo = document.querySelector(".app__card-button--longo");
const img = document.querySelector(".app__image");
const title = document.querySelector(".app__title");

const messages = {
  foco: 'Otimize sua produtividade,<br /><strong class="app__title-strong">mergulhe no que importa.</strong>',
  "descanso-curto":
    'Que tal dar uma respirada?<br /><strong class="app__title-strong">Faça uma pausa curta!</strong>',
  "descanso-longo":
    'Hora de voltar à superfície,<br /><strong class="app__title-strong">Faça uma pausa longa. </strong>',
};

checkboxfoco.addEventListener("click", () => {
  alterarContexto("foco");
});

checkboxcurto.addEventListener("click", () => {
  alterarContexto("descanso-curto");
});

checkboxlongo.addEventListener("click", () => {
  alterarContexto("descanso-longo");
});

function alterarContexto(contexto) {
  html.setAttribute("data-contexto", contexto);
  img.setAttribute("src", `/imagens/${contexto}.png`);
  title.innerHTML = messages[contexto];
}

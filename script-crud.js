const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const inputTarefa = document.querySelector('.app__form-add-task')
const textAreaTarefa = document.querySelector('.app__form-textarea')

const tarefas = [];

function criarElemento(tarefa) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg');
    svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
        <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>`;

    const p = document.createElement('p');
    p.textContent = tarefa.descricao;

    const botao = document.createElement('button')
    const imagemBotao = document.createElement('img')
    imagemBotao.setAttribute = ('src', '/imagens/edit.png')

    botao.append(imagemBotao)
    li.append(svg, p, botao)

}

btnAdicionarTarefa.addEventListener('click', () => {
    inputTarefa.classList.toggle('hidden')
});

inputTarefa.addEventListener('submit', (evento) =>  {
    evento.preventDefault();
    const tarefa = {
        descricao: textAreaTarefa.value
    };
    console.log(tarefa);
    tarefas.push(tarefa); 
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    console.log(tarefas);

});
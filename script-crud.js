const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const inputTarefa = document.querySelector('.app__form-add-task')
const textAreaTarefa = document.querySelector('.app__form-textarea')
const ul = document.querySelector('.app__section-task-list');

const tarefas =  JSON.parse(localStorage.getItem('tarefas')) || [];

function defineTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
};

function criarElemento(tarefa) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg');
    svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
        fill="#01080E"></path>
    </svg>`;

    const p = document.createElement('p');
    p.textContent = tarefa.descricao;
    p.classList.add('app__section-task-list-item-description');

    const botao = document.createElement('button');
    botao.classList.add('app_button-edit');
    const imagemBotao = document.createElement('img');
    imagemBotao.setAttribute('src', 'imagens/edit.png');

    botao.onclick = () => {
        const novoTexto = prompt('Digite o novo texto da tarefa');
        if (!novoTexto) return;
        p.textContent = novoTexto;
        tarefa.descricao = novoTexto;
        defineTarefas();
    };

    botao.append(imagemBotao);
    li.append(svg, p, botao);

    return li;

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
    const elementoTarefa = criarElemento(tarefa);
    ul.append(elementoTarefa);
    defineTarefas()
    console.log(tarefas);
    textAreaTarefa.value = '';
    inputTarefa.classList.add('hidden')

});

tarefas.forEach((tarefa) => {
    const elementoTarefa = criarElemento(tarefa);
    ul.append(elementoTarefa);
});
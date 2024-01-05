const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const inputTarefa = document.querySelector('.app__form-add-task')
const textAreaTarefa = document.querySelector('app__form-textarea')

const tarefas = [];

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
    localStorage.setItem('tarefas', tarefas);
});
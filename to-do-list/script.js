//Função que cria item label

let banco = [
    {'tarefa': 'Estudar JS', 'status': ''},
    {'tarefa': 'Netflix', 'status': 'checked'}
]

//criar o elemento label e dentro cria os elementos input e div
const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `
    document.getElementById('todoList').appendChild(item);
}

//Impede que as tarefas inseriras no array/banco apareça na tela repetitivamente
const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild){
        todoList.removeChild(todoList.lastChild);
    }
}

//aparece as tarefas inceridas no banco/array
const atualizarTela = () => {
    limparTarefas();
    banco.forEach ((item, indice) => criarItem (item.tarefa, item.status, indice));
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    const text = evento.target.value;
    if(tecla === 'Enter'){
        banco.push ({'tarefa': text, 'status': ''});
        atualizarTela();
        evento.target.value = ''
    }
}

const removerItem = (indice) => {
    banco.splice(indice, 1)
    atualizarTela();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    if (elemento.type === 'button'){
        const indice = elemento.dataset.indice;
        removerItem(indice);
    }
}

document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();
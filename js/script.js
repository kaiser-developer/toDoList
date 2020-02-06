let btnAddTarefa = document.getElementById("adicionar-tarefa");
let inputTarefa = document.getElementById("tarefa-digitada");
let divTarefas = document.getElementById("tarefas");

btnAddTarefa.onclick = () => {
    adicionarTarefa();
}

inputTarefa.onkeypress = (e) => {
    if (e.which == 13) {
        adicionarTarefa();
    }
}

const removerTarefa = (tarefa) => {
    tarefa.remove();
}

const adicionarTarefa = () => {
    if (inputTarefa.value == "") {
        alert("INSIRA ALGUM DADO");
        return;
    }

    let novaTarefa = retornarHTML(inputTarefa.value);
    divTarefas.insertAdjacentHTML('beforeend', novaTarefa);
    let objTarefaNova = divTarefas.lastElementChild;
    objTarefaNova.lastElementChild.lastElementChild.onclick = () => removerTarefa(objTarefaNova);
    inputTarefa.value = "";
    qtdTarefas++;
}

retornarHTML = (valor) => {
    return `<div class="col-md-4 divTarefas">
                <div class="card-tarefa">
                    <div class="text-tarefa">
                        ${valor}
                    </div>
                    <div class="botao-tarefa">
                        <img src="images/check.png" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa" width="32">
                    </div>
                </div>
            </div>`
}
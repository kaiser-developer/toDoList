let btnAddTarefa = document.getElementById("adicionar-tarefa");
let inputTarefa = document.getElementById("tarefa-digitada");
let divTarefas = document.getElementById("tarefas");
let qtdTarefas = 0;

btnAddTarefa.onclick = () => {
    adicionarTarefa();
}

inputTarefa.onkeypress = (e) =>{
    if (e.which == 13) {
        adicionarTarefa();
    }
}

removerTarefa = (tarefa) => {
    let id = tarefa.getAttribute("value");
    let div = document.getElementById(id);
    div.remove();
}

adicionarTarefa = () => {
    if (inputTarefa.value == ""){
        alert("INSIRA ALGUM DADO");
        return;
    }
    
    let novaTarefa = `<div class="col-md-4 divTarefas" id="tarefa${qtdTarefas}">
                    <div class="card-tarefa">
                        <div class="text-tarefa">
                            ${inputTarefa.value}
                        </div>
                        <div class="botao-tarefa" value="tarefa${qtdTarefas}" onClick="removerTarefa(this);">
                            <img src="images/check.png" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa" width="32">
                        </div>
                    </div>
                </div>`
    divTarefas.innerHTML += novaTarefa;
    inputTarefa.value = "";
    qtdTarefas++;
}
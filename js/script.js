let btnAddTarefa = document.getElementById("adicionar-tarefa");
let btnRmvTarefa = document.getElementById("botao-tarefa");
let inputTarefa = document.getElementById("tarefa-digitada");
let novaTarefa;
let divTarefas = document.getElementById("tarefas");

btnAddTarefa.onclick = () => {
    if (inputTarefa.value == ""){
        alert("INSIRA ALGUM DADO");
        return;
    }
    novaTarefa = `<div class="col-md-4">
                    <div class="card-tarefa">
                        <div class="text-tarefa">
                            ${inputTarefa.value}
                        </div>
                        <div class="botao-tarefa">
                            <img src="images/check.png" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa" width="32">
                        </div>
                    </div>
                </div>`
    divTarefas.innerHTML += novaTarefa;
    inputTarefa.value = "";
}
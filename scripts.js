const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const lista = document.querySelector('.list-task')

let listaDeItens = []



function novaTarefa() {
    listaDeItens.push({
        tarefa: input.value,
        concluida: false,
    })

    input.value = ''

    mostrarTarefas()

}

function mostrarTarefas() {

    let novaLi = ''

    listaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `
    
    
        <li class="task ${item.concluida && "done"}">
    <img src="./img/checked.png" alt="checked" onclick="concluirTarefa(${posicao})" >
    <p>${item.tarefa}</p>
   <img src="./img/trash.png" alt="lixo" onclick="deletarItem(${posicao})">
   </li>`
    })

    lista.innerHTML = novaLi



    localStorage.setItem('lista', JSON.stringify(listaDeItens))
}

function concluirTarefa(posicao) {
    listaDeItens[posicao].concluida = !listaDeItens[posicao].concluida

    mostrarTarefas()

}

function deletarItem(posicao) {
    listaDeItens.splice(posicao, 1)
    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        listaDeItens = JSON.parse(tarefasDoLocalStorage)
    }


    mostrarTarefas()

}

recarregarTarefas()

button.addEventListener('click', novaTarefa)
const form = document.querySelector("#form-tarefa");
const campoTarefa = document.querySelector("#tarefa");
const listaTarefas = document.querySelector("#lista-tarefas");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const texto = campoTarefa.value.trim();
    if (texto === "") {
        return;
    }

    const item = document.createElement("li");
    item.textContent = texto;
    listaTarefas.appendChild(item);
    campoTarefa.value = "";
    campoTarefa.focus();
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js")
        .then(() => console.log("Service Worker registrado"))
        .catch(erro => console.error("Erro no SW:", erro));
}

function atualizarStatus() {
    const status = document.querySelector("#status");
    if (!status) {
        return;
    }

    if (navigator.onLine) {
        status.textContent = "Online";
        status.className = "online";
    } else {
        status.textContent = "Offline";
        status.className = "offline";
    }
}

window.addEventListener("online", atualizarStatus);
window.addEventListener("offline", atualizarStatus);
atualizarStatus();
const btnAdd = document.querySelector(".btn-adiciona");

function adicionaLI() {
  let minhaLista = document.getElementsByTagName("LI");
  for (let i = 0; i < minhaLista.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    minhaLista[i].appendChild(span);
  }
}

function btnFechar() {
  let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.remove();
      salvarDadosStorage();
    };
  }
}

function criaLista() {
  let li = document.createElement("li");
  let inputValue = document.querySelector(".pega-valor").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("você não digitou nada favor rever!");
  } else {
    document.querySelector(".criador-de-li").appendChild(li);
  }
  document.querySelector(".pega-valor").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  btnFechar();
}

function salvarDadosStorage() {
  const liTarefas = document.querySelectorAll("LI");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("\u00D7", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJson = JSON.stringify(listaDeTarefas);
  localStorage.setItem("lista", tarefasJson);
}

function adicionaListaSalvas() {
  const listas = localStorage.getItem("lista");
  const recebeLista = JSON.parse(listas);

  for (let lista of recebeLista) {
    console.log(lista);
  }
}
adicionaListaSalvas();

let lista = document.querySelector("ul");
lista.addEventListener(
  "click",
  function (evento) {
    if (evento.target.tagName === "LI") {
      evento.target.classList.toggle("checked");
    }
  },
  false
);

btnAdd.addEventListener("click", () => {
  salvarDadosStorage();
  criaLista();
});

document
  .querySelector(".pega-valor")
  .addEventListener("keypress", function (evento) {
    if (evento.keyCode === 13) {
      salvarDadosStorage();
      criaLista();
    }
  });

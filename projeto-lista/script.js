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

//O método abaixo somente é utilizado para criar um item na <ul></ul> do html
function listarItem(item){
  let li  = document.createElement("li");
  let t   = document.createTextNode(item);
  li.appendChild(t);  
  document.querySelector(".criador-de-li").appendChild(li);
  let span= document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  btnFechar();
}

//Agora esse método é utilizado para apenas criar um item na lista <ul></ul> pegando os dados no formulário
function criaLista() {
  let inputValue = document.querySelector(".pega-valor").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("você não digitou nada favor rever!");
  }
  document.querySelector(".pega-valor").value = "";
  /*
  O mesmo método que é utilizado para listar os itens na <ul></ul> porém nesmo momento ele está 
  inserindo apenas o item digitado no formulátio
  */
  listarItem(inputValue);

  //Pega os itens na <ul></ul> e armazena no LocalStorage
  salvarDadosStorage();

  //adicionaListaSalvas();
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  btnFechar();
  salvarDadosStorage();
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

function adicionaListaSalvas() { //erro aquui na saida
  const listas = localStorage.getItem("lista");
  let recebeLista = JSON.parse(listas);

  for (let lista of recebeLista) {
    console.log(lista);
    
  }

}
adicionaListaSalvas();

function adicionaListaSalvas() { //erro aquui na saida
  console.log('adicionaListaSalvas');
  const listas = localStorage.getItem("lista");
  let recebeLista = JSON.parse(listas);
document.querySelector(".criador-de-li").innerHTML = "";
  for (let lista of recebeLista) {
    //criaLista(lista);
    listarItem(lista);
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
  criaLista();
});

document
  .querySelector(".pega-valor")
  .addEventListener("keypress", function (evento) {
    if (evento.keyCode === 13) {
      criaLista();
    }
  });

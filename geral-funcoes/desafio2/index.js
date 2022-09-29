"use strict";

//pega as Classes dos Seletores
const limpar = document.querySelector(".limpar");
const enviaData = document.querySelector(".enviar");

//objeto data
const data = new Date();
let diaDaSemana = 1; //caso queira testar com valores manual
//let diaDaSemana = data.getDay(); // caso queira pegar o valor automático.

//faz a pagina recarregar
limpar.addEventListener("click", () => {
  window.location.reload();
});

//recebe os dados e imprime na tela
enviaData.addEventListener("click", () => {
  const resultado = document.querySelector(".resultado");

  switch (diaDaSemana) {
    case 0:
      return (resultado.innerHTML = `Domingo ${data}`);
    case 1:
      return (resultado.innerHTML = `Segunda-feira ${data}`);
    case 2:
      return (resultado.innerHTML = `Terça-feira ${data}`);
    case 3:
      return (resultado.innerHTML = `Quarta-feira ${data}`);
    case 4:
      return (resultado.innerHTML = `Quinta-feira ${data}`);
    case 5:
      return (resultado.innerHTML = `Sexta-feira ${data}`);
    case 6:
      return (resultado.innerHTML = `Sábado ${data}`);
    default:
      return (resultado.innerHTML =
        'Dia Inexistente! <p style="font-size:50px">&#128540;</p>');
  }
});

/*
const resultado = document.querySelector(".resultado");
const fullDate = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
};
enviaData.addEventListener("click", () => {
    resultado.innerHTML = data.toLocaleDateString('pt-BR', fullDate)
});
*/



"use strict";

//função construtora.
function Calculadora() {
  this.display = document.querySelector(".display");

  this.capturaClique = () => {
    document.addEventListener("click", (event) => {
      const elemento = event.target;
      if (elemento.classList.contains("btn-num")) this.addNumDisplay(elemento);
      if (elemento.classList.contains("btn-AC")) this.clear(elemento);
      if (elemento.classList.contains("btn-back")) this.del(elemento);
      if (elemento.classList.contains("btn-bg-roxo")) this.sun(elemento);
    });
  };

  this.addNumDisplay = (elemento) => (this.display.value += elemento.innerText);
  this.clear = () => (this.display.value = "");
  this.del = () => (this.display.value = this.display.value.slice(0, -1));

  this.sun = () => {
    try {
        const conta = eval(this.display.value);

        if(!conta) {
            alert('conta inválida.');
            return
        }

        this.display.value = conta;
    } catch (error) {
        return
    }
  } 

  this.inicia = () => this.capturaClique();
}

const calculadora = new Calculadora();
calculadora.inicia();

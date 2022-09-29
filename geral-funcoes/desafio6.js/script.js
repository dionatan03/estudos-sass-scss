"use strict"

//função fabrica.
function criaCalculadora () {
    return {
        //atributos
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-AC'),

        //metados
        inicia() {
            this.clickBtn();
        },

        btnIgual() {
            let igual = this.display.value;

            try {
                igual = eval(igual);

                if(!igual) {
                    alert ('realização da conta inválida');
                    return;
                }

                this.display.value = String(igual);
            } catch (e) {
                return;
            }
            console.log(igual);
        },

        clearDisplay() {
            this.display.value = '';
        },

        removeUM(){
            this.display.value = this.display.value.slice(0, -1);
        },

        clickBtn() {
            document.addEventListener('click', (e) => {
                const elemento = e.target;

                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText)
                }

                if (elemento.classList.contains('btn-AC')) {
                    this.clearDisplay();
                }

                if (elemento.classList.contains('btn-back')) {
                    this.removeUM();
                }

                if (elemento.classList.contains('btn-bg-roxo')) {
                    this.btnIgual();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
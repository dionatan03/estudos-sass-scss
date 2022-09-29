class Dados {
    constructor(numero) {
        numero = document.querySelector('.res').value;
        this.num = numero;
        this.numfix = 0.5;
    }

    get resultado() {
        return Number(Math.pow(this.num, this.numfix).toFixed(11));
    }
}

const rec = document.querySelector('.rec');

rec.addEventListener("click", function() {
    let valor = Number(document.querySelector('.res').value);
    let res1 = document.querySelector(".numero");
    let res2 = document.querySelector(".raiz");
    let res3 = document.querySelector(".int");
    let res4 = document.querySelector(".nan");
    let res5 = document.querySelector(".num-min");
    let res6 = document.querySelector(".num-max");
    let res7 = document.querySelector(".num-com-dec");
    test1 = new Dados(this.num);
    console.log(test1.resultado);
    res1.innerHTML = valor;
    res2.innerHTML = test1.resultado;
    res3.innerHTML = Number.isInteger(valor);
    res4.innerHTML = Number.isNaN(valor);
    res5.innerHTML = Math.floor(valor);
    res6.innerHTML = Math.ceil(valor);
    res7.innerHTML = valor.toFixed(2);
});
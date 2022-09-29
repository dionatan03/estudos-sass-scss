"use strict";

const time = document.querySelector(".time");
const iniciar = document.querySelector(".start");
const pausar = document.querySelector(".pause");
const clear = document.querySelector(".clear");
let segundos = 0;
let timeRun;

function timeSeconds(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    timeZone: "UTC",
    hour12: false,
  });
}

function startTime() {
  timeRun = setInterval(() => {
    segundos++;
    time.innerHTML = timeSeconds(segundos);
  }, 1000);
  console.log(timeSeconds(segundos));
}

iniciar.addEventListener("click", () => {
    clearInterval(timeRun);
    startTime();
});

pausar.addEventListener("click", () => {
    clearInterval(timeRun);
});

clear.addEventListener("click", () => {
    clearInterval(timeRun);
    time.innerHTML = '00:00:00'
    segundos = 0;
});

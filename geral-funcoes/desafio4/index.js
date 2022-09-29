"use strict";

let entrar = document.querySelector(".btnE");
let cadastro = document.querySelector(".btnC");
let msg = document.querySelector(".msg");

const limite = 3;
let tentativa = 0;

entrar.addEventListener("click", () => {
  const login = document.querySelector(".login").value;
  const senha = document.querySelector(".senha").value;

  while (tentativa <= 3) {
    if (login === "dhiol123" && senha === "dhiol123") {
      window.open("https://www.mozilla.org/", "mozillaTab");
      document.querySelector(".login").value = "";
      document.querySelector(".senha").value = "";
      msg.style.color = "green";
      msg.style.fontSize = "12px";
      return (msg.innerHTML = `Login realizado com sucesso.`);
    } else {
      if (tentativa < limite) {
        return (msg.innerHTML =
          "você atigiu a quantidade max permitida. " +
          tentativa +
          " tentativas usadas");
      } else {
        msg.style.color = "red";
        msg.style.fontSize = "12px";
        let link =
          "<a href='www.google.com.br'>clique aqui se deseja recuperar</a>";
        msg.innerHTML = `Os dados não conferem favor rever!. ${link}`;
        document.querySelector(".login").value = "";
        document.querySelector(".senha").value = "";
      }
    }

    tentativa++;
  }

  //let campo = `login: ${login}\nsenha: ${senha}`;
  const limpaMsg = setTimeout(limpaTempoMsg, 5000);

  function limpaTempoMsg() {
    msg.innerHTML = "";
  }

  function vaiLimparMsg() {
    clearTimeout(limpaMsg);
  }
});

cadastro.addEventListener("click", () => {});

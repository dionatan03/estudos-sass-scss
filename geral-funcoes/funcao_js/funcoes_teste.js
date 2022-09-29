(conversoCelsius = (celsius) => {
  celsius = 37;
  let conversor = celsius * 1.8 + 32;
  if (!conversor) {
    console.log("Favor digitar apenas números.");
  } else {
    console.log("fahrenheit:", conversor.toFixed(2));
  }
})();

console.log("-----------------------------");

(conversoFahrenheit = (fahrenheit) => {
  fahrenheit = 98;
  conversor = ((fahrenheit - 32) * 5) / 9;
  if (!conversor) {
    console.log("Favor digitar apenas números.");
  } else {
    console.log("celsius:", conversor.toFixed(2));
  }
})();

console.log("-----------------------------");
function meuImc(peso, altura) {
  const imc = peso / (altura * altura);

  switch (true) {
    case imc <= 17:
      console.log("Muito abaixo do peso.");
      break;
    case imc > 17 && imc <= 18.5:
      console.log("Abaixo do peso.");
      break;
    case imc > 18.5 && imc <= 24.9:
      console.log("peso Normal.");
      break;
    case imc > 25 && imc <= 29.9:
      console.log("Acima do peso.");
      break;
    case imc > 30 && imc <= 34.9:
      console.log("Obesidade I.");
      break;
    case imc > 35 && imc <= 39.9:
      console.log("Obesidade II (severa).");
      break;
    case imc > 40:
      console.log("Obesidade III (mórbida).");
      break;
    default:
      console.log("valor desconhecido.");
  }
}

meuImc(60, 1.7);

console.log("-----------------------------");

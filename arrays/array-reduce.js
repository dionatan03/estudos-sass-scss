const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valorAtual, indice, array) => {
  if (valorAtual % 2 === 0) acumulador.push(valorAtual);
  return acumulador;
}, []);

//console.log(total);

const pessoas = [
  { nome: "Dionatan", idade: 29 },
  { nome: "Paloma", idade: 26 },
  { nome: "Nena", idade: 53 },
  { nome: "Ana clara", idade: 6 },
  { nome: "Maite", idade: 1.7 },
  { nome: "Andressa", idade: 27 },
  { nome: "zezao", idade: 54 },
];

const pessoa = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(pessoa);

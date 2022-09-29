const pessoa = {
  nome: "Dionatan",
  idade: 26,
};

let arrays = [
  {valor: "um"},
  {valor: "dois"},
  {valor: "tres"},
  {valor: "quatro"},
  {valor: "cinco"},
  {valor: "seis"},
  {valor: "sete"},
  {valor: "oito"},
  {valor: "nove"},
  {valor: "dez"}
];

pessoa.getDataNascimento = function () {
  let data = new Date();
  return data.getFullYear() - this.idade;
};

console.log(pessoa.getDataNascimento());

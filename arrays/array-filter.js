//filter sempre vai restorna um array, com a mesma qtd de elementos ou menos.
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//function callbackFulter(valor) {
//if (valor > 10) {
//return true;
//} else {
//return false;
//}
//return valor > 10; // mesma coisa que acima. quando sabemos que precisamos do verdadeiro.
//}

//const novo = numeros.filter((valor) => valor > 10);
//console.log(novo);

const pessoas = [
  { nome: "Dionatan", idade: 29 },
  { nome: "paloma", idade: 26 },
  { nome: "nena", idade: 53 },
  { nome: "zezao", idade: 55 },
  { nome: "andressa", idade: 27 },
  { nome: "ana clara", idade: 6 },
  { nome: "maite", idade: 1.7 },
];

//const novo = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith("e"));
//console.log(novo);

const alunos = [

  { nome: "Dionatan",  media: 3   },
  { nome: "paloma",    media: 7.5 },
  { nome: "nena",      media: 3   },
  { nome: "zezao",     media: 2   },
  { nome: "andressa",  media: 3   },
  { nome: "ana clara", media: 10   },
  { nome: "maite",     media: 8.5 },

];

const aprovados = alunos.filter((alunos) => alunos.media >= 7);
console.log(aprovados);

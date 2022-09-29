const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map((valor) => valor * 2);

//console.log('novo:', numerosDobrados);
//console.log('atual:', numeros);

const pessoas = [
  { nome: "Dionatan", idade: 29 },
  { nome: "Paloma", idade: 26 },
  { nome: "Nena", idade: 53 },
  { nome: "Ana clara", idade: 6 },
  { nome: "Maite", idade: 1.7 },
  { nome: "Andressa", idade: 27 },
  { nome: "zezao", idade: 54 },
];

//const newPessoa = pessoas.map((objPessoa) =>
//objPessoa.idade >= 18
//? `${objPessoa.nome} é de maior`
//: `${objPessoa.nome} é de menor`
//);


const newPessoa = pessoas.map((objPessoa) => ({ nome: objPessoa.nome }));
//console.log(newPessoa);

const id = pessoas.map((objPessoa, id) => {
  objPessoa.id = Math.floor(Math.random() * 100);
  return objPessoa;
});

console.log(id);

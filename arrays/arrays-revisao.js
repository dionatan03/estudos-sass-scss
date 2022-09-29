//const nomes = ['dionatan','nena','paloma'];
//nomes.push('camaleon');
//nomes.unshift('leon');
//nomes.push('cat');
//nomes.unshift('dog');
//console.log(nomes)

//const novo = nomes.slice(1, -1); //remove as pontas de cada indice do array.
//console.log(novo);

//const nome = 'dionatan fernandes ananias';
//const nomes = nome.split(' '); // separa por espaços ou qualquer outra coisa.
//const nome2 = nomes.join(' '); //coloca qualquer coisa que queira.
//console.log(nome2);

let numbers = [
    30, 1, 31, 2, 3, 4, 76, 5, 6, 7, 88, 49, 910, 121, 112, 13, 154, 135, 116,
    197,
  ];
  numbers.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  
  console.log(numbers);
  
  let animais = [
    "gato",
    "cachorro",
    "foca",
    "urubu",
    "rato",
    "avestrus",
    "camelo",
    "cavalo",
    "boi",
    "vaca",
  ];
  
  animais.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
  });
  console.log(animais);





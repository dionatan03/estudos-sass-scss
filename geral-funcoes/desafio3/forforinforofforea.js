"use strict"
/**
const alunos = ['dionatan', 'andressa', 'nena', 'paloma', 'pamela', 'phillip', 'ana clara', 'maite', 'stefany'];
for (let nomes in alunos) {
    console.log(alunos[nomes]);
} 
*/

const dadosPessoas = [
    {
        nome: 'DIONATAN',
        idade: 29,
        cidade: 'FPOLIS' 
    },
    {
        nome: 'PALOMA',
        idade: 26,
        cidade: 'FPOLIS' 
    },
    {
        nome: 'ANA CLARA',
        idade: 5,
        cidade: 'FPOLIS' 
    },
    {
        nome: 'MAITE',
        idade: 1,
        cidade: 'FPOLIS' 
    },
    {
        nome: 'NENA',
        idade: 54,
        cidade: 'FPOLIS' 
    },
];

for (let nomes in dadosPessoas) {
    if (dadosPessoas[nomes].idade >= 18) {
        console.log(`Nome: ${dadosPessoas[nomes].nome} Sua idade é: ${dadosPessoas[nomes].idade} - maior de idade.`);
    } else {
        console.log(`Nome: ${dadosPessoas[nomes].nome} Sua idade é: ${dadosPessoas[nomes].idade} - menor de idade.`);
    }
}

console.log('-----------------------------------------------------------');

let nome = 'Dionatan';
for (let nome of dadosPessoas) {
    console.log(nome);
}

console.log('-----------------------------------------------------------');

dadosPessoas.forEach((nome, i) => {
    console.log(nome, i);
});
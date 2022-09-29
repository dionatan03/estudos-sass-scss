function retornaFuncao() {
    const nome = 'Dionatan';
    return () => {
        return nome;
    }
}

const funcao = retornaFuncao();
console.dir(funcao());
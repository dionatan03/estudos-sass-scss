// arguments que sustenta todos os argumentos enviados;
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    //console.log(total);
}

funcao(32, 32, 64, 128, 256, 512);



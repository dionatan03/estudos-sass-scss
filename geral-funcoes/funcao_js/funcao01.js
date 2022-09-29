const falaOi = function () {
    console.log('Oiiee...');
}

const comprimenta = function () {
    console.log('sejá muito bem vindo(a) funcao2')
}



const obj = {
    arrow(funcao1, funcao2) {
        funcao1();    
        funcao2();   
    }
}

obj.arrow(falaOi, comprimenta);
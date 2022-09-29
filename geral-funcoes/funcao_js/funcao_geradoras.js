function* geradora1() {
    yield 'Dionatan';
    yield 'Paloma';
    yield 'Nena';
}

//const g1 = geradora1();
//console.log(g1.next().value);
//console.log(g1.next().value);
//console.log(g1.next().value);

function* contador() {
    let num = 0;
    while(true) {
        yield num;
        num++;
    }
}

//const numerosInfinitos = contador();
//console.log(numerosInfinitos.next().value);
//console.log(numerosInfinitos.next().value);
//console.log(numerosInfinitos.next().value);

function* gerador2() {
    yield 0;
    yield 1;
    yield 2;
}

function* gerador3() {
    yield* gerador2();
    yield 3;
    yield 4;
    yield 5;
}

//const g3 = gerador3();
//for (let valor of g3) {
    //console.log('valor: ', valor);
    
//}

function* gerador4() {
    yield function() {
        console.log('vim do yield 1');
    };

    //return não deixa continuar o gerador.

    yield function() {
        console.log('vim do yield 2');
    };

    yield function() {
        console.log('vim do yield 3');
    };

}

const g4 = gerador4();
const func1 = g4.next().value;
const func2 = g4.next().value;
const func3 = g4.next().value;

func1();
func2();
func3();

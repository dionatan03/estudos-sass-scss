const nomes = ['dionatan','nena','paloma','zezao','andressa','ana clara', 'maite'];
//splice(indice, delete, elem1, elem2, ele3);

const removidos = nomes.splice(-2, 2, 'filhoA', 'filhoB', 'filhoC');
console.log('foi removido: ', removidos, 'total de: ', removidos.length);
console.log('lista nomes: ', nomes, 'quantidade: ', nomes.length);


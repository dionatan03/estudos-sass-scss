function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: false, //se pode ser alterada
    configurable: false, // configuravél não pode apagar ou reconfigurar a variavel
  });
}

const p1 = new Produto("camisa verde", 30.95, 5);
console.log(p1);

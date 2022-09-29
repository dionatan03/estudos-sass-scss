function criaPessoa(nome, sobrenome, peso, altura) {
  return {
    nome,
    sobrenome,
    fala(assunto) {
      return `${nome} está ${assunto}. mais seu IMC é ${this.imc} `;
    },
    peso: peso,
    altura: altura,
    //getter's
    get imc() {
        const meuImc = this.peso / (this.altura ** 2);
        return meuImc.toFixed(2);
    }
  };
}

const p1 = criaPessoa("dionatan", "fernandes", 80, 1.72);
console.log(p1.fala("querendo pedir uma lazanha."));

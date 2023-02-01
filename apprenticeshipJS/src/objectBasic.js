//objeto, agrupar inf -> {}

const rich = {
  destin: "Vinicius",
  bank: 9000000,
  idade: 22,
};

function makeRich(name, bank, years) {
  //função que recebe argumentos para colocar nos parametros ();
  return {
    name: name,
    bank: bank,
    years: years,
  };
}

const rich1 = makeRich("Vinicius Santiago", "1000000000", 30); //criei uma variável e enviei os ergumentos para a função;

//quando uma função está dentro de um obj, ela é chamada de método:
const eu = {
  name: "Vinicius",
  bank: 1000,
  idade: 19,

  apresentacao() {
    console.log(`Me chamo ${this.name}, e tenho ${this.idade}`); //esse objeto
  },

  maisIdade() {
    this.idade++; //cada vez que for chamado, aumenta a idade
  },
};

eu.apresentacao();//chamei o metodo
eu.maisIdade();
eu.apresentacao();
eu.maisIdade();

console.log(rich.bank);

console.log(rich1.name); //chamei o objeto;
console.log(rich1.bank);
console.log(rich1.years);

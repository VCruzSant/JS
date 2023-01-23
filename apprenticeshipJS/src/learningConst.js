const nome1 = "Vini";

const firstN = 10;
const secondN = 20;
const result = firstN * secondN;
const resultDouble = result * 2;

//não posso chamar a variável dnv para alterar ela

let resultAnother = resultDouble * 3;
resultAnother = resultAnother + 5;

//com let eu posso

console.log(nome1);

console.log(resultAnother);
console.log(typeof firstN);


//exercício:

const nome = 'Vinicius';
const sobrenome = 'Santiago';
let idade = 19;
let peso = 60;
let tamanho = 1.85;
let IMC;
IMC = peso / (tamanho * tamanho);

console.log(nome, 'tem', idade, 'anos.');
console.log(`ele mede ${tamanho}, pesa ${peso}kg e tem o IMC de ${IMC}.`); //template string

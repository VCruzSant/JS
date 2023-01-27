//numeradas   0123456789101112
let string = "Uma \"string\""; // para colocar "" dentro de "";
let text = "três pratos de trigo para três tigres tristes";

console.log(string.charAt(5)); //colocar entre [] com o número do caracter, vai chamar somente ele. ou usar charAt;

console.log(string.concat(' ', 'facil,', ' ', 'não')) //tipo template string -> +, adiciona texto;
console.log('facil, não é difícil ' +string); // concatenação;
console.log(`facil não é dificl ${string}`); //template string;

console.log(string.indexOf('string')); //ele indica onde começa a palavra selecionada entre ('') no texto, mostra a numeração;
console.log(string.lastIndexOf('a', 2)); // procure a letra "a" a partir do index 2 de trás para frente.
console.log(string.search(/[a-z]/))//procura aonde começa as letras minúsculas;
console.log(string.replace('Uma', 'várias')); //troque a palavra "Uma", pela palavra "várias";

console.log(text.replace(/t/g, '#')); //troque todas as letras 't' por '#';
console.log(text.length); //quantos caracter tem meu texto;
console.log(text.slice(5, 11)); //pegue o que está no index 5 até o que está no 11;
console.log(text.slice(-8))//de trás pra frente, mostre a palavra
console.log(text.slice(-8, -2)) //de trás pra frente, mostre a palavra e elimine 2 caracteres
console.log(text.split(' ')); //divida pelo o que estpa entre ();
console.log(text.toUpperCase()); // transforme em letra maiúscula 
console.log(text.toLowerCase()); //ransforme em letra minúscula 


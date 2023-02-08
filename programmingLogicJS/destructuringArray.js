let a = "A";
let b = "B";
let c = "C";

[a, b, c] = [1, 2, 3]; //  Atribuição via desestruturação

console.log(a, b, c);

const numbers = [1, 2, 3, 4, 5];
const [firstNumber, secondNunber, ...rest] = numbers;

console.log(firstNumber, secondNunber);
console.log(rest);

const numberO = [
  [1, 2, 3], //indice 0
  [4, 5, 6], //indice 1
];

const [listOne, listTwo] = numberO;
console.log(numberO[1][2]);
console.log(listTwo);

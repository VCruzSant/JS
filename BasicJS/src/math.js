let redond1 = 9.331;
let redond2 = 9.742;
let redond3 = 99.67;
let raiz = 49;
const aleatorio = Math.random() * (20 - 10) + 10; //número aleatorio entre 20 e 10;

redond1 = Math.floor(redond1); //arredondamento do número para baixo;
redond2 = Math.ceil(redond2); //arredondamento do número para cima;
redond3 = Math.round(redond3); //arredondamento para valor mais próximo

console.log(redond1);

console.log(redond2);

console.log(redond3);
console.log(Number.isInteger(redond3));

console.log(Math.max(1, 2, 3, 252626546, -12, -10, 12524362));
console.log(Math.min(1, 2, 3, 252626546, -12, -10, 12524362));

console.log(aleatorio);

console.log(Math.PI); //múmero de PI

console.log(Math.pow(2, 2)); // 2 elevado a 2;

console.log(raiz ** (1 / 2)); //descobrir a raiz

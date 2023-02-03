let num1 = 1;
let num2 = 2;
let binario = 100;
let inteiro = 15.6745334576;
let temp = num1 * "oi";
let protocolo = 2305260318;

let quebr = 0.7;
let ado = 0.1;

quebr += ado;
quebr += ado;
quebr += ado;

console.log(quebr + ado);

quebr = parseFloat(quebr.toFixed(2)); //para deixar inteiro e deixar na memórias como inteiro

console.log(quebr);
console.log(Number.isInteger(quebr)); // aqui ele fala se está funcionando o número como inteiro ou não;

console.log(num1.toString() + num2); //converte para string e assim é possivel fazer a concatenação, também é possivel converte-lá para sempre -> num1 = num1.toString();

console.log(binario.toString(2)); //colocando o 2 entre o parenteses, mostra a representação binaria;

console.log(inteiro.toFixed(2)); //colocar entre o parenteses quantas casas decimais eu desejo ver;

console.log(Number.isInteger(inteiro)); //para saber se a variável contém um numero inteiro ou não, retornando true ou false;

console.log(Number.isNaN(temp)); //retorna se é um NaN ->not a number

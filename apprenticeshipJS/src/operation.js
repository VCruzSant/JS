/**
 *      aritiméticos
 * + ->adição/concatenação(união)
 * - / * 
 * ** potenciação
 * ++ incremento
 * --decremento
 */

let num1 = 5;
let num2 = 10;
let num3 ='5';
let convert = parseInt('10.5'); //converte da string para número mas só funciona com números inteiros
let numb = Number('10.5');
let num4 = 10;
++num4; //11
++num4; //12
++num4; //13
let contador = 1;
let cont = 2;
cont += 2; // operadores de atribuição 

console.log(num1 + num2);
console.log(num2 + num3); //concatenação/união porque é string

console.log(num1 - num2);

console.log(num2 / num1);

console.log(num1 * num2);
console.log(num1 ** num2);

console.log(num4);

console.log(++contador); //aqui ele faz a conta e ja mostra o valor

console.log(contador++); //ele fez a conta mas não mostrou o valor poque o "+" está na frente da variável 
console.log(contador) // aqui ele ja mostra o resultad

console.log(num1 + convert); //convertido da string para número

console.log(num1 + numb); //convertido da string para número, porém com a casa decimal entendida

/* 
    Operadores de Comparação:
        > maior que
        >= maior ou igual 
        < menor
        <=menor ou igual
        == igualdade (valor, não usar) *******
        === igualdade restrita
        != diferente (valor, não usar) *******
        !== diferente restrito
*/
const espressao = 10 > 5;
const comp = 5>=5;

const menor = 4<6;
const menorIg = 4<=3;

const val1 = 5;
const val2 = 6;

const igu = 10;
const al = '10';

const dif = 20;
const erent = "20";

console.log(espressao); //retorna boolean
console.log(comp);

console.log(menor);
console.log(menorIg);

console.log(val1>val2);

console.log(igu == al); //ele retorna true mesmo sendo diferente, um é number e o outro é string
console.log(igu === al); //agora sim, ele retorna false, pq são diferentes;

console.log(dif !== erent); //mesma coisa do exemplo acima;

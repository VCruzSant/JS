/*
console.log("0");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
*/

/*criar váriavel e atribuir um valor, definir um ponto de parada e depois incrementar -> i++ acrescenta de um em um., poderia ser i+= 10, ir de 10 em 10
for (let i = 0; i <=5; i++) {
    const pair = i % 2 === 0 ? 'pair' : 'odd'; //i pode ser dividido por 2 ?
    console.log(`Number ${i} is pair? ${pair}`);
}

posso tambpem começar no 5 e ir até o zero -> let i = 5; i>=0;
*/
const template = ["Blue", "Green", "Red"];

for (let i = 0; i < template.length; i++) { // seleciona todos os indices;
  console.log(`Índice ${i}:`, template[i]);
}

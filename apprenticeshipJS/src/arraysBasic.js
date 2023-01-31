//são coleções/variações, um objeto indexado-> [];
//             0   1   2        3
const value = [80, 90, 100]; // 110

/*adicionando elementos
value[value.length] = 110;
value[value.length] = 120;
value[value.length] = 130;
*/

value.push(110); //adicionar elementos do jeito correto, adiciona no fim;
value.unshift(70); //adiciona no começo;

let removidoEnd = value.pop();//remove o que está no ultimo indice;
let removidoInit = value.shift();//remove o que está no primeiro indice;


console.log(value instanceof Array); //minha variavel aluno, é uma instancia de array?
console.log(value);//selecionar todo o array;
console.log(value[2]);//selecionando um indice do array;
console.log(removidoEnd);//eu salvei o indice que foi removido numa variavel e posso mostrar qual foi removido;
console.log(removidoInit); //eu salvei o indice que foi removido numa variavel e posso mostrar qual foi removido;
console.log(value.slice(0, -2)) //seleciona todos os elementos, menos o ultimo indice, se fosse -2, seria removido os dois ultimos;
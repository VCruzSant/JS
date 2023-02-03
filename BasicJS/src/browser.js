//window. ->alert (errp), confirm(deseja mesmo excluir?),

alert("erro");

/*window.confirm('deseja mesmo excluir?');
true (confirmado) or false(cancelar) -->retornado*/

/*window.prompt('seu nome');
'Vinicius Santiago' --> retornado*/

const confirma = confirm("deseja realmente apagar?"); // atribui a função confirm, do obj window, dentro da variável
/*
console.log(confirma) --> consulta o que foi declarado na variável confirma
true(caso o usuário aceite), false(caso o usuário cancele) -->retorna true
*/

//numb = Number(numb); -> quando for solicitado o número tem que fazer essa converssão;

//exercício:
let value1 = prompt("seu número");
let value2 = prompt("seu outro número");

value1 = Number(value1);
value2 = Number(value2);

const result = value1 + value2;
alert(`o resultado da sua conta foi: ${result}`);

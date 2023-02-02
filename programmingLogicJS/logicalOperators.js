/*
    Operadores lógicos
        && -> AND -> todas as expressões precisam ser verdadeiras para retornar true;
        || -> OR -> se uma tiver true, vai retornar true mesmo a outra sendo false
        ! -> NOT
*/
console.log(false && false);
console.log(true || false);
console.log(!false); //nega false, retorna true;
console.log(!true); //nega true, retorna false;

//Um Breve exemplo fora do mundo real:

const user = "Vini"; //veio de um form imaginário;
const pass = "123456"; //veio de um form imaginário;

const vaiLogar = user === "Vini" && pass === "123456";
console.log(vaiLogar);

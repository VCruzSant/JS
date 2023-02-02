/*
    && -> false && true -> false retorna o "valor mesmo";
    || -> false || true -> retonra o valor verdadeiro;

    FALSY
        false
        0
        "" '' `` (strings vazias)
        null/undefined
        NaN
    
*/

function oi () {
    return "Oi"
}

let execute;

const corUser = null;
const corDefault = corUser|| "preto"; //se o usuario não escolher nada, vai ser preto porque é a unica coisa que retorna true;
const corUser1 = "vermelho";
const corDefault1 = corUser1|| "preto";//agora ele retorna o que usuario escolheu;

console.log(execute && oi); //retorna undefined porque a variavel é vazia;

console.log(0||NaN||"eu mesmo"||true);//só precisa de um valor true para ser exibido, retorna a string;

console.log(corDefault);
console.log(corDefault1);
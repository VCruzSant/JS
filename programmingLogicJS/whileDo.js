let i = 0;

while (i <= 10) {// i vai do 0 até o 10
    //se eu colocar o i++ aqui, ele vai contar a partir do 1;
    console.log(i);
    i++; //se não colocar isso, o navegador trava por causa do laço infinito;
}


const max = 50;
const min = 1;
let rand = 10;

function random(min, max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r); //deixar número inteiro 
}

while (rand !== 10) { //faça tal coisa até... (no caso vai ser executada a função até ele achar o 10)
    rand = random(min, max);
    console.log(rand);
}
console.log('##########') //só pora dividir 


do { //faça tal coisa quando...()
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);

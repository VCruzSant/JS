const hora = 24;
const haveMoney = false;

if (hora >= 0 && hora <=11) { //se a varivael hora tiver o valor maior igual a 0 e menor ou igual a 11, execute bom dia
    console.log('bom dia!')
}  else if (hora >=12 && hora <=17) {
    console.log('boa tarde!');
} else if (hora >=18 && hora <=23) {
    console.log('boa noite!');
} else { // se não tiver nenhum desses valores execute olá;
    console.log('olá!');
}

if (haveMoney) { //se minha variavel for true, execute
    console.log("pode sair");
} else{ // se minha variavel for FALSY;
    console.log('não pode sair')
}




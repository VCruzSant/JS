const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    if ( number === 3) {
        console.log('pulei o 3 por causa do "continue"');
        continue;
    }

    if(number === 8) {
        console.log('encontrado, saindo.....')
        break
    }

    console.log(number);
}
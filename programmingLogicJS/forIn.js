const user = {
    name: 'Vini',
    surname: 'Santi',
    yearsOld: '19'
}

for ( let key in user) {
    //console.log(key); //mostra os indices
    //console.log(user[key]); //mostra os valores
    console.log(key, user[key]); //indice + valor
}
const user = 'Vini Sant';

const userA = ['Vini Sant', 'Sant', 'Cruz']

const userF = 'O Santiago'
/*for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}

for (let i in user) {
    console.log (user[i]);
}

*/

for (let value of user) {
    console.log(value);
}

for (let valueA of userA) {
    console.log(valueA);
}

userA.forEach(function (vl, i, a) {
    console.log(vl, i, a)
})


/*
function insertDate(dayW, dateComplete) {
  const h1 = document.querySelector(".container h1");
  h1.innerHTML = `${dayW}, ${dateComplete}`;
}

function getDayName(dWeek) {
  let dString;

  switch (dWeek) {
    case 0:
      dString = "Domingo";
      break;

    case 1:
      dString = "Segunda";
      break;

    case 2:
      dString = "Terça";
      break;

    case 3:
      dString = "Quarta";
      break;

    case 4:
      dString = "Quinta";
      break;

    case 5:
      dString = "Sexta";
      break;

    case 6:
      dString = "Sabado";
      break;

      pode ser substituido por:
       const easy = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
       return easy[dWeek];
  }

  return dString;
}

function date(date) {
  const d = date.getDate();
  const m = date.getMonth() +1;
  const y = date.getFullYear();
  
  const h = date.getHours();
  const mi = date.getMinutes();

  return `${d}/${m}/${y} ás ${h}:${mi}`;
}

const dateC = new Date();
const dayW = dateC.getDay();
const dateComplete = date(dateC);
const dayConvert = insertDate(getDayName(dayW), date(dateC));



console.log(date(dateC));
*/

const h1 = document.querySelector(".date");
const data = new Date();

const opcoes = {
  dateStyle: 'full',
  timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);

console.log(opcoes)



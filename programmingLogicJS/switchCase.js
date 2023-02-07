function getDayName(dSemana) {
  let dString;

  switch (dSemana) {
    case 0:
      dString = "Domingo";
      break; //como está dentro de uma function, pode ser substituido por return;

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
  }

  return dString;
}
const data = new Date();
const dSemana = data.getDay();
const dString = getDayName(dSemana); //como a variavel foi criada dentro da função e só existe lá, devo criar uma variavel para a própria função 


/*
if (dSemana === 0) {
    dString = 'Domingo' 
} else if (dSemana === 1) {
    dString = 'Segunda'
} else if (dSemana === 2) {
    dString = 'Terça'
} else if (dSemana === 3) {
    dString = 'Quarta'
} else if (dSemana === 4) {
    dString = 'Quinta'
} else if (dSemana === 5) {
    dString = 'Sexta'
} else if (dSemana === 6) {
    dString = 'Sabado'
} else {
    dString = '';
}
*/

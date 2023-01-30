/**seu número é:
 * raiz quadrada é:
 * .... é inteiro:
 * é NaN:
 * arrendondando pra baixo:
 * arredondando pra cima:
 * com duas casas decimais:
 */

let numero = Number(prompt("Digite seu número"));

const numeroDoc = document.getElementById("seuNumero");
const text = document.getElementById("texto");

numeroDoc.innerHTML = numero;

raiz = numero ** 0.5;
inter = Number.isInteger(numero);
notNumber = Number.isNaN(numero);
arrend1 = Math.floor(numero);
arrend2 = Math.ceil(numero);

text.innerHTML = "";
text.innerHTML += `A Raiz quadrada é:<strong>${raiz}</strong><br>`;
text.innerHTML += `${numero} é inteiro: <strong>${inter}</strong><br>`;
text.innerHTML += `É NaN:<strong>${notNumber}</strong><br>`;
text.innerHTML += `Arredondamento para baixo:<strong>${arrend1}<strong><br>`;
text.innerHTML += `Arredondamento para cima:<strong>${arrend2}<strong><br>`;
text.innerHTML += `Com duas casas decimais:<strong>${numero.toFixed(
  2
)}<strong><br>`;

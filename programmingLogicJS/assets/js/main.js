function myScope() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".result");

  const test = [];

  function receivesEvent(e) {
    e.preventDefault();

    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    const pesoInv = Number.isNaN(peso);
    const altInv = Number.isNaN(altura);

    let imc = peso.value / altura.value ** 2;

    if (imc < 18.5) {
      result.innerHTML = `<p>seu IMC é ${imc.toFixed(
        2
      )} e está <strong>Abaixo do peso</strong></p>`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      result.innerHTML = `<p>seu IMC é ${imc.toFixed(
        2
      )} e é um <strong>Peso normal</strong></p>`;
    } else if (imc >= 25 && imc <= 29.9) {
      result.innerHTML = `<p>seu IMC é ${imc.toFixed(
        2
      )} e está em <strong>sobrepeso</strong></p>`;
    } else if (imc >= 30 && imc <= 34.9) {
      `<p>seu IMC é ${imc.toFixed(
        2
      )} e está com obesidade <strong>grau 1</strong></p>`;
    } else if (imc >= 35 && imc <= 39.9) {
      `<p>seu IMC é ${imc.toFixed(
        2
      )} e está com obesidade <strong>grau 2</strong></p>`;
    } else if (imc >= 40) {
      `<p>seu IMC é ${imc.toFixed(
        2
      )} e está com obesidade <strong>grau 3</strong></p>`;
    } else if (pesoInv) {
      `<p>peso invalido</p>`;
    } else if (altInv) {
      `<p>altura invalida</p>`;
    } else {
      `<p>Não consegui calcular seu IMC</p>`;
    }

    test.push({
      peso: peso.value,
      altura: altura.value,
    });

    console.log(test);
  }

  form.addEventListener("submit", receivesEvent);
}

myScope();

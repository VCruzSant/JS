function myScope() {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector(".peso");
    const inputAltura = e.target.querySelector(".altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
      setResultado("Peso inválido", false);
      return;
    }

    if (!altura) {
      setResultado("Altura inválido", false);
      return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNImc(imc);

    console.log(imc, nivelImc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);
  });

  function criaR() {
    const r = document.createElement("p");
    r.classList.add("rResult");
    return r;
  }

  function setResultado(msg, isValid) {
    const result = document.querySelector(".result");
    result.innerHTML = "";

    const r = criaR();

    if (isValid) {
      r.classList.add("rResult");
    } else {
      r.classList.add("bad");
    }

    r.innerHTML = msg;
    result.appendChild(r);
  }

  function getNImc(imc) {
    const nivel = [
      "Abaixo do peso",
      "Peso normal",
      "Sobrepeso",
      "Obesidade grau 1",
      "Obesidade grau 2",
      "Obesidade grau 3",
    ];

    if (imc >= 39.9) {
      return nivel[5];
    } else if (imc >= 34.9) {
      return nivel[4];
    } else if (imc >= 29.9) {
      return nivel[3];
    } else if (imc >= 24.9) {
      return nivel[2];
    } else if (imc >= 18.9) {
      return nivel[1];
    } else if (imc < 18.5) {
      return nivel[0];
    }
  }

  function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
  }
}

myScope();

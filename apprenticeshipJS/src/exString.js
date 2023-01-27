const nome = prompt("Digite seu nome");

document.body.innerHTML += `Seu nome é <strong>${nome}</strong> <br />`;
document.body.innerHTML += `Esse nome tem <strong>${nome.length}</strong> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong> <br />`;
document.body.innerHTML += `O primeiro indice da letra "i" no seu nome é: <strong>${nome.indexOf(
  "i"
)}</strong> <br />`;
document.body.innerHTML += `O ultimo indice da letra "i" no seu nome é: <strong>${nome.lastIndexOf(
  "i"
)}</strong> <br />`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são: <strong>${nome.slice(
  -3
)}</strong> <br />`;
document.body.innerHTML += `As palavras do seu nome são <strong>${nome.split(
  " "
)}</strong> <br />`;
document.body.innerHTML += `Seu nome em maíusculo <strong>${nome.toUpperCase()}</strong> <br />`;
document.body.innerHTML += `Seu nome em minúsculo <strong>${nome.toLowerCase()}</strong> <br />`;

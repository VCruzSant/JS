//function nome da função(parametro){}
function data(numero) {
  console.log(`sua conta tem um total de ${numero}`);
  return `make money! Sua conta tem um total de ${numero}`; //para retornar algo na função atribuida a variavel
  //nada a mais abaixo do return vai ser executado
}
//não posso chamar a variável dentro do escopo da fuinção

function soma(x, y) {
  // 2 valores
  const resultado = x + y; //criou uma variável para somar
  return resultado; //chamou a variável
}

const result = function (x) {
  return x ** 0.5;
};

//maneira mais moderna ->arrow function
const modern = (x) => {
  return x ** 0.5;
};

//quando for só o basico
const modernMore = (x) => x ** 0.5;

data(1000000); //executando a função, envia para o parametro;
data(1500000); //pode ser reutilizavel;
data(2000000);

const funcData = data(5000000); //atribui a função a uma variável;
console.log(funcData); //chamei a função atribuida a variavel;

console.log(soma(5, 5)); //dei os valores x e y para fazer a função
console.log(soma(10, 5));
console.log(soma(32, 7));

console.log(result(81));

console.log(modern(100));

console.log(modernMore(10000));

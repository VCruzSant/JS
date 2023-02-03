function meuEscopo() {
  const form = document.querySelector(".form"); //seleconando o formulário no arquivo html;
  const result = document.querySelector(".resultado");

  const user = [];

  /* um jeito -> 
    form.onsubmit = function (evento) { //fazer algo quando o formulário for enviado;
        evento.preventDefault(); //quando o evento for acionado, previnir o que for padrão, no caso, não reiniciar a página.
        alert(1);
        console.log('evento ativo');
    };
    let contador = 1;
    function recebeEventForm (evento) {
        evento.preventDefault();
        console.log(`${contador} evento acionado! `);
        contador++;

    }*/

  function recebeEventForm(evento) {
    evento.preventDefault(); //uando o evento for acionado, previnir o que for padrão, no caso, não reiniciar a página.
    const nome = form.querySelector(".nome"); //selecionando os input lá do html
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");
    const idade = form.querySelector(".idade");

    user.push({
      //mandando valores para o array
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
      idade: idade.value,
    });

    console.log(user); //para selecionar o array;

    result.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}, ${idade.value}</p>`; //mostrar na tela
  }
  form.addEventListener("submit", recebeEventForm); //adiciona no form um escutador de evento, quando clicar no submit (botão) vai ativar o evento dentro da minha função, recebendo e mostrando o que foi enviado;
}

meuEscopo(); //chamando a função

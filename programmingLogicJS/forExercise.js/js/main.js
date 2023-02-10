const element = [
  {tag: 'p', text: 'Frase 1'},
  {tag: 'div', text: 'Frase 2'},
  {tag: 'section', text: 'Frase 3'},
  {tag: 'footer', text: 'Frase 4'},
]

const container = document.querySelector('.container'); //selecionado a classe do html
const div = document.createElement('div'); //criando uma div para inserior todas as tags

for (let i = 0; i < element.length; i++) { //for para mostrar os elementos de 1 por 1
  let { tag, text } = element[i]; // desestruturando os elementos para selecionar
  let createdTag = document.createElement(tag); // criando tudo o que é tag no html
  createdTag.innerText = text; //colocando todo o text para sua respectiva tag
  div.appendChild(createdTag); //colocar as tags dentro da minha div
}

container.appendChild(div); //inserir minha div no final do container.
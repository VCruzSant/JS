const paragraph = document.querySelector('.paragraph');
const ps = paragraph.querySelectorAll('p'); //selecionando todos os elementos p

const stylesBody = getComputedStyle(document.body);//pegando os estilos que foi aplicado no body
const bgCBody = stylesBody.backgroundColor; //pegando a cor do background 

for (let p of ps) {
    p.style.backgroundColor = bgCBody;//meu p recebe os atributos de bgCBody(stylesBody.backgroundColor);
    p.style.color = '#FFF';
}

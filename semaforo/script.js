const img = document.getElementById('img');
const buttons =  document.getElementById('botoes');
let colorIndex = 0;

//muda cor dos botões vermelho, amarelo e verde
const luzesTrafico = (event) => {
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0; //forma resumida do if e else

const mudarCor = () => {
    const colors = ['red','yellow','green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const turnOn = {
    'red' : () => img.src = 'img/vermelho_sinal.png',
    'yellow' : () => img.src = 'img/amarelo_sinal.png',
    'green' : () => img.src = 'img/verde_sinal.png',
    'auto' : () => setInterval(mudarCor, 1000)
}

buttons.addEventListener('click', luzesTrafico );
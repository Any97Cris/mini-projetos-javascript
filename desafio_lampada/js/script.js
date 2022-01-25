const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf('quebrada') > -1
}

//troca a imagem atual pela lâmpada ligada
function lampOn () {
    if(!isLampBroken ()){
        lamp.src = './img/ligada.png';
    }    
}

//troca a imagem atual pela lâmpada desligada
function lampOff () {
    if(!isLampBroken ()){
        lamp.src = './img/desligada.png';
    }
	
}

//troca a imagem atual pela lâmpada ligada
function lampBroken () {
    lamp.src = './img/quebrada.png';
}

turnOn.addEventListener ('click', lampOn);//clicar no botão desligar lâmpada acende
turnOff.addEventListener ('click', lampOff);//clicar no botão desligar lâmpada desliga
lamp.addEventListener('mouseover', lampOn); //mouse em cima da imagem
lamp.addEventListener('mouseleave', lampOff);//mouse não esta em cima da imagem
lamp.addEventListener('dblclick', lampBroken);//clique duplo

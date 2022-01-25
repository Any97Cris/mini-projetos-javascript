const lamp = document.getElementById('lamp');
const statusBotao = document.getElementById('status');



function isLampBroken () {	
		return lamp.src.indexOf('quebrada') > -1; 	   	
}

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

function lampStatus () {	
    if(statusBotao.textContent == 'Ligar'){
    	lampOn();
    	statusBotao.textContent = 'Desligar';    	
    }else{
    	lampOff();
    	statusBotao.textContent = 'Ligar';    	   	
    }
}

statusBotao.addEventListener('click', lampStatus);//liga e desliga lâmpada
lamp.addEventListener('dblclick', lampBroken);//clique duplo
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave',lampOff)

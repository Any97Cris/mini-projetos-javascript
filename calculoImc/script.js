
const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome');
    const altura = document.getElementById('altura');
    const peso = document.getElementById('peso');
    const resultado = document.getElementById('resultado');
    
    if(nome.value !== '' && altura.value !== '' && peso.value !== ''){

    const cal = (peso.value/(altura.value*altura.value));

        let classificacao = '';

        if(cal < 18.5){
            classificacao = 'abaixo do peso.'
        }else if(cal < 25){
            classificacao = 'peso ideal'
        }else if(cal < 30) {
            classificacao = 'levemente acima do peso'
        }else if(cal < 35){
            classificacao = 'com obesidade grau I'
        }else if(cal < 40){
            classificacao = 'com obesidade grau II'
        }else {
            classificacao = 'com obesidade grau III. Cuidado!'
        }

    resultado.textContent = `${nome.value} seu IMC é ${cal.toFixed(2)} e você está ${classificacao}`;

    }else{
    resultado.textContent = "Preencha todos os campos!"
    }
}

calcular.addEventListener('click', imc);




const calcular = document.getElementById('calcular');


function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome.value != '' && altura != '' && peso != ''){
       
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let clasificacao = '';

        if(valorIMC < 18.5){
            clasificacao = 'abaixo do peso';
        }else if(valorIMC < 25) {
            clasificacao = 'com peso ideal';
        }else if(valorIMC < 30){
            clasificacao = 'levemente a cima do peso';
        }else if(valorIMC < 35){
            clasificacao = 'com obesidade grau I';
        }else if(valorIMC < 40){
            clasificacao = 'com obesidade grau II';
        }else{
            clasificacao = 'com obesidade grau III. Cuidado!!!';
        }

        resultado.textContent = `${nome} seu IMC  é ${valorIMC} e você está ${clasificacao}`;
    }else {
        resultado.textContent = 'Preencha todos os campos !!!';
    }
}


calcular.addEventListener('click', imc);
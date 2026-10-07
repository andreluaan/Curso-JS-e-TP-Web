const form = document.querySelector('#form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado('Peso Inválido!!');
        return;
    }

    if  (!altura) {
        setResultado('Altura inválida!!');
        return;
    }

    const imc = getImc(peso,  altura);
    setResultado(imc, getNivelImc());

});

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    
    if (isValid){
        p.classList.add('paragrafo-resultado')
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p);
}




function getImc (peso, altura){
    const imc = peso / altura **2;
    return imc.toFixed(2)
}


function getNivelImc(imc) {

    if(imc <= 18.5) return resultado = 'Abaixo do peso'
    if(imc <= 24.9) return resultado = 'Peso normal'
    if(imc <= 29.9) return resultado = 'Sobrepeso'
    if(imc <= 34.9) return resultado = 'Obesidade grau 1'
    if(imc <= 39.9) return resultado = 'Obesidade grau 2'
    if  (imc >= 40) return resultado = 'Obesidade grau 3'
    
}

const numero = Number(prompt('Digite um numero:'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto')


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu numero -2 é ${numero - 2}</p>`;

texto.innerHTML += `<p>${numero} -- é inteiro: ${Number.isInteger(numero)} </p>`;

texto.innerHTML += `<p>${numero} -- é NaN: ${Number.isNaN(numero)} </p>`;

texto.innerHTML += `<p>${numero} -- Arredondado pra cima: ${Math.ceil(numero)} </p>`;

texto.innerHTML += `<p>${numero} -- Arredondado pra cima: ${Math.floor(numero)} </p>`;

texto.innerHTML += `<p>${numero} -- Arredondado pra cima: ${Math.floor(numero)} </p>`;

texto.innerHTML += `<p>${numero} -- Arredondado pra cima: ${numero.toFixed(2)} </p>`;




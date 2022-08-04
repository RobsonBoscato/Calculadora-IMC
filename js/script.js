function start() {
  var buttonImc = document.querySelector('#button-imc');
  buttonImc.addEventListener('click', handleButtonClick);

  var peso = document.querySelector('#input-weight');
  var altura = document.querySelector('#input-height');

  peso.addEventListener('input', handleButtonClick);
  altura.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var peso = document.querySelector('#input-weight');
  var altura = document.querySelector('#input-height');
  var msg = document.querySelector('#imc-result');

  var weight = Number(peso.value);
  var height = Number(altura.value);

  var imcCalculate = weight / (height * height);

  msg.innerHTML = imcCalculate.toFixed(2).replace('.', ',');
}

start();

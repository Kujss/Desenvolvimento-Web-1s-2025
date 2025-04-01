<<<<<<< HEAD
function somar(a, b) {
    return a + b;
  }
  
  function subtrair(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b === 0) {
      return 'Erro: divisão por zero';
    } else {
      return a / b;
    }
  }
  
  module.exports = {
    somar: somar,
    subtrair: subtrair,
    multiplicar: multiplicar,
    dividir: dividir
  }
=======
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return 'Erro: divisão por zero';
  } else {
    return a / b;
  }
}

module.exports = {
  somar: somar,
  subtrair: subtrair,
  multiplicar: multiplicar,
  dividir: dividir
}
>>>>>>> 602288930119fe88ec72f7b16678c37ddbe7a020

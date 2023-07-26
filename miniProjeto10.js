function ePrimo(valor) {

    if (valor < 2) {
      return "Não é primo";
    }

    for (let i = 2; i <= Math.sqrt(valor); i++) {
      if (valor % i === 0) {
        return "Não é primo";
      }
    }
    return "É primo";
  }

  console.log(ePrimo(7));

// Exercício Nota Escolar

// Obter a média a partir de um array
// 00-59: F
// 60-69: D
// 70-79: C
// 80-89: B
//90+ : A

const notas = [50, 60, 70];

function mediaDasNotas(valor) {
  let soma = 0;

  for (let i = 0; i < valor.length; i++) {
    soma += valor[i];
  }

  const media = soma / valor.length;

  if (media < 59) { return "F"; }
  if (media < 69) { return "D"; }
  if (media < 79) { return "C"; }
  if (media < 89) { return "B"; }
  if (media >= 90) { return "A"; }
}

console.log(mediaDasNotas(notas));

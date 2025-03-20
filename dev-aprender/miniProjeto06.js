const filme = {
    título: "Os Reis do Jaboatão",
    ano: 2023,
    diretor: 'Annie',
    personagem: 'JP'
  };
  
  function exibirPropriedades(objeto) {
    for (propriedade in objeto) {
      if (typeof objeto[propriedade] === 'string') {
        console.log(propriedade, objeto[propriedade]);
      }
    }
  }
  
  exibirPropriedades(filme);
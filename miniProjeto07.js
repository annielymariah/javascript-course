// criar função somar que retorna a
// soma de todos os múltiplos de 3 e 5

// Multiplos de 3
// 3,6,9

// Multiplos de 5
// 5,10

//Somando os multíplos
// armazenar os multíplos de 3
// armazenar os multíplos de 5
// somar os dois

const valor = 10;

function somaDosMultiplos(valorLimite){
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;

    for (let i = 0; i <= valorLimite; i++){
        if(i % 3 === 0){
            multiplosDe3 += i;
        }
        if(i % 5 === 0){
            multiplosDe5 += i;
        }
    }

    console.log("Soma dos multiplos de 3:", multiplosDe3);
    console.log("Soma dos multiplos de 5:", multiplosDe5);
    console.log("Valor total:", multiplosDe3 + multiplosDe5);
}

somaDosMultiplos(valor);
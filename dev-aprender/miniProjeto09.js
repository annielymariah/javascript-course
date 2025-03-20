// Adicionador de asteriscos.

let total = 10;

function exibirAsteriscos(valor){

    let asteriscos = "";
    for (let i = 0; i < valor; i++){
        asteriscos += "*";
    }
    console.log(asteriscos);
}

exibirAsteriscos(10);
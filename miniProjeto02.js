// Escreva uma função que utilize dois números e retorna o maior deles

const valor1 = 5;
const valor2 = 22;
let maiorValor;

function maiorQue(valor1, valor2){
if (valor1 < valor2){
    return valor2;}
else {
    return valor1;}
};

maiorValor = maiorQue(valor1, valor2);
console.log(maiorValor);

// Outro modo

function maiorQue2(valor1, valor2){
    return valor1 > valor2 ? valor1 : valor2;
    };
    
    maiorValor = maiorQue2(valor1, valor2);
    console.log(maiorValor);
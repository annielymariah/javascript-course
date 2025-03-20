// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não divisível por 3 ou 5 => entrada
// Não é um número => 'Não é um número'

function FizzBuzz(valor){
    if(typeof valor !== 'number'){
        return "Não é um número."
    }
    else{
        if (valor % 3 == 0){
            return "Fizz";
        }
        if (valor % 5 == 0){
            return "Buzz";
        }
        if (valor % 3 != 0 && valor % 5 != 0){
            return valor;
        }
    }
}

console.log(FizzBuzz(7));
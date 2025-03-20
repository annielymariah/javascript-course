// Verifique se o valor é par ou impar

function imPar(valor){

    if(typeof valor !== 'number'){
        console.log("Não é um valor numérico.");
    }

    else{
        if (valor % 2 === 0){
            console.log(valor,"é par.");
        }
        else {
            console.log(valor,"é impar.");
        }
    } 
   
}

imPar(30);
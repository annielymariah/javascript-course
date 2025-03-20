// Velocidade máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
// math.Floor()
// caso pontos maior que 12 -> "Carteira Suspendida”

function limVelocidade (valor){
    if (valor < 70){
        return "Sem penalidade.";
    }
    else{
        const pontos = Math.floor((valor-70)/5);
        console.log("Pontos atuais:", pontos);
        return pontos > 12 ? "Carteira suspensa." : "Cuidado, você está acima do permitido.";
    }
}

console.log(limVelocidade(100));


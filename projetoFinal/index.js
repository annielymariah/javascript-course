
//Vídeo que me ensinou a integração: https://www.youtube.com/watch?v=ZGMJqxIkAb0&t=215s

let nome = "";
const v1 = "Você foi convidado.";
const v2 = "Você não foi convidado.";

function permissaoEntrada (){

    nome = document.getElementById("resposta").value;
    const lista = ['Anniely', 'JP', 'Irineu', 'Morgana CCREI', 'Simtou das massas', 'Arthur da marcena', 'Mariana', 'Ricardão'];

    for(let i = 0; i < lista.length; i++){
        if (lista[i] == nome){
            return document.getElementById("Resposta").innerHTML = v1;
        }
        return document.getElementById("Resposta").innerHTML = v2;
    }
}



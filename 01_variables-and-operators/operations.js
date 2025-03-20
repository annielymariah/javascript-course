// Faça um programa para calcular o valor de uma viagem.
// Você terá 3 variáveis, sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio de gasolina por Km;
// 3 - Distância em Km da viagem;

// Imprima o valor no console o quanto será gasto na viagem.

const price = 6.25; 
const km_per_liter = 1; 
let distance = 100; 

let liters_consumed = distance / km_per_liter; 
let result = price * liters_consumed;

console.log(result.toFixed(2) + "R$");
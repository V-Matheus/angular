/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas: 

1- Preço do combustivel
2- Gasto médio de combustivel do carro por KM
3- Distancia em KM da viagem

*/

const precoCombustivel = 5.79;
const gastoMedio = 10;
const distancia = 100;

const listrosConsumidos = distancia / gastoMedio;
const valorGasto = precoCombustivel * listrosConsumidos;

console.log(valorGasto.toFixed(2));

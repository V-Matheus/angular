/* Faça um progama para calcular o valor de uma viagem

Você terá 5 variaveis. Sendo elas: 

1- Preco do etanol
2- Preco da gasolina
3- O tipo do combutível que está no seu carro
4- Gasto médio de combustivel do carro por KM
5- Distancia em KM da viagem

Imprima no console o valor que será gasto para realizar a viagem.

*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const gastoMedio = 10;
const distancia = 100;
const tipoCombustivel = 'Etanol';

if (tipoCombustivel === 'Etanol') {
  precoCombustivel = precoEtanol;
} else precoCombustivel = precoGasolina;

const listrosConsumidos = distancia / gastoMedio;
const valorGasto = precoCombustivel * listrosConsumidos;

console.log(valorGasto.toFixed(2));

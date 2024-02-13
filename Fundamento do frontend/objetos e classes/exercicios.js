/* 
  1- Crie uma classe para representar carros.

  Os carros possuem uma marca, uma cor e um gasto médio de combustivel por KM rodado.
  Crie um método que dado a quantidade de KM e o preco do combustível nos dê o valor
  gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor ;
  gastoMedio;

  constructor(marca, cor, gastoMedio) {
    this.marca = marca;
    this.cor = cor
    this.gastoMedio = gastoMedio
  }

  calcularViagem(distancia, precoCombustivel) {
    return distancia * this.gastoMedio * precoCombustivel
  }
}

const uno = new Carro('Fiat', 'prata', 1/12)

console.log(uno.calcularViagem(70, 5));
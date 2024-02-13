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


/* 
  Crie um classe para representar pessoas.
  Para cada pessoa teremos os atrubutos nome, peso e altura.
  As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso / (altura ** 2))
  Instancie uma pessoa chamada José que tenha 70Kg de peso e 1,75 de altura e peça a José para dizer
  o valor do seu IMC
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / (this.altura ** 2)
  }

  classificarImc() {
    const imc = this.calcularImc()

    if (imc < 18.5) {
      return ('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
      return ('Peso normal');
    } else if (imc >= 25 && imc < 30) {
      return ('Acima do peso');
    } else if (imc >= 30 && imc < 40) {
      return ('Obeso');
    } else {
      return ('Obessidade Grave');
    }
  }
}

const jose = new Pessoa('jose', 70, 1.75)
console.log(jose);
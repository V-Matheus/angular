class Pessoa {
  nome;
  idade;
  anoNascimento;

  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.anoNascimento = 2022 - idade
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}

function compararPessoas(p1, p2) {
  if(p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho que ${p2.nome}`);
  } else if (p2.idade > p1.idade){
    console.log(`${p2.nome} é mais velho que ${p2.nome}`);
  } else {
    console.log(`${p2.nome} tem a mesma idade que ${p2.nome}`);
  }
}

const vitor = new Pessoa('Vitor', 25)
const rennan = new Pessoa('Rennan', 30)

compararPessoas(vitor,rennan)
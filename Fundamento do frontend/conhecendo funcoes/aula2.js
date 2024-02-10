function meuNome(nome) {
  return `Meu nome é ${nome}`;
}

meuNome('matheus');

function maiorIdade(idade) {
  if (idade < 18) {
    console.log(meuNome('Matheus') + 'É Menor');
  } else {
    console.log(meuNome('Matheus') + 'É Maior');
  }
}

maiorIdade(18);

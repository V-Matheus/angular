function aplicarDesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}

function aplicarJuros(valor, juros) {
  return valor + valor * (juros / 100);
}

function pagamento(preco, formaPagamento) {
  if (formaPagamento === 1) {
    precoPagar = aplicarDesconto(preco, 10);
  } else if (formaPagamento === 2) {
    precoPagar = aplicarDesconto(preco, 15);
  } else if (formaPagamento === 3) {
    precoPagar = preco;
  } else {
    precoPagar = aplicarJuros(preco, 10);
  }
}

pagamento(precoEtiqueta, formaPagamento)

const precoEtiqueta = 100;
const formaPagamento = 1;

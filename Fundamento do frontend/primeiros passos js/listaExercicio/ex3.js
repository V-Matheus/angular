/* 
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de estiqueta e a escolha
da condição de pagamento.

Códigos da condição de pagamento: 

1 À vista Débito, recebe 10% de desconto
2 À vista no dinheiro ou PIX, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%

*/

const precoEtiqueta = 100;
let precoPagar = 0;
const formaPagamento = 1;

if (formaPagamento === 1) {
  precoPagar = precoEtiqueta - precoEtiqueta * 0.1;
} else if (formaPagamento === 2) {
  precoPagar = precoEtiqueta - precoEtiqueta * 0.15;
} else if (formaPagamento === 3) {
  precoPagar = precoEtiqueta
} else {
  precoPagar = precoEtiqueta + precoEtiqueta * 0.1;
}

/* 
  1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e sua classificação conforme a tabela abaixo: 

  Media = (nota1 + nota2 + nota3) /3

  Classificação: 
    - Média menor que 5, reprovado
    - Média entre que 5 e 7, recuperação
    - Média acima que 7, aprovado

*/

const nota1 = 5;
const nota2 = 3;
const nota3 = 7;

media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log('Reprovado');
} else if (5 <= media && media < 7) {
  console.log('Recuperação');
} else {
  console.log('Aprovado');
}

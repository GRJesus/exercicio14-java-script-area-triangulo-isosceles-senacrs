//1) Elaborar um programa em Javascript que lê 3 valores a,b,c e verifica se eles formam ou não um triângulo. Supor que os valores lidos são inteiros e positivos. Caso os valores formem um triângulo, calcular e escrever a área deste triângulo. Se não formam triângulo escrever os valores lidos. ( se a > b + c não formam triângulo algum, se a é o maior).
//Condição para existencia de um triangulo.
//| b - c | < a < b + c
//| a - c | < b < a + c
//| a - b | < c < a + b

var base = parseInt(prompt("Insira o valor da base aqui"));
var side1 = parseInt(prompt("Insira o valor do primeiro lado"));
var side2 = parseInt(prompt("Insira o valor do segundo lado"));
var calc1 = Math.abs(side1 - side2);//| b - c | representa o valor absoluto
var calc2 = Math.abs(side1 + side2);//b + c representa o valor absoluto
var calc3 = Math.abs(base - side2);//| a - c | representa o valor absoluto
var calc4 = Math.abs(base + side2);//a + c representa o valor absoluto
var calc5 = Math.abs(base - side1);//| a - b | representa o valor absoluto
var calc6 = Math.abs(base + side2);//a + b representa o valor absoluto

if (calc1 < base && base < calc2 && calc3 < side1 && side1 < calc4 && calc5 < side2 && side2 < calc6) {
  var x1 = (base + side1 + side2)/2;
  var area = Math.sqrt(x1*(x1-base)*(x1-side1)*(x1-side2));
  document.body.append("A base é igual a " + base + ", o primeiro lado é igual a " + side1 + ", o segundo lado é igual a " + side2 + "  com isso a área calculada é igual a " + area.toFixed(2) + "cm2.");
} else {
  document.body.append("A base é igual a " + base + ", o primeiro lado é igual a " + side1 + ", o segundo lado é igual a " + side2 + "  com isso não é possivel calcular um triângulo.");
}

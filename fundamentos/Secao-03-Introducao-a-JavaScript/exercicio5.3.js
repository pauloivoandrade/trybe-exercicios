var num1 = 90;
var num2 = 90;
var num3 = 90;
maiorNumero = "";
if (num1 > num2 && num1 > num3){maiorNumero=num1} else if (num2 > num1 && num2 > num3) {maiorNumero = num2} else if (num3 > num1 && num3 > num2) {maiorNumero=num3} else {maiorNumero="Todos os números são iguais!"}
console.log(maiorNumero);
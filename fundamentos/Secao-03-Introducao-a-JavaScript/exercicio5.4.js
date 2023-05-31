var angulo1 = 60;
var angulo2 = 60;
var angulo3 = 0;
var triangulo = true;
if(angulo1+angulo2+angulo3===180){triangulo=true} else if (angulo1<=0 || angulo2 <=0 || angulo3<= 0) {triangulo = "ERRO"}else{triangulo=false}
console.log(triangulo);
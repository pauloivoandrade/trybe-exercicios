var salarioBase = 3000;
var salarioPrimario ;
const inss1 = 0.08;
const inss2 = 0.09;
const inss3 = 0.11;
const inss4 = 570.88;
const aliquota1 = 0.075;
const aliquota2 = 0.15;
const aliquota3 = 0.225;
const aliquota4 = 0.275;
const parcela1 = 142.8;
const parcela2 = 354.8;
const parcela3 = 636.13;
const parcela4 = 869.36;

var salarioLiquido ;
if (salarioBase <= 1556.94) {salarioPrimario = salarioBase - (salarioBase*inss1)} 
else if (salarioBase > 1556.94 && salarioBase<= 2594.92) {salarioPrimario = salarioBase - (salarioBase*inss2)} 
else if (salarioBase > 2594.92 && salarioBase <= 5189.82) {{salarioPrimario = salarioBase-(salarioBase*inss3)}} 
else {{salarioPrimario = salarioBase-(salarioBase*inss4)}}
if (salarioPrimario <= 1903.98) {salarioLiquido = salarioPrimario} 
else if (salarioPrimario >= 1903.99 && salarioPrimario <= 2826.65) { salarioLiquido = salarioPrimario - (salarioPrimario * aliquota1 - parcela1)} 
else if (salarioPrimario >= 2826.66 && salarioPrimario <= 3751.05) { salarioLiquido = salarioPrimario - (salarioPrimario * aliquota2 - parcela2) }
else if (salarioPrimario >= 3751.06 && salarioPrimario <= 4664.68) { salarioLiquido = salarioPrimario - (salarioPrimario * aliquota3 - parcela3)}
else if (salarioPrimario > 4664.68) {salarioLiquido = salarioPrimario - (salarioPrimario * aliquota4 - parcela4)}

console.log(salarioLiquido);



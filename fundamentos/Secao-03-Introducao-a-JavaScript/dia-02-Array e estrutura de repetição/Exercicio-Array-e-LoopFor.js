const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let maiorValor;
let numerosImpares= [];
for (let index = 0; index < numbers.length; index += 1){
    console.log(`${index}-${numbers[index]}`);
}

for (let index = 0; index < numbers.length; index += 1) {
    soma = soma += numbers[index]};
    console.log(`Soma total = ${soma}`);
for (let index = 0; index< numbers.length; index += 1) {
    media = soma / (numbers.length)
}
console.log(`Média aritmética = ${media}`);

if (media > 20) { message = "O valor da média aritmética é maior que 20"
} 
else {message = "O valor da média aritmética é menor ou igual a 20" }
console.log(message);

for (let index = 0; index < numbers.length; index += 1){
if (numbers[index] > [index] + 1) { maiorValor = numbers[index]}};
console.log(maiorValor);

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0) {numerosImpares.push(numbers[index])} 
   }
if (numerosImpares.length === 0) {return console.log("Nenhum valor ímpar encontrado")} else {return console.log(numerosImpares.length)}







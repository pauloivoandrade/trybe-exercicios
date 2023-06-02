let balance = 200;
let credito = 50;
let debito = 40;
let taxa = 20;
let split = 4;

function creditoConta(credito){
    return `SALDO ATUAL = ${balance + credito}`       //Adiciona um valor ao balance;
}
console.log(creditoConta(credito));

//


function debitoConta(debito){
    return `SALDO ATUAL = ${balance - debito}`       //Subtraia um valor ao balance;
}
console.log(debitoConta(debito));

//

function taxaConta(taxa){
    return `SALDO ATUAL = ${balance * (1 - taxa/100)}`       //Multiplique o valor do balance por uma taxa;
}
console.log(taxaConta(taxa));

//

function splitConta(split){
    return `SALDO ATUAL = ${balance / split }`       //Multiplique o valor do balance por uma taxa;
}
console.log(splitConta(split));
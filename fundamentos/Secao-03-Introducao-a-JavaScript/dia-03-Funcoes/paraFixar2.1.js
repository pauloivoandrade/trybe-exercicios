const trybeBankCustomers =['Oliva', 'Nat', 'Gus'];


function addCustomer(customers, newCustomers){
  for (let index=0; index < newCustomers.length; index += 1){
    if (typeof newCustomers[index] === 'string') {
        customers.push(newCustomers[index])
    } else { return "O parâmetro passado deve do tipo String!"; 
 }
    }
    return trybeBankCustomers;}

console.log(addCustomer(trybeBankCustomers, [12, 'pedro']));

//OUTRA FORMA UTILIZANDO APENAS newCustomer como variavel

const trybeBankCustomers =['Oliva', 'Nat', 'Gus'];


function addCustomer(newCustomers){
  for (let index=0; index < newCustomers.length; index += 1){
    if (typeof newCustomers[index] === 'string') {
        trybeBankCustomers.push(newCustomers[index])
    } else { return "O parâmetro passado deve do tipo String!"; 
 }
    }
    return trybeBankCustomers;}

console.log(addCustomer(['maria', 'pedro']));
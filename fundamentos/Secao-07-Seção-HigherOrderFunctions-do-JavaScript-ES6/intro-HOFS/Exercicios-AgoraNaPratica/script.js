const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().replace(' ', '_');
    return { fullName, email: `${email}@trybe.com` };
  };
  
  const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    };
    return employees;
  };
  
  console.log(newEmployees(employeeGenerator));

const loteria = (numero) => {
    const numeros = [1, 2, 3, 4, 5];
    const sorteio = Math.floor(Math.random() * (6 - 1) + 1);
    const matchSorteio = numeros.some((num) => num === numeros[sorteio]);
    if(matchSorteio === true){
        return "Parabens, voce ganhou"
    } else {
        return "Tente novamente"
    };
};
console.log(loteria(3));
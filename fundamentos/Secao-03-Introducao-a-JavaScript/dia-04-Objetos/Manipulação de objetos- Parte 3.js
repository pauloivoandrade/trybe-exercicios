const { log } = require("console");

const school = [
  {
    course: 'Python',
    students: 20,
    professor: 'Carlos Patrício',
    shift: 'Manhã',
  },
  {
    course: 'Kotlin',
    students: 10,
    professor: 'Gabriel Oliva',
    shift: 'Noite',
  },
  {
    course: 'JavaScript',
    students: 738,
    professor: 'Gustavo Caetano',
    shift: 'Tarde',
  },
  {
    course: 'MongoDB',
    students: 50,
    shift: 'Noite',
  },
];

const getValueByNumber = (obj, index) => Object.values(obj)[index];



const somaAlunos = (obj) => {
    let soma = 0;
    for(let index = 0; index < obj.length; index += 1){
       soma += obj[index].students;
    } return soma;
    } 

const keyExists = (obj, key) => {
    for(let index = 0; index < obj.length; index += 1){
        if(obj[index][key] ===  undefined){
            return false;
        }
    }
    return true;
} 
console.log(keyExists(school, 'shift'));


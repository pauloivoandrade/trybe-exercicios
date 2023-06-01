let word = 'tryber';
let array = [];


for(let index = word.length - 1; index >=0 ; index -=1){
 array.push(word[index])
};


console.log(`A palavras invertida fica: ${array.join("")}`);

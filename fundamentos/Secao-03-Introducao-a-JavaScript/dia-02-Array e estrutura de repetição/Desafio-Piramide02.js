let n = 5;
let symbol= " ";
let inputPosition = n - 1;

for (let index = 0; index < n; index += 1) {
    for(let index2 = 0; index2 < n; index2 += 1){
        if(index2 < inputPosition) {  
         symbol = symbol + " ";
        } else 
        {symbol = symbol + "*";
     }

    }
    console.log(symbol);
    symbol = '';
    inputPosition -= 1;
 };
    

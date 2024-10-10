import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let Maxgetal = parseFloat(await userInput.question("Geef een max getal in; "))

for(let teControlerenGetal = 2; teControlerenGetal < Maxgetal; teControlerenGetal++){
   
    let Ispriemgetal = true;

    for(let deler = 2; deler < teControlerenGetal; deler++){

        if(teControlerenGetal % deler == 0){
            Ispriemgetal = false;
        }
    }
    if(Ispriemgetal == true){
        console.log(teControlerenGetal + " is een priemgetal. ");
        
    }else
        console.log(teControlerenGetal + "is geen priemgetal. ");
    
    }
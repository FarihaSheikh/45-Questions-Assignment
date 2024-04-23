"use strict";
let magician: string[] = ['Faizan', 'Ahmad', 'Saim', 'Salman'];

function copyArray(arr: string[]){
    return[...arr]
}


function make_great(magicianArray : string[]){
for(let i = 0; i < magicianArray.length; i++){

    magicianArray[i]  = 'the Great ' + magicianArray[i] 
}

}

function show_magicians(magicians : string[]){
    magicians.forEach(element => {
       console.log(element);
        
    });
}
const copyMagicianArray = copyArray(magician);

make_great(copyMagicianArray);

console.log('\n\nThis is my orignal array:');
show_magicians(magician);

console.log('\n\nThis is my modified copy of the array:');
show_magicians(copyMagicianArray);


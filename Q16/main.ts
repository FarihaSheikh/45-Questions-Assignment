

//  Excercise 16
// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program
//  informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your
//  list. 
// • Print a new set of invitation messages, one for each person in your list.


let Guest_list:string[]=['Mahnoor Ali','Rozina Narejo','Shagufta Aslam'];
// for(let i=0;i<Guest_list.length;i++){

//     console.log('Dear Miss '+ Guest_list[i] + ',\n\nWe are greatful to invite you in our dinner party.\n\nThank You!\n\n')
// }

let person_not_Coming :string = 'Mahnoor Ali' ;
let new_Guest :string = 'Rabiya Ghazal' ;

Guest_list[0] = new_Guest;

for(let i=0;i<Guest_list.length;i++){

    console.log('Dear Miss '+ Guest_list[i] + ',\n\nWe are greatful to invite you in our dinner party.\n\nThank You!\n\n')
}

console.log(`Miss. ${person_not_Coming} is not coming to the party.\n\n`);

console.log('Good News! We got a big table so we are inviting more guests.\n\n')

Guest_list.unshift('Ifrah Zubair');
Guest_list.splice(2 , 0 , 'Tooba');
Guest_list.push('Madiha Arif');

for(let i=0;i<Guest_list.length;i++){

    console.log('Dear Miss '+ Guest_list[i] + ',\n\nWe are greatful to invite you in our dinner party.\n\nThank You!\n\n')
}

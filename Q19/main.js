"use strict";
// Excercise 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
let Guest_list = ['Mahnoor Ali', 'Rozina Narejo', 'Shagufta Aslam'];
let person_not_Coming = 'Mahnoor Ali';
let new_Guest = 'Rabiya Ghazal';
Guest_list[0] = new_Guest;
Guest_list.unshift('Ifrah Zubair');
Guest_list.splice(2, 0, 'Tooba');
Guest_list.push('Madiha Arif');
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
}
Guest_list.splice(0, 2);
console.log(Guest_list);
//Excercise 19
//print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest are: ${Guest_list.length}`);

"use strict";
// Excercise 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
// only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
//  from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program.
let Guest_list = ['Mahnoor Ali', 'Rozina Narejo', 'Shagufta Aslam'];
// for(let i=0;i<Guest_list.length;i++){
//     console.log('Dear Miss '+ Guest_list[i] + ',\n\nWe are greatful to invite you in our dinner party.\n\nThank You!\n\n')
// }
let person_not_Coming = 'Mahnoor Ali';
let new_Guest = 'Rabiya Ghazal';
Guest_list[0] = new_Guest;
// for(let i=0;i<Guest_list.length;i++){
//     console.log('Dear Miss '+ Guest_list[i] + ',\n\nWe are greatful to invite you in our dinner party.\n\nThank You!\n\n')
// }
console.log(`Miss. ${person_not_Coming} is not coming to the party.\n\n`);
console.log('Good News! We got a big table so we are inviting more guests.\n\n');
Guest_list.unshift('Ifrah Zubair');
Guest_list.splice(2, 0, 'Tooba');
Guest_list.push('Madiha Arif');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Miss ' + Guest_list[i] + ',\n\nWe are greatful to invite you in our dinner party.\n\nThank You!\n\n');
}
console.log('\nSorry we can not arrange big table,only 2 peoples will be invited.');
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    console.log(`Sorry Miss. ${remove_Guest}, You are not invited for the party.`);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log('\nDear Miss ' + Guest_list[i] + ',\n\n You are still invited to the party.\n\nThank You!\n\n');
}
Guest_list.splice(0, 2);
console.log(Guest_list);

"use strict";
// Excercise 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations.You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest
//  who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let Guest_list = ['Mahnoor Ali', 'Rozina Narejo', 'Shagufta Aslam'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Miss ' + Guest_list[i] + ',\n\nWe are greatful to invite you in our dinner party.\n\nThank You!\n\n');
}
let person_not_Coming = 'Mahnoor Ali';
let new_Guest = 'Rabiya Ghazal';
Guest_list[0] = new_Guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Miss ' + Guest_list[i] + ',\n\nWe are greatful to invite you in our dinner party.\n\nThank You!\n\n');
}
console.log(`Miss. ${person_not_Coming} is not coming to the party.`);

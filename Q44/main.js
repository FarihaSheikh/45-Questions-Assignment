"use strict";
function makeSandwich (item :string[]) {
    console.log('\nMaking your sandwich with:');

item.forEach(element => console.log(" - " + element));

console.log('\nEnjoy your sandwich!\n');

}
makeSandwich(['Tomatoes', 'Ketchup', 'Chicken']);
makeSandwich(['Cheese', 'Mayonnise', 'Garlic Chicken']);
makeSandwich(['Lettuce', 'Butter', 'Eggs', 'Ketchup']);

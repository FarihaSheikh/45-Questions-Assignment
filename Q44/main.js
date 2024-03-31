"use strict";
function sandwich(...items) {
    console.log("Sandwich ingredients:");
    for (let i = 0; i < items.length; i++) {
        console.log(` - ${items[i]}`);
    }
}
console.log("Take your delicious sandwich Fariha Sheikh");
sandwich('Tomatoes', 'Ketchup', 'Chicken');
sandwich('Cheese', 'Mayonnise', 'Garlic Chicken');
sandwich('Lettuce', 'Butter', 'Eggs', 'Ketchup');

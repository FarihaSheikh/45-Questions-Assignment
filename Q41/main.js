"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ['faizan', 'ahmad', 'saim', 'salman'];
show_magicians(magician);

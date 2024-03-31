"use strict";
// Excercise 39
// City Names: Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
let country1 = city_country('Lahore', 'Pakistan');
let country2 = city_country('Canbera', 'Australia');
let country3 = city_country('Rome', 'Italy');
console.log(country1);
console.log(country2);
console.log(country3);

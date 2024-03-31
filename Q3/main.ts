
// Excercise # 3

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
//  uppercase, and titlecase.

let personName :string = 'Fariha';

// person's Name in Lowercase
console.log("Lowercase:" , personName.toLowerCase());

// person's Name in Uppercase
console.log("Uppercase:" , personName.toUpperCase());

// person's Name in Title case
console.log("Title Case:" , personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
toLowerCase()).join(' '))
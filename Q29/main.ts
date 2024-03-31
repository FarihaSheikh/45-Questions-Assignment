

// Excercise 29
// Favorite Fruit: Make a array of your favorite fruits, 
// and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!


const favourite_Fruits:string[]= ['Mango','Apple','Apricot'];

if (favourite_Fruits.includes('Mango')){
    console.log("I really like Mango!");
}

if (favourite_Fruits.includes('Apple')){
    console.log("I really like Apple!");

}
if (favourite_Fruits.includes('Apricot')){
    console.log("I really like Apricot!");
}

if (favourite_Fruits.includes('Grapes')){
    console.log("I really like Grapes");
}

if (favourite_Fruits.includes('Banana')){
    console.log("I really like Banana!");
}


// Excercise 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function make_shirt(size : string = 'large' , text: string = 'I love Typescipt.'): void{
    console.log(`You buy a ${size}, shirt that says: ${text}`)
}

make_shirt();

make_shirt('medium')

make_shirt('small', 'I like to visit Singapore.')
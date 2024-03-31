

// Excercise 21
// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.

interface person_Details {
  name :string
  age: number
  nationality: string
  student : Boolean
  
}
// Create two objects 
const person: person_Details ={
    name: 'Fariha',
    age: 27,
    nationality: 'Pakistani',
    student: true

}
interface items{
    name: string
    price: number
    model: string
}
const car: items ={
    name: 'Mercedes',
    price: 300000,
    model: 'EQS'

}
const mobile: items={
    name: 'Iphone',
    price: 400000,
    model: 'TSY'

}

console.log(`person name : ${person.name} , Age: ${person.age}, Nationality: ${person.nationality} , Student: ${person.student}`)
console.log(`car name : ${car.name} , price: ${car.price} , model: ${car.model}`)
console.log(`mobile name: ${mobile.name} , price: ${mobile.price} , model: ${mobile.model}`)

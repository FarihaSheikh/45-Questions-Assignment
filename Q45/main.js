"use strict";
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createCar('suzuki', 'corola', { color: "Black", year: "2023" });
console.log(mycar);

"use strict";
function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car : any = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "white"], ["year", 2023]));
console.log(make_car("Suzuki", "Mehran", ["color", "blue"], ["sunroof", true]));

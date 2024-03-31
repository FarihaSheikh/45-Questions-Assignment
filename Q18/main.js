// Excercise 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been
//  changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that 
// its order has changed.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the locations in an array. Make sure the array is not in alphabetical order.
var locations = ['Singapore', 'Austraila', 'Paris', 'Uinited States', 'India', 'Malaysia'];
//Print your array in its orignal order.
console.log('Orignal ' + locations);
// Print your array in alphabetical order without modifying the actual list.
console.log('Copy ' + __spreadArray([], locations, true).sort());
//Show that your array is still in its orignal order by printing it.
console.log('Orignal ' + locations);
//Print your array in reverse alphabetical order without changing the order of the orignal list.
console.log('Copy ' + __spreadArray([], locations, true).sort().reverse());
//Show that your array is still in its orignal order by printing it again.
console.log('Orignal ' + locations);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log('Orignal ' + locations.reverse());
//Reverse the order of your list again.Print the list to show it's back to its orignal order.
console.log('Orignal ' + locations.reverse());
//Sort your array so it's stored in alphabetical order.Print the array to show that its order has been changed.
console.log('Orignal ' + locations.sort());
//Sort to change your array so it's stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Orignal ' + locations.sort().reverse());

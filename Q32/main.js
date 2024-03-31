"use strict";
let current_users = ['talha', 'ibrahim', 'Mahnoor', 'Rozina', 'Neha'];
let new_users = ['ibrahim', 'talha', 'Shagufta', 'Farah', 'Hira'];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`);
    }
    else {
        console.log(`Yes ${new_user}, is still in available list`);
    }
}

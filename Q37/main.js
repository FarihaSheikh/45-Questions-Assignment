"use strict";
function make_shirt(size = 'large', text = 'I love Typescipt.') {
    console.log(`You buy a ${size}, shirt that says: ${text}`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'I like to visit Singapore.');

"use strict";
function make_album(artist, title) {
    const albums = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return albums;
}
let album = make_album("Atif Aslam", "Jal Pari");
console.log(album);
album = make_album("Junaid Jamshed", "Vital Signs");
console.log(album);
album = make_album("Ali Zafar", "Jhoom");
console.log(album);

"use strict";
function make_album(artist: string ,title: string, tracks?: number) {
    const albums :{artist: string, title: string, tracks?: number}={
        artist: artist,
        title: title
}
if(tracks !== undefined){
    albums.tracks = tracks;
}
    return albums;
}
const album1 = (make_album("Ali Zafar", "Jhoom"));
console.log(album1);

const album2 = (make_album("Atif Aslam", "Jal"));
console.log(album2);

const album3 =(make_album("Junaid Jamshed", "Vital Signs", 12));
console.log(album3);

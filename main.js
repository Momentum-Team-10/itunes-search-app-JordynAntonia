// creating the element's
const form = document.getElementById("form")
console.log(form);

const newSong = document.getElementById("new-song")
console.log(newSong);

const newArtist = document.getElementById("new-artist")
console.log(newArtist);

const newAlbum = document.getElementById("new-album")
console.log(newAlbum);

const bandName = document.getElementById("band-name")
console.log(bandName);

const container = document.getElementById("song-container")
console.log(container);

const url = "http://127.0.0.1:8080 https://itunes.apple.com/search?term=.";

// getting JSON from the Database

fetch(url)
.then((response) => response.json())
.then((data) => {
    console.log(data);

for(let item of data) {
    // create div containers 
}

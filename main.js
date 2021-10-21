// getting elements
const form = document.getElementById("form")
const songImage = document.getElementById(`song-image`)
const songTitle = document.getElementById(`song-title`)
const songArtist = document.getElementById(`song-artist`)
const artistAlbum = document.getElementById(`artist-album`)
const songNext = document.getElementById(`song-next-up`)
const container = document.getElementById(`song-container`)


// getting buttons 
const previousButton = document.getElementById(`previous-button`)
const playButtonIcon = document.getElementById(`play-icon`)
const playButton = document.getElementById(`play-button`)
const nextButton = document.getElementById(`next-button`)

// getting the music for player
const audioPlayer = document.getElementById(`audio-player`);
const url = "https://itunes.apple.com/search?parameterkeyvalue.";


// within the "form" we want to have a list of songs based on a certain Artist, copying the structure that is already on the CSS.
form.addEventListener("submit", (e) => {
    fetch(url, {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            // when the user clicks submit, the results should sort "cards" of the album, song title and the artist. Terms from Itunes search document.
            album: album,
            title: musicTrack.value,
            artist: musicArtist,
            
        })
    })
    // promises/respose/data/json
    .then(res => res.json())
    .then(data => {
        renderMusicCard(data)
    })
})

fetch(url)
    .then(res) => res.json())
    .then(data) => {
// taking the info from the body above to render functions and add the container
        for(let item of data) {
            renderMusicCard(item)
            // let musicCard = document.createElement("div")
            // renderAlbum(item, musicCard);
            // renderTitle(item, musicCard);
            // renderArtist(item, musicCard);
            // container.appendChild(musicCard);

        }
    };
    
        function renderMusicCard(item) {
            // how all of the items are displayed on each "card"
            let musicCard = document.createElement("div");
            musicCard.classList.add("musicCard")
            renderAlbum(item, musicCard);
            renderTitle(item, musicCard);
            renderArtist(item, musicCard);
            deleteMusicCard(musicCard);
            container.appendChild(musicCard);


        }

        function deleteMusicCard(musicCard) {
            let deletemusicCard = document.createElement("sort");
        }

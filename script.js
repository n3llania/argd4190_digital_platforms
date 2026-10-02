
let artists

fetch("artist.json").then(response => response.json())
    .then(json => {
       artists = json
        // console.log(json)
        for(let i = 0; i < artists.length; i++) {
            makeArtist(artists[i])
        }
        // lineup = json
    })

function makeArtist(artist) {
    let genres = artist.Genre.split(", ")
    
    
let newArtist = document.createElement("a")
    newArtist.innerHTML =
    `<div class="box imagebck" style='background-image: url(${artist.url});'>
            <h3 class="white boxtext">${artist.Artists}</h3>
    </div>`

    document.querySelector(".parent").appendChild(newArtist)

    }
const selectGenre = document.getElementById("genre-dropdown")



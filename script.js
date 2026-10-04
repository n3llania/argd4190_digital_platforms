
let artists

fetch("artist.json").then(response => response.json())
    .then(json => {
       artists = json
        //console.log(json)
        for(let i = 0; i < artists.length; i++) {
            makeArtist(artists[i])
        }
        // lineup = json
    })

function makeArtist(artist) {
    let newArtist = document.createElement("a")
    newArtist.innerHTML =
    `<a href='https://open.spotify.com/search/${artist.Artists}' target="_blank" rel="noopener noreferrer">
        <div class="box imagebck" style='background-image: linear-gradient(rgba(241, 104, 252, 0.6), rgba(241, 104, 252, 0.0), rgba(241, 104, 252, 0)), url(${artist.url});'>
            <h3 class="white boxtext">${artist.Artists}</h3>
        </div>
    </a>`

    document.querySelector(".parent").appendChild(newArtist)


    }

function filterList() {
    //console.log(this.value);
    //console.log(artists);

    const selgenre = document.getElementById("genre-dropdown").value;
    const selstage = document.getElementById("stage-dropdown").value;
    const seltime= document.getElementById("time-dropdown").value;
    const selday = document.getElementById("day-dropdown").value;

    //console.log(selday, selgenre, seltime, selstage)

    document.querySelector(".parent").innerHTML = '';
    for(let i = 0; i < artists.length; i++) {
                //let artist = artists[i].Artists;
                //console.log(artist);
                let genres = artists[i].Genre.split(", ");
                let stage = artists[i].Stage;
                let time = artists[i].Time;
                let day = artists[i].Day;
                //console.log(genres);
                if ((genres.includes(`${selgenre}`) || selgenre == 'All') &&
                   (stage == selstage || selstage == 'All') &&
                   (time == seltime || seltime == 'All') &&
                   (day == selday || selday == '0'))
                {
                    //console.log("its in!");
                    makeArtist(artists[i])
                }    
        }
}
document.getElementById("genre-dropdown").addEventListener("change", filterList)
document.getElementById("stage-dropdown").addEventListener("change", filterList)
document.getElementById("time-dropdown").addEventListener("change", filterList)
document.getElementById("day-dropdown").addEventListener("change", filterList)

document.getElementById("searchBar").addEventListener("input", namesearch)

function namesearch() {
    const seltext = document.getElementById("searchBar").value.toLowerCase();

    document.querySelector(".parent").innerHTML = '';
    for(let i = 0; i < artists.length; i++) {
        //let artist = artists[i].Artists;
        let artist = artists[i].Artists;        
        // console.log(artist, seltext);
        if (artist.toLowerCase().includes(`${seltext}`))
        {
            makeArtist(artists[i])
        }    
    }
}   
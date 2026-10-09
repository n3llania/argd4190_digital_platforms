
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
        <div class="box imagebck" style='background-image: linear-gradient(rgba(42, 42, 211, 0.6), rgba(42, 42, 211, 0.0), rgba(42, 42, 211, 0)), url(${artist.url});'>
            <h3 class="white boxtext">${artist.Artists}</h3>
                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4 c0,9.4,16,21.2,16,21.2s16-11.8,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                </svg>
            <div class="artist-hover">
                <p class="white text-hover">Day ${artist.Day} | ${artist.Time} | ${artist.Stage} Stage</p>
            </div>
        </div>
    </a>`

    document.querySelector(".parent").appendChild(newArtist)
//<svg class="heart-hover" id="heart" viewBox="0 0 32 29.6" xmlns="http://w3.org">
    //heart icon

    }

function filterList() {
    //console.log(this.value);
    //console.log(artists);

    const selgenre = document.getElementById("genre-dropdown").value;
    const selstage = document.getElementById("stage-dropdown").value;
    const seltime= document.getElementById("time-dropdown").value;
    const selday = document.getElementById("day-dropdown").value;
    const reset = document.getElementById("clear")
    const item = document.querySelectorAll("#genre-dropdown, #stage-dropdown, #time-dropdown, #day-dropdown")
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
// clear all filters
function resetFilters(){
    document.getElementById("searchBar").value = '';
    document.getElementById("genre-dropdown").value = 'All';
    document.getElementById("stage-dropdown").value = 'All';
    document.getElementById("time-dropdown").value = 'All';
    document.getElementById("day-dropdown").value = '0';

    document.querySelector(".parent").innerHTML = '';
    for (let i = 0; i < artists.length; i++) {
        makeArtist(artists[i]);
    }
}
document.getElementById("clear").addEventListener('click', resetFilters)

//hearticon

const heart = document.getElementById(heart)

heart.addEventListener("click", function(){
    heart.classList.toggle("filled")
})
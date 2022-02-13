const url = 'https://proxy-itunes-api.glitch.me/search?term='
document.querySelector("input").focus();


const searchBox = document.querySelector('#search-box')
let searchValue = searchBox.value
const searchText = document.querySelector('#search')

console.log(searchBox);
searchBox.addEventListener('submit', function(e) {
    e.preventDefault()
    fetch(url + searchText.value + "&media=music&limit=15")
    .then((res) => res.json())
    .then((data) => {
        let outputDiv = document.getElementById('tunes');
        console.log(data)
        let results = data.results
        for (let result of results) {
            const artistCard = document.createElement('div')
            artistCard.classList.add('artist-card')
            artistCard.innerHTML = `
            <img src="${result.artworkUrl100}">
            <p>${result.artistName}</p>
            <p>${result.trackName}</p>
            <audio controls src="${result.previewUrl}"></audio>
            `
            outputDiv.appendChild(artistCard)
        }
        searchBox.reset();
    }).catch(error => {
        console.log(error)
    }
    )
})
        // document.querySelector('#searchBox').innerHTML = `<p>${results.artistName}</p>`
    //     document.querySelector('#user-name').innerHTML = `<h2>${data.name}</h2>`
    // console.log(data.repos_url)

    // for (let result of data) {
    //     document.querySelector(
    //       '#search-box'
    //     ).innerHTML += `<p><a href=${repo.url}>${repo.name}</a></p>`
    // // return data.repos_url 
// function validateForm(){
//     let input=document.querySelector('')
// }

// connect search to fetch from the API a band name or artist name. The artist or band name must be in template literal to call any search term, i think.

// `${artistName}`
//make search dynamic for different results
//grab audio

// When the user types their search term and presses the submit button (or presses Enter), make the search request to the API.
// https://itunes.apple.com/search?term=jack+johnson&limit=15
// When the API returns a response, use the results to display a listing of songs related to the search term.
// When a user clicks a song in your listing, the song should play in an <audio> tag that you've also added to the page (see the mockup).
// the results we're looking for are image, song title, artist/band, <audio play/stop> which should be at the top of the page
// myAudioElement.addEventListener("canplaythrough")
// parameterkeyvalue = (``)
// <script src="https://"
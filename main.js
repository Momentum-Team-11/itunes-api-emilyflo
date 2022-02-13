const url = 'https://proxy-itunes-api.glitch.me/search?term=nirvana'

document.querySelector("input").focus();

// function searchiTunes(name) {
// }

const musicBox = document.querySelector('#searchBox')
console.log(musicBox);
musicBox.addEventListener('click', function() {
    fetch(url)
    .then((res) => res.json())
    .then((results => {
        console.log(data);
        document.getElementById('tunes');
        console.log('tunes');
        tunes.innerHTML = `
        <p>${results.artistName}</p>
        <p>${results.trackName}</p>
        `
    //     document.querySelector('#user-name').innerHTML = `<h2>${data.name}</h2>`
    // console.log(data.repos_url)
    // return data.repos_url 
    }))
})
// function validateForm(){
//     let input=document.querySelector('')
// }

// connect search to fetch from the API a band name or artist name. The artist or band name must be in template literal to call any search term, i think.

// `${artistName}`

// When the user types their search term and presses the submit button (or presses Enter), make the search request to the API.
// https://itunes.apple.com/search?term=jack+johnson&limit=15
// When the API returns a response, use the results to display a listing of songs related to the search term.
// When a user clicks a song in your listing, the song should play in an <audio> tag that you've also added to the page (see the mockup).
// the results we're looking for are image, song title, artist/band, <audio play/stop> which should be at the top of the page
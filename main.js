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
            <p><em>Genre</em>: ${result.primaryGenreName}</p>
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
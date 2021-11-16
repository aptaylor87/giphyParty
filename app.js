const token = "aQ0F6loLrpzjl1v9jtDNyyLd7I1Cjdcu";

//click listener to grab the search 
$('#giphy-search').on('submit', async function(evt) {
    evt.preventDefault();
    let searchTerm = $('#search-term').val();
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', { params: { q: searchTerm, api_key: token } });
    addGif(res.data);
    $('#search-term').val("");

});

//request gifs with a certain query term

function addGif(response) {
    if(response) {
        let randomIndex = Math.floor(Math.random() * 50);
        let $newDiv = $('<div>', { class: 'giphy-gif'});
        let $newGif = $('<img>', { src: response.data[randomIndex].images.original.url, class: "gif-itself" });
        $newDiv.append($newGif);
        $('.gif-area').append($newDiv);

        
    }
}

$('#delete').on('click', function() {
    $('.gif-area').empty();
});


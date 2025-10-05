
function getMovieName (){
    const movieName = document.querySelector('.search-text').value;
    fetch(`https://api.tvmaze.com/search/shows?q=${movieName}`)
    .then(response => response.json())
    .then(data => {
        console.log(data) 
        for(let movies of data){
            const imgSource = movies.show.image.original;
            const img = document.createElement('img');
            img.id = movieName;
            img.src = imgSource;

            document.querySelector('.content').appendChild(img)
        }
    })
    .catch(error => console.error(error));
}
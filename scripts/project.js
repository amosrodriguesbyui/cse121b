/* Declare and initialize global variables */
const form = document.querySelector('#preference');
const movieListElement = document.querySelector('#movieList');

/* Event Listener for the form */
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const genres = formData.getAll('genre');
    const releaseYears = formData.get('release-year').split(',').map(year => year.trim());

    const movieList = await getMovieRecommendations(genres, releaseYears);
    displayMovies(movieList);
});

/* Function to get movie recommendations */
const getMovieRecommendations = async (genres, releaseYears) => {
    const genreQuery = genres.map(genre => `with_genres=${genre}`); 
    const releaseYearQuery = releaseYears.map(year => `primary_release_year=${year}`);

    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ff4b1af46bc95c0c29c24911794de903&${genreQuery}&${releaseYearQuery}`);

    if(response.ok) {
        const data = await response.json();
        return data.results;
    } else {
        console.error('Failed to fetch movie recommendations');
        return [];
    }
}

/* Function to display the list of movies */
const displayMovies = (movies) => {
    movieListElement.innerHTML = '';
    
    movies.forEach(movie => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = movie.title;
        
        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        img.alt = movie.title;
        
        article.appendChild(h3);
        article.appendChild(img);
        movieListElement.appendChild(article);
    });
}

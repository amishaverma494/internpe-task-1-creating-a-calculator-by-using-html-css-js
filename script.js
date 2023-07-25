// Sample data for movies/TV shows (You can replace this with actual data from an API)
const moviesData = [
  { title: "Movie 1", imageUrl: "path-to-image1.jpg" },
  { title: "Movie 2", imageUrl: "path-to-image2.jpg" },
  // Add more movie data...
];

const tvShowsData = [
  { title: "TV Show 1", imageUrl: "path-to-image3.jpg" },
  { title: "TV Show 2", imageUrl: "path-to-image4.jpg" },
  // Add more TV show data...
];

// Function to display movies
function displayMovies() {
  const moviesContainer = document.createElement("div");
  moviesContainer.classList.add("movies-container");

  moviesData.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const image = document.createElement("img");
    image.src = movie.imageUrl;

    const title = document.createElement("h2");
    title.textContent = movie.title;

    movieCard.appendChild(image);
    movieCard.appendChild(title);
    moviesContainer.appendChild(movieCard);
  });

  document.querySelector("main").appendChild(moviesContainer);
}

// Function to display TV shows
function displayTVShows() {
  const tvShowsContainer = document.createElement("div");
  tvShowsContainer.classList.add("tv-shows-container");

  tvShowsData.forEach((tvShow) => {
    const tvShowCard = document.createElement("div");
    tvShowCard.classList.add("tv-show-card");

    const image = document.createElement("img");
    image.src = tvShow.imageUrl;

    const title = document.createElement("h2");
    title.textContent = tvShow.title;

    tvShowCard.appendChild(image);
    tvShowCard.appendChild(title);
    tvShowsContainer.appendChild(tvShowCard);
  });

  document.querySelector("main").appendChild(tvShowsContainer);
}

// Call the functions to display movies and TV shows
displayMovies();
displayTVShows();

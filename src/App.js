import { useState } from "react";
import "./App.css";
import DisplayMovies from "./DisplayMovies";

function App() {
  const [movies, setMovies] = useState([]);

  function fetchMovieHandler() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      });
  }

  return (
    <div className="App">
      <button
        type="button"
        onClick={fetchMovieHandler}
        class="btn btn-success mt-2"
      >
        Fetch Movies
      </button>
      <DisplayMovies data={movies} />
    </div>
  );
}

export default App;

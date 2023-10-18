import { useState } from "react";
import "./App.css";
import DisplayMovies from "./DisplayMovies";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Failed to fetch data from the SWAPI");
      }

      const data = await response.json();
      if (data.results) {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
        setIsLoading(false);
      } else {
        throw new Error("Data structure from SWAPI is not as expected");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <button
        type="button"
        onClick={fetchMovieHandler}
        className="btn btn-success mt-2"
      >
        Fetch Movies
      </button>
      <section>
        {!isLoading && movies.length > 0 && <DisplayMovies data={movies} />}
        {!isLoading && movies.length === 0 && <p>No Movies found</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </div>
  );
}

export default App;

import { useCallback, useEffect, useState } from "react";
import DisplayMovies from "./DisplayMovies";
import MovieForm from "./MovieForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retrying, setRetrying] = useState(false);
  const [retryIntervalId, setRetryIntervalId] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-movies-2c340-default-rtdb.firebaseio.com/movies.json"
      );
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
      } else {
        throw new Error("Data structure from SWAPI is not as expected");
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  function handleCancelRetryClick() {
    setRetrying(false);
    if (retryIntervalId) {
      // Clear the interval using clearInterval
      clearInterval(retryIntervalId);
    }
  }

  function handleRetryClick() {
    setRetrying(true);
    setRetryIntervalId(setInterval(() => fetchMovieHandler(), 5000));
  }

  const addMovieHandle = async (movie) => {
    const response = await fetch(
      "https://react-movies-2c340-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  let content = <p>No Movies found</p>;

  if (movies.length > 0) {
    content = <DisplayMovies data={movies} />;
  }

  if (error) {
    content = (
      <div>
        <p>{error}</p>
        {retrying ? (
          <button onClick={handleCancelRetryClick} className="btn btn-danger">
            Cancel Retry
          </button>
        ) : (
          <button onClick={handleRetryClick} className="btn btn-primary">
            Retry
          </button>
        )}
      </div>
    );
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div>
      <MovieForm onAddMovie={addMovieHandle} />
      <div className="text-center">
        <button
          type="button"
          onClick={fetchMovieHandler}
          className="btn btn-success mt-5"
        >
          Fetch Movies
        </button>
        <section>{content}</section>
      </div>
    </div>
  );
}

export default App;

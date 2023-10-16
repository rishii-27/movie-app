import "./App.css";
import DisplayMovies from "./DisplayMovies";

function App() {
  const movies = [
    {
      title: "The Shawshank Redemption",
      release_date: "September 23, 1994",
      opening_text:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      title: "The Godfather",
      release_date: "March 24, 1972",
      opening_text:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      title: "Pulp Fiction",
      release_date: "October 14, 1994",
      opening_text:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    },
    {
      title: "Forrest Gump",
      release_date: "July 6, 1994",
      opening_text:
        "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    },
    {
      title: "Inception",
      release_date: "July 16, 2010",
      opening_text:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    },
  ];

  return (
    <div className="App">
      <h1>Movie App</h1>
      <DisplayMovies data={movies} />
    </div>
  );
}

export default App;

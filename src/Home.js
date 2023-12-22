import { useState, useEffect } from "react";
import MoviePost from "./MoviesPost/moviePost";
const Home = () => {
  // USE STATE HOOK
  const [movies, setMovies] = useState(null);
  const [years, setYears] = useState(null);

  // FUNCTION CALLING
  const handleDeleteMovie = (id) => {
    console.log(id);
    const deletedMoviesArr = movies.filter((movie) => movie.imdbID !== id);
    setMovies(deletedMoviesArr);
  };
  useEffect(() => {
    fetch("http://localhost:8000/movies")
      .then((res) => res.json())
      .then((data) => {
        const moviesData = data;
        console.log(moviesData);
        setMovies(moviesData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="homepage p-4">
      <h2>Home Page</h2>
      { movies && 
        <MoviePost
          movies={movies}
          year="All"
          handleDeleteMovie={handleDeleteMovie}
        />
      }
    </div>
  );
};

export default Home;

import "./moviesPost.css";

const MoviePost = ({ movies, year, handleDeleteMovie }) => {
  return (
    <div className="moviespost">
      <h1 className="text-start m-4">{year}</h1>
      <div className="d-flex align-content-stretch flex-wrap justify-content-md-around">
        {movies.map((movie) => (
          <div
            className="card m-1"
            style={{ width: "18rem" }}
            key={movie.imdbID}
          >
            <img
              className="w100"
              src={movie.Poster}
              alt="Card cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <button onClick={() => handleDeleteMovie(movie.imdbID)}>Delete Movie</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePost;

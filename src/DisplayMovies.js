import React from "react";

const DisplayMovies = ({ data, onDeleteMovie }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container">
      <div className="row">
        {data.map((movie) => (
          <div key={movie.id} className="col-md-6 col-lg-4 g-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {formatDate(movie.releaseDate)}
                </h6>
                <p className="card-text">{movie.openingText}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteMovie(movie.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayMovies;

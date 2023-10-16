import React from "react";

const DisplayMovies = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map((movie, index) => (
          <div key={index} className="col-md-6 col-lg-4 g-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {movie.release_date}
                </h6>
                <p className="card-text">{movie.opening_text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayMovies;

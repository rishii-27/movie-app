import React from "react";

const DisplayMovies = ({ data }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container">
      <div className="row">
        {data.map((movie, index) => (
          <div key={index} className="col-md-6 col-lg-4 g-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {formatDate(movie.releaseDate)}
                </h6>
                <p className="card-text">{movie.openingText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayMovies;

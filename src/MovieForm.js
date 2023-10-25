import React, { useRef } from "react";

const MovieForm = () => {
  const titleRef = useRef(null);
  const openingTextRef = useRef(null);
  const releaseDateRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovieObj = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };
    console.log("New Movie Object:", newMovieObj);

    // Optionally, you can clear the form input values using useRef:
    titleRef.current.value = "";
    openingTextRef.current.value = "";
    releaseDateRef.current.value = "";
  };

  return (
    <div
      className="container border p-4 mt-5"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <h1 className="text-center">Movie Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputTitle" className="form-label fw-bold">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTitle"
            ref={titleRef}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputOpeningText" className="form-label fw-bold">
            Opening Text
          </label>
          <textarea
            className="form-control"
            id="inputOpeningText"
            ref={openingTextRef}
            rows="3"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputReleaseDate" className="form-label fw-bold">
            Release Date
          </label>
          <input
            type="date"
            className="form-control"
            id="inputReleaseDate"
            ref={releaseDateRef}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default MovieForm;

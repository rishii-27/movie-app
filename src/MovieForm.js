import React, { useState } from "react";

const MovieForm = () => {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Movie Object:", {
      title,
      openingText,
      releaseDate,
    });
    setTitle("");
    setOpeningText("");
    setReleaseDate("");
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={openingText}
            onChange={(e) => setOpeningText(e.target.value)}
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
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
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

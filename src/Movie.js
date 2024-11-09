import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-title">{movie.Title}</div>
    </div>
  );
};

export default Movie;
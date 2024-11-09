import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import Movie from "./Movie";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("Harry-Potter");

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  const fetchMovies = useCallback(
    async (query) => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
        );
        const data = await response.json();
        setMovies(data.Search || []);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    },
    [API_KEY]
  );

  useEffect(() => {
    fetchMovies(searchQuery);
  }, [fetchMovies, searchQuery]);

  return (
    <div className="app">
      <Header title="Assignment6H8" setSearchQuery={setSearchQuery} />
      <h1 className="h2 text-start m-4">Show your favorite movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <Movie key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;

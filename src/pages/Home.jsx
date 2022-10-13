const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
// Styles
import './MoviesGrid.css';

function Home() {
  const {movies, setMovies} = useFetch();

  return (
    <div className="container">
        <h2 className="title">Melhores Filmes</h2>
        <div className="movies-container">
        {movies.length === 0 && <p>Loading movies...</p>}
        {movies.length > 0 && movies.map((movie, index) => (
          <MovieCard movie={movie} key={index}/>
          ))}
        </div>
    </div>
  )
}

export default Home
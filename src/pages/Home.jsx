import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
// Styles
import './MoviesGrid.css';

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results)
  }
  useEffect(() => {
    const topRatedURL = `${movieURL}top_rated?${apiKey}`;
    
    getTopRatedMovies(topRatedURL)
  }, [])


  return (
    <div className="container">
        <h2 className="title">Melhores Filmes</h2>
        <div className="movies-container">
        {topMovies.length === 0 && <p>Loading movies...</p>}
        {topMovies.length > 0 && topMovies.map((movie, index) => (
          <MovieCard movie={movie} key={index}/>
          ))}
        </div>
    </div>
  )
}

export default Home
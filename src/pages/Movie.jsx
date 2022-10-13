import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs';
import MovieCard from '../components/MovieCard';
import { NavLink } from "react-router-dom";
//Style
import './Movie.css'

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Movie() {
  
  const [movies, setMovies] = useState([]);
  const {id} = useParams();

    const getAllMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data)
      }
      useEffect(() => {
        const topRatedURL = `${movieURL}${id}?${apiKey}`;
        getAllMovies(topRatedURL)
      }, []);


  return (
    <div className="movie-page">
      {movies && 
      <>
      <MovieCard movie={movies} showLink={false} />
      <p className="tagline">{movies.tagline}</p>
      <div className="info">
        <h3>
          <BsWallet2 /> Orçamento:
        </h3>
        <p>{movies.budget}</p>
      </div>
      <div className="info">
        <h3>
          <BsGraphUp /> Faturamento/Receita:
        </h3>
        <p>{movies.revenue}</p>
      </div>
      <div className="info">
        <h3>
          <BsHourglassSplit /> Duração do filme:
        </h3>
        <p>{movies.runtime}</p>
      </div>
      <div className="info description">
        <h3>
          <BsFillFileEarmarkTextFill /> Descrição:
        </h3>
        <p>{movies.overview}</p>
      </div>
      <NavLink to='/' className='submit'>Voltar</NavLink>
      </>}
    </div>
  )
}

export default Movie
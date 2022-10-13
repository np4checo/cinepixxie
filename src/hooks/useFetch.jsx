import { useEffect, useState } from "react";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function useFetch() {

    const [movies, setMovies] = useState([])

    const getAllMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results)
      }
      useEffect(() => {
        const topRatedURL = `${movieURL}top_rated?${apiKey}`;
        
        getAllMovies(topRatedURL)
      }, []);

      return {movies, setMovies, getAllMovies}

}

export default useFetch
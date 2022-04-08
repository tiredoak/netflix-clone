import React, { useState, useEffect } from 'react';
import axios from './axios';

const BASE_URL = 'https://image.tmdb.org./t/p/original/';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {/* several row___posters */}
        {movies.map((movie) => {
          return (
            <img
              className='row__poster'
              src={`${BASE_URL}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="search-results">
      {results.map((movie) => (
        <div className="movie-card" key={movie.id} onClick={() => handleClick(movie.id)}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
            <div className="rating-stars">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className={index < movie.vote_average / 2 ? 'star filled' : 'star'}>★</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;

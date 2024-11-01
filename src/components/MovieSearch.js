import React, { useState } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';
import './SearchMovies.css';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '4707ff4fc20b0735b93269395a573fe8',
          query,
        },
      });
      setResults(response.data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  return (
    <div className="search-movies">
      <h2>Search Movies</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>
      <SearchResults results={results} />
    </div>
  );
};

export default MovieSearch;

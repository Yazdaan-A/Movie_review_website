import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UpcomingMovies.css';

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const upcomingResponse = await axios.get('https://api.themoviedb.org/3/movie/upcoming', {
          params: {
            api_key: '4707ff4fc20b0735b93269395a573fe8',
          },
        });
        const latestResponse = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
          params: {
            api_key: '4707ff4fc20b0735b93269395a573fe8',
          },
        });
        setUpcomingMovies(upcomingResponse.data.results);
        setLatestMovies(latestResponse.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="upcoming-movies">
      <h2>Upcoming Movies</h2>
      <div className="movie-list">
        {upcomingMovies.map((movie) => (
          <div className="movie-card" key={movie.id} onClick={() => handleClick(movie.id)}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Latest Movies</h2>
      <div className="movie-list">
        {latestMovies.map((movie) => (
          <div className="movie-card" key={movie.id} onClick={() => handleClick(movie.id)}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovies;

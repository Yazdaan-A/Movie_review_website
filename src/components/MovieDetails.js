import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: '4707ff4fc20b0735b93269395a573fe8',
            append_to_response: 'videos,credits',
          },
        });
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <div className="movie-header">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div className="movie-meta">
            <span>Rating: {movie.vote_average}</span>
            <span>Release Date: {movie.release_date}</span>
            <span>Languages: {movie.spoken_languages.map(lang => lang.name).join(', ')}</span>
          </div>
        </div>
      </div>
      <h3>Cast</h3>
      <div className="movie-cast">
        {movie.credits.cast.map((member) => (
          <div key={member.id} className="cast-member">
            <img src={`https://image.tmdb.org/t/p/w200${member.profile_path}`} alt={member.name} />
            <p>{member.name}</p>
            <p>as {member.character}</p>
          </div>
        ))}
      </div>
      <h3>Trailers</h3>
      <div className="movie-trailers">
        {movie.videos.results.map((video) => (
          <iframe
            key={video.id}
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            width="560"
            height="315"
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;

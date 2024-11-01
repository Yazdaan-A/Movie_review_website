import React from 'react';
import './Home.css';
import MovieImages from './MovieImages';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Cinephile's Corner</h2>
      <p>Your ultimate destination for movie reviews, recommendations, and more. Explore our vast collection of movies, add your favorites, and share your thoughts with fellow cinephiles!</p>
      <div className="featured-movies">
        <h3>Featured Movies</h3>
        <MovieImages movieId={278} /> {/* The Shawshank Redemption */}
        <MovieImages movieId={238} /> {/* The Godfather */}
        <MovieImages movieId={155} /> {/* The Dark Knight */}
      </div>
    </div>
  );
};

export default Home;

// src/components/Favorites.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:5001/api/favorites', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setFavorites(response.data);
        } catch (error) {
          console.error('Failed to fetch favorites', error);
        }
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>Your Favorite Movies</h2>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;

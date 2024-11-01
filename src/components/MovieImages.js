import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieImages = ({ movieId }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/images`, {
          params: {
            api_key: '4707ff4fc20b0735b93269395a573fe8',
          },
        });
        setImages(response.data.backdrops);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [movieId]);

  return (
    <div className="movie-images">
      {images.map((image, index) => (
        <img key={index} src={`https://image.tmdb.org/t/p/w500/${image.file_path}`} alt={`Movie Poster`} style={{ width: '200px', margin: '10px' }} />
      ))}
    </div>
  );
};

export default MovieImages;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import MovieList from './components/MovieList';
import Login from './components/Login';
import Register from './components/Register';
import Favorites from './components/Favorites';
import Profile from './components/Profile';
import MovieSearch from './components/MovieSearch';
import MovieDetails from './components/MovieDetails';
import UpcomingMovies from './components/UpcomingMovies';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (token) => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src="/c-removebg-preview.png" alt="Cinephile's Corner Logo" className="logo" />
            <h1>Cinephile's Corner</h1>
          </div>
          <nav>
            <NavLink exact="true" to="/" activeclassname="active-link">Home</NavLink>
            <NavLink to="/movies" activeclassname="active-link">Movies</NavLink>
            <NavLink to="/coming-soon" activeclassname="active-link">Coming Soon</NavLink>
            <NavLink to="/contact" activeclassname="active-link">Contact</NavLink>
            <NavLink to="/search" activeclassname="active-link">Search</NavLink>
            {isLoggedIn && <NavLink to="/favorites" activeclassname="active-link">Favorites</NavLink>}
            {isLoggedIn && <NavLink to="/profile" activeclassname="active-link">Profile</NavLink>}
            {!isLoggedIn ? (
              <>
                <NavLink to="/login" activeclassname="active-link">Login</NavLink>
                <NavLink to="/register" activeclassname="active-link">Register</NavLink>
              </>
            ) : (
              <button onClick={handleLogout}>Logout</button>
            )}
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<MovieSearch />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/coming-soon" element={<UpcomingMovies />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// src/App.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from "./services/authService"; // Updated import path
import { login, logout } from "./store/authslice";
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className='min-h-screen flex flex-col bg-gray-400'>
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <p>Loading...</p>
    </div>
  );
}

export default App;

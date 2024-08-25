// src/components/Login.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login as authLogin } from '../store/authslice';
import authService from '../services/authService'; // Updated import path
import { Button, Input, Logo } from './index';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const handleLogin = async (data) => {
    setError("");
    try {
      const userData = await authService.login(data);
      if (userData) {
        dispatch(authLogin(userData)); // Directly use the data returned
        navigate("/"); // Redirect to home or desired route
      }
    } catch (error) {
      setError(error.message || 'An error occurred while logging in.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <div className="flex justify-center mb-4">
          <Logo />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign in to your account</h2>
        <p className="mt-2 text-center text-gray-600">
          Don&apos;t have an account?&nbsp;
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
        <form onSubmit={handleSubmit(handleLogin)} className="mt-6 space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email address must be valid",
              },
            })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
          <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;

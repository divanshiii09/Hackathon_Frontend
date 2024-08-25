

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Logo } from './index';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleForgotPassword = async (data) => {
    setError("");
    setSuccess("");
    try {
      // Call your backend service to handle forgot password request
      await fakeBackendForgotPassword(data.email);  // Replace with actual backend call
      setSuccess("Password reset instructions have been sent to your email.");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Forgot Password</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Enter your email address below to reset your password.
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        {success && <p className="text-green-600 mt-8 text-center">{success}</p>}
        <form onSubmit={handleSubmit(handleForgotPassword)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be a valid address",
                },
              })}
            />
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;

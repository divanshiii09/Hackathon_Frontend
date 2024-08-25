import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function AuthLayout({ children, requireAuth = true }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (requireAuth && !authStatus) {
      navigate('/login');
    } else if (!requireAuth && authStatus) {
      navigate('/');
    }
    setLoading(false);
  }, [authStatus, navigate, requireAuth]);

  return loading ? <h1>Loading...</h1> : <>{children}</>;
}

import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the homepage.</p>
      <button onClick={handleLoginClick}>Go to Login Page</button>
    </div>
  );
};

export default HomePage;
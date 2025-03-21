import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <h1 className="text-2xl font-extrabold">404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default NotFound;
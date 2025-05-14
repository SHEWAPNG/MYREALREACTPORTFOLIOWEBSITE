
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="text-center p-8 max-w-md">
        <div className="text-9xl font-bold text-primary-foreground">404</div>
        <h1 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h1>
        <p className="text-lg text-darkText/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

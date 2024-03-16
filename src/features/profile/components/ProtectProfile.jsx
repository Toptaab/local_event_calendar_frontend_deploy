import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../auth/hooks/auth';

function ProtectProfile({ children }) {
  const allAuthObj = useAuth();
  const { authUser } = allAuthObj;
  const accessToken = localStorage.getItem('accessToken');

  return (
    <div>
      {accessToken ? (
        // Redirect to profile page if authenticated
        children
      ) : (
        // Redirect to home page if not authenticated
        <Navigate to='/' />
      )}
    </div>
  );
}

export default ProtectProfile;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigatorButton({ children, link }) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type='button'
        onClick={() => navigate(link)}
        className='p-4 rounded-2xl flex justify-center items-center bg-primary drop-shadow-[0.1rem_0.2rem_0.1rem_rgba(0,0,0,0.25)]'
      >
        {children}
      </button>
    </div>
  );
}

export default NavigatorButton;

import React from 'react';

const Button = ({ children, onClick, type = 'button', disabled = false, style }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '10px 20px',
        backgroundColor: '#2d8659',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.3s ease',
        ...style,
      }}
      onMouseEnter={e => {
        if (!disabled) e.currentTarget.style.backgroundColor = '#246b47';
      }}
      onMouseLeave={e => {
        if (!disabled) e.currentTarget.style.backgroundColor = '#2d8659';
      }}
    >
      {children}
    </button>
  );
};

export default Button;


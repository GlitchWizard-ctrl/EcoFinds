import React from 'react';

export const Input = ({ placeholder }) => (
  <input
    placeholder={placeholder}
    style={{
      padding: '6px 10px',
      border: '1px solid #aaa',
      borderRadius: '4px',
      width: '200px',
    }}
  />
);

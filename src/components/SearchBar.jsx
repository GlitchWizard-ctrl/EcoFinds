import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleChange}
        style={styles.input}
        aria-label="Search products"
      />
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '1rem',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    width: '100%',
    padding: '0.6rem 1rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1.5px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
};

export default SearchBar;

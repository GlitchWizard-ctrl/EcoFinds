// src/components/Header.jsx
import React from 'react';

const Header = ({ children }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>EcoFinds</h1>
      <nav>{children}</nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#2a9d8f',
    color: 'white',
  },
  title: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: '700',
  },
};

export default Header;

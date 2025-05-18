import React from 'react';
import CartIcon from './CartIcon';

const Header = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title} onClick={handleRefresh} title="Click to refresh page">
        EcoFinds
      </h1>
      <CartIcon />
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
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    userSelect: 'none',
  },
  title: {
    margin: 0,
    cursor: 'pointer',
    fontSize: '1.8rem',
    fontWeight: '700',
  },
};

export default Header;


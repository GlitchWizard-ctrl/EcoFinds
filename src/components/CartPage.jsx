import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const CartPage = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div style={styles.pageContainer}>
      <Header />
      <main style={styles.mainContent}>
        <h1>Your Cart</h1>
        <p>Your Cart is Empty.</p>
        <Button onClick={handleBackHome}>Back to Home</Button>
      </main>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '100vh',
    backgroundColor: '#f4f7f6',
  },
  mainContent: {
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '1rem',
    textAlign: 'center',
  },
};

export default CartPage;

import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const CartPage = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  // Remove item from cart
  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Update quantity for a cart item
  const handleQuantityChange = (id, delta) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0) // optional: remove if quantity 0
    );
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.pageContainer}>
      <Header />
      <main style={styles.mainContent}>
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <>
            <p>Your Cart is Empty.</p>
            <Button onClick={handleBackHome}>Back to Home</Button>
          </>
        ) : (
          <>
            <div style={styles.cartList}>
              {cartItems.map(({ id, name, price, imageUrl, quantity }) => (
                <div key={id} style={styles.cartItem}>
                  <img src={imageUrl} alt={name} style={styles.image} />
                  <div style={styles.details}>
                    <h3>{name}</h3>
                    <p>Price: ₹ {price.toLocaleString('en-IN')}</p>
                    <div style={styles.quantityControls}>
                      <Button onClick={() => handleQuantityChange(id, -1)}>-</Button>
                      <span style={styles.quantity}>{quantity}</span>
                      <Button onClick={() => handleQuantityChange(id, 1)}>+</Button>
                    </div>
                    <Button
                      variant="default"
                      onClick={() => handleRemove(id)}
                      style={{ marginTop: '0.5rem' }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div style={styles.totalSection}>
              <h2>Total: ₹ {totalAmount.toLocaleString('en-IN')}</h2>
              <Button onClick={handleBackHome} variant="primary">
                Continue Shopping
              </Button>
            </div>
          </>
        )}
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
  cartList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  cartItem: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    alignItems: 'center',
  },
  image: {
    width: '120px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '6px',
  },
  details: {
    flex: 1,
    textAlign: 'left',
  },
  quantityControls: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  quantity: {
    minWidth: '24px',
    textAlign: 'center',
    fontWeight: '600',
  },
  totalSection: {
    textAlign: 'right',
  },
};

export default CartPage;

// src/components/ProductList.jsx
import React from 'react';
import Button from './ui/Button';

const ProductList = ({ visibleProducts, onAddToCart }) => {
  if (!visibleProducts || visibleProducts.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <section>
      <div style={styles.productGrid}>
        {visibleProducts.map(({ id, name, price, imageUrl }) => (
          <div key={id} style={styles.card}>
            <img src={imageUrl} alt={name} style={styles.image} />
            <h3 style={styles.name}>{name}</h3>
            <p style={styles.price}>₹ {price.toLocaleString('en-IN')}</p>
            <Button onClick={() => onAddToCart({ id, name, price, imageUrl })} variant="primary">
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))',
    gap: '1rem',
  },
  card: {
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    padding: '1rem',
    textAlign: 'center',
    background: '#ffffff',
    transition: 'transform 0.15s ease-in-out',
    cursor: 'default',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '140px',
    objectFit: 'cover',
    marginBottom: '0.75rem',
    borderRadius: '4px',
  },
  name: {
    margin: '0 0 0.5rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#264653',
  },
  price: {
    margin: '0 0 1rem',
    color: '#2a9d8f',
    fontWeight: '700',
    fontSize: '1rem',
  },
};

export default ProductList;

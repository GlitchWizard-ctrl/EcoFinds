// src/components/Banner.jsx
import React from 'react';

const Banner = ({ imageUrl, productName }) => {
  const styles = {
    container: {
      width: '100%',
      height: '300px',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '8px',
      marginBottom: '1.5rem',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'brightness(0.75)',
    },
    textOverlay: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontSize: '2rem',
      fontWeight: 'bold',
      textShadow: '0 2px 6px rgba(0,0,0,0.7)',
    },
  };

  return (
    <div style={styles.container}>
      <img src={imageUrl} alt={productName} style={styles.image} />
      {productName && <div style={styles.textOverlay}>{productName}</div>}
    </div>
  );
};

export default Banner;

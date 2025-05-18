import React from 'react';

const Banner = ({ imageUrl, productName }) => {
  const handleClick = () => {
    if (imageUrl) {
      window.open(imageUrl, '_blank');
    }
  };

  return (
    <div style={styles.banner} onClick={handleClick} title={`View ${productName}`}>
      <img src={imageUrl} alt={productName} style={styles.image} />
      <div style={styles.overlay}>
        <h2 style={styles.text}>{productName}</h2>
        <p style={styles.subtext}>Click to view full image</p>
      </div>
    </div>
  );
};

const styles = {
  banner: {
    position: 'relative',
    cursor: 'pointer',
    width: '100%',
    maxHeight: '300px',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    marginBottom: '1.5rem',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  overlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'rgba(42, 157, 143, 0.7)',
    color: 'white',
    padding: '1rem 1.5rem',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
  },
  text: {
    margin: 0,
    fontSize: '1.6rem',
    fontWeight: '700',
  },
  subtext: {
    marginTop: '0.25rem',
    fontSize: '0.9rem',
    fontWeight: '400',
    opacity: 0.85,
  },
};

export default Banner;


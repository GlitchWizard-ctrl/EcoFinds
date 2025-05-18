import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartIcon = ({ count = 0 }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <div
      style={styles.cartContainer}
      onClick={handleClick}
      title="Go to Cart"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleClick();
      }}
      aria-label={`Shopping cart with ${count} item${count !== 1 ? 's' : ''}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={styles.icon}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293-2.293a1 1 0 00-.707-.707L3 10m4 3v6m10-6v6m-6-6v6m-6 0h12"
        />
      </svg>

      <span style={styles.cartText}>Cart</span>

      {count > 0 && <span style={styles.badge}>{count}</span>}
    </div>
  );
};

const styles = {
  cartContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'white',
    userSelect: 'none',
    outline: 'none',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
  cartText: {
    marginLeft: '8px',
    fontWeight: '600',
    fontSize: '1rem',
  },
  badge: {
    position: 'absolute',
    top: '-6px',
    right: '-6px',
    backgroundColor: '#e76f51',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 7px',
    fontSize: '0.75rem',
    fontWeight: '700',
    minWidth: '20px',
    textAlign: 'center',
    pointerEvents: 'none', // so clicks pass through badge to container
  },
};

export default CartIcon;

import React, { useState, useMemo } from 'react';
import Button from './ui/Button';
import SearchBar from './SearchBar';
const handleSearch = (searchTerm) => {
  setFilterText(searchTerm);
};
const demoProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 2999,
    imageUrl: 'https://via.placeholder.com/150?text=Headphones',
  },
  {
    id: 2,
    name: 'Classic Denim Jacket',
    category: 'Clothing',
    price: 2599,
    imageUrl: 'https://via.placeholder.com/150?text=Denim+Jacket',
  },
  {
    id: 3,
    name: 'Bamboo Cutting Board',
    category: 'Home',
    price: 799,
    imageUrl: 'https://via.placeholder.com/150?text=Cutting+Board',
  },
  {
    id: 4,
    name: 'Smart LED Lamp',
    category: 'Electronics',
    price: 1299,
    imageUrl: 'https://via.placeholder.com/150?text=LED+Lamp',
  },
  {
    id: 5,
    name: 'Fantasy Novel',
    category: 'Books',
    price: 499,
    imageUrl: 'https://via.placeholder.com/150?text=Novel',
  },
  {
    id: 6,
    name: 'Cotton T-Shirt',
    category: 'Clothing',
    price: 499,
    imageUrl: 'https://via.placeholder.com/150?text=T-Shirt',
  },
];

const ProductList = ({ selectedCategory }) => {
  const [sortOrder, setSortOrder] = useState('asc'); // asc or desc
  const [groupBy, setGroupBy] = useState(null); // null or "category"

  // Filter products by category
  const filteredProducts = useMemo(() => {
    return selectedCategory
      ? demoProducts.filter((p) => p.category === selectedCategory)
      : demoProducts;
  }, [selectedCategory]);

  // Sort products by price
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
  }, [filteredProducts, sortOrder]);

  // Group products by category
  const groupedProducts = useMemo(() => {
    if (!groupBy) {
      return { All: sortedProducts };
    }
    return sortedProducts.reduce((groups, product) => {
      groups[product[groupBy]] = groups[product[groupBy]] || [];
      groups[product[groupBy]].push(product);
      return groups;
    }, {});
  }, [sortedProducts, groupBy]);

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const handleGroupToggle = () => {
    setGroupBy((prev) => (prev ? null : 'category'));
  };

  return (
    <section>
      <div style={styles.controls}>
        <Button onClick={handleSortToggle} variant="primary">
          Sort Price: {sortOrder === 'asc' ? 'Low ➔ High' : 'High ➔ Low'}
        </Button>
        <Button onClick={handleGroupToggle} variant={groupBy ? 'primary' : 'default'}>
          {groupBy ? 'Ungroup' : 'Group by Category'}
        </Button>
      </div>

      {Object.entries(groupedProducts).map(([group, products]) => (
        <div key={group} style={styles.groupSection}>
          {groupBy && <h2 style={styles.groupTitle}>{group}</h2>}
          <div style={styles.productGrid}>
            {products.map(({ id, name, price, imageUrl }) => (
              <div key={id} style={styles.card}>
                <img src={imageUrl} alt={name} style={styles.image} />
                <h3 style={styles.name}>{name}</h3>
                <p style={styles.price}>₹ {price.toLocaleString('en-IN')}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

const styles = {
  controls: {
    display: 'flex',
    gap: '16px',
    marginBottom: '1rem',
    flexWrap: 'wrap',
  },
  groupSection: {
    marginBottom: '2rem',
  },
  groupTitle: {
    margin: '0 0 0.75rem',
    fontSize: '1.5rem',
    borderBottom: '2px solid #2a9d8f',
    paddingBottom: '0.25rem',
    fontWeight: '700',
  },
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
    margin: 0,
    color: '#2a9d8f',
    fontWeight: '700',
    fontSize: '1rem',
  },
};

export default ProductList;

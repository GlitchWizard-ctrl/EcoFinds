import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CategoryFilter from '../components/CategoryFilter';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

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

const categories = Array.from(new Set(demoProducts.map((p) => p.category)));

const EcoFindsHomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products by category and search term
  const filteredProducts = useMemo(() => {
    return demoProducts.filter((product) => {
      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div style={styles.pageContainer}>
      <Header />
      <main style={styles.mainContent}>
        <Banner
          imageUrl="https://via.placeholder.com/1200x300?text=Featured+Product"
          productName="Featured Product"
        />
        <CategoryFilter categories={categories} onFilterChange={handleFilterChange} />
        <SearchBar onSearch={handleSearchChange} />
        <ProductList visibleProducts={filteredProducts} />
      </main>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f4f7f6',
    minHeight: '100vh',
  },
  mainContent: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
};

export default EcoFindsHomePage;

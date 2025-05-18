import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CategoryFilter from '../components/CategoryFilter';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import Button from '../components/ui/Button';
import CartIcon from '../components/CartIcon';
<main>
  <Banner
    imageUrl="https://imgs.search.brave.com/tCx-g9fILpqyeb_lQoQPEfZpF-3pcK7Md1q3OZr6mB4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFHZ1Jn/ZktlVUkvMS8wLzE2/MDB3L2NhbnZhLWJs/dWUtbW9kZXJuLXJh/bWFkYW4tc2FsZS1i/YW5uZXItdGEyYVFz/NjBVeFUuanBn"
    productName="Featured Product"
  />
</main>
const demoProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 2999,
    imageUrl:
      'https://imgs.search.brave.com/mbkmA0XkDLt0DUWAWKmyDGXssSENOzTe1A1U7zw2D9A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9weXhp/cy5ueW1hZy5jb20v/djEvaW1ncy9lYTcv/NmJiLzdkZWYzNDFk/OTMxOTkwNDQ1NWY5/MjIzY2ZkMjFlZGYw/MmIucnNxdWFyZS53/NjAwLmpwZw',
  },
  {
    id: 2,
    name: 'Classic Denim Jacket',
    category: 'Clothing',
    price: 2599,
    imageUrl:
      'https://imgs.search.brave.com/6KtYo-LRPoSLRTvIks2ib69w4rlZ1aRE0Wu23XMfsHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQyOTAxMzc4L3Iv/aWwvMjNiZjBlLzUy/OTgyNDE5OTQvaWxf/NjAweDYwMC41Mjk4/MjQxOTk0X2Jqb2su/anBn',
  },
  {
    id: 3,
    name: 'Bamboo Cutting Board',
    category: 'Home',
    price: 799,
    imageUrl:
      'https://imgs.search.brave.com/uB42UVIoFWqRxvWXUg6uSjIRrv3EU-XEdcp00SuCxKE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlZWF0/cy5jb20vdGhtYi9i/dkdBSDVuVlpWQk5k/cjVfQmhYQlJMb0Zh/SnM9L2ZpdC1pbi8x/NTAweDEwMDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/dG90YWxseS1iYW1i/b28tMy1waWVjZS1i/YW1ib28tY3V0dGlu/Zy1ib2FyZC1zZXQt/MTg3NzVlMGYxOWQ1/NDdkNWEzOTNkMjRi/MjFhNGFhZmUuanBn',
  },
  {
    id: 4,
    name: 'Smart LED Lamp',
    category: 'Electronics',
    price: 1299,
    imageUrl:
      'https://imgs.search.brave.com/Rb-N5ySzYGIDP8fjC9JIkxGlwELJgnGRGJRhORuL9n8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFVUEhXamZHWkwu/anBn',
  },
  {
    id: 5,
    name: 'Fantasy Novel',
    category: 'Books',
    price: 499,
    imageUrl:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 6,
    name: 'Cotton T-Shirt',
    category: 'Clothing',
    price: 499,
    imageUrl:
      'https://imgs.search.brave.com/jeqhYEzGDuaPB9ud9x-6DWsI-at-PSwoVGVlH3_14iA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFOeFdsQWRycEwu/anBn',
  },
];


const categories = Array.from(new Set(demoProducts.map((p) => p.category)));

const EcoFindsHomePage = ({ cartItems, setCartItems, onLogout }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // asc or desc
  const [groupBy, setGroupBy] = useState(null); // null or "category"

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

  // Sort filtered products by price
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
  }, [filteredProducts, sortOrder]);

  // Group products by category (optional)
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

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const handleGroupToggle = () => {
    setGroupBy((prev) => (prev ? null : 'category'));
  };

  // Add product to cart (if already in cart, increase quantity)
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={styles.pageContainer}>
      <Header>
        <CartIcon count={totalCartCount} />
      </Header>
      <main style={styles.mainContent}>
        <Banner
          imageUrl="https://via.placeholder.com/1200x300?text=Featured+Product"
          productName="Featured Product"
        />
        <CategoryFilter categories={categories} onFilterChange={handleFilterChange} />
        <SearchBar onSearch={handleSearchChange} />
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
            <ProductList visibleProducts={products} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </main>
    </div>
  );
};

const styles = {
  pageContainer: {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  backgroundColor: '#e6f4ea',  // light green
  minHeight: '100vh', 
  },
  mainContent: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
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
  borderBottom: '2px solid #2a9d8f', // teal-green
  paddingBottom: '0.25rem',
  fontWeight: '700',
}
}

export default EcoFindsHomePage;

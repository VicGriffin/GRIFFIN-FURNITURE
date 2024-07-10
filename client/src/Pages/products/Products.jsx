import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './products.css';
import { IoMdClose } from 'react-icons/io';

function useProductPreview() {
  const [activePreview, setActivePreview] = useState(null);

  const openPreview = (id) => {
    setActivePreview(id);
  };

  const closePreview = () => {
    setActivePreview(null);
  };

  return { activePreview, openPreview, closePreview };
}

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { activePreview, openPreview, closePreview } = useProductPreview();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch('http://localhost:3001/users/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId, quantity = 1) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:3001/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

      const data = await response.json();
      alert('Product added to cart!');
    } catch (error) {
      console.error(error);
      setError('Failed to add product to cart');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="products-container">
        <h3 className="title">Products</h3>
        {error && <p className="error">{error}</p>}
        <div className="product-container">
          {products.map((product) => (
            <div className="product" data-name={product.id} key={product.id} onClick={() => openPreview(product.id)}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="price"><button>${product.price}</button></div>
            </div>
          ))}
        </div>
      </div>
      <div className="product-preview" style={{ display: activePreview ? 'flex' : 'none' }}>
        {products.map((product) => (
          <div className={`preview ${activePreview === product.id ? 'active' : ''}`} data-target={product.id} key={product.id}>
            <button className="fas fa-times" onClick={closePreview}><IoMdClose /></button>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet mollitia itaque neque iure ullam est delectus officia alias quaerat?</p>
            <div className="price">${product.price}</div>
            <div className="buttons">
              <Link to="/cart" className="buy">buy</Link>
              <button className="cart" onClick={() => handleAddToCart(product.id)} disabled={loading}>
                {loading ? 'Adding to Cart...' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;

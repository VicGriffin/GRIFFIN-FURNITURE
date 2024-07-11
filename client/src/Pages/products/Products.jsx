import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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

  const handleAddToCart = (product) => {
    navigate('/Cart', {
      state: {
        product: {
          id: product.id,
          img: product.image,
          name: product.name,
          price: product.price,
        },
      },
    });
  };

  return (
    <>
      <div className="products-container">
        <h3 className="title">Products</h3>
        {error && <p className="error">{error}</p>}
        <div className="product-container">
          {products.map((product) => (
            <div className="product"
              data-name={product.id}
              key={product.id} onClick={() => openPreview(product.id)}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="price">
                <button>${product.price}</button>
              </div>
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
              <button className="cart" onClick={() => handleAddToCart(product)} disabled={loading}>
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

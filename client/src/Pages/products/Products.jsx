import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './products.css';
import { IoMdClose } from 'react-icons/io';
import r1_img from '../../assets/rocking-products/rocking1.jpeg';
import r2_img from '../../assets/rocking-products/rocking2.jpeg';
import r3_img from '../../assets/rocking-products/rocking3.jpeg';
import r4_img from '../../assets/rocking-products/rocking4.jpeg';
import r5_img from '../../assets/rocking-products/rocking5.jpeg';
import r6_img from '../../assets/rocking-products/rocking6.jpeg';
import r7_img from '../../assets/rocking-products/rocking7.jpeg';
import r8_img from '../../assets/rocking-products/rocking8.jpeg';

const productData = [
  { id: 'p-1', img: r1_img, name: 'rocking chair', price: '20.00' },
  { id: 'p-2', img: r2_img, name: 'rocking chair', price: '20.00' },
  { id: 'p-3', img: r3_img, name: 'rocking chair', price: '20.00' },
  { id: 'p-4', img: r4_img, name: 'rocking chair', price: '20.00' },
  { id: 'p-5', img: r5_img, name: 'rocking chair', price: '20.00' },
  { id: 'p-6', img: r6_img, name: 'rocking chair', price: '20.00' },
  { id: 'p-7', img: r7_img, name: 'rocking chair', price: '20.00' },
  { id: 'p-8', img: r8_img, name: 'rocking chair', price: '20.00' },
];

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { activePreview, openPreview, closePreview } = useProductPreview();

  const handleAddToCart = async (productId, quantity = 1) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3001/cart', {
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
          {productData.map((product) => (
            <div className="product" data-name={product.id} key={product.id} onClick={() => openPreview(product.id)}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="price"><button>${product.price}</button></div>
            </div>
          ))}
        </div>
      </div>
      <div className="product-preview" style={{ display: activePreview ? 'flex' : 'none' }}>
        {productData.map((product) => (
          <div className={`preview ${activePreview === product.id ? 'active' : ''}`} data-target={product.id} key={product.id}>
            <button className="fas fa-times" onClick={closePreview}><IoMdClose /></button>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet mollitia itaque neque iure ullam est delectus officia alias quaerat?</p>
            <div className="price">${product.price}</div>
            <div className="buttons">
              <Link to="/cart" className="buy">buy now</Link>
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

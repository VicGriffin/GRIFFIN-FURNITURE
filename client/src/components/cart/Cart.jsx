import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './cart.css';

const Cart = ({ products = [] }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:3001/cart');
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCartItems();
  }, []);

  const validationSchema = Yup.object({
    quantity: Yup.number().min(1, 'Must be at least 1').required('Required'),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3001/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

      const data = await response.json();
      setCartItems([...cartItems, data.cartItem]);
      alert('Product added to cart!');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      productId: '',
      quantity: 1,
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <section className="cart">
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <form className="cart-form" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <select
              name="productId"
              value={formik.values.productId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="cart-select"
            >
              <option value="">Select Product</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} - ${product.price}
                </option>
              ))}
            </select>
            {formik.touched.productId && formik.errors.productId && (
              <p className="error">{formik.errors.productId}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="number"
              name="quantity"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Quantity"
              className="cart-input"
            />
            {formik.touched.quantity && formik.errors.quantity && (
              <p className="error">{formik.errors.quantity}</p>
            )}
          </div>
          <button type="submit" className="cart-button" disabled={loading}>
            {loading ? 'Adding to Cart...' : 'Add to Cart'}
          </button>
          {error && (
            <div className="error">
              <p>{error}</p>
            </div>
          )}
        </form>
      </div>
      <div className="cart-items">
        <h3>Cart Items</h3>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div>
                  <strong>{item.name}</strong> - Quantity: {item.quantity}, Total: ${item.price * item.quantity}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Cart;

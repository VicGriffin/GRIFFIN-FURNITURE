import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:3001/users/cart');
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/users/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCartItems();
    fetchProducts();
  }, []);

  const validationSchema = Yup.object({
    productId: Yup.string().required('Product is required'),
    quantity: Yup.number().min(1, 'Must be at least 1').required('Required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3001/users/cart', {
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
      toast.success('Product added to cart!');
      resetForm();
    } catch (error) {
      setError(error.message);
      toast.error('Failed to add product to cart');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:3001/users/cart/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete cart item');
      }

      setCartItems(cartItems.filter(item => item.id !== id));
      toast.success('Product removed from cart!');
    } catch (error) {
      setError(error.message);
      toast.error('Failed to remove product from cart');
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
  // const handleRefresh = e => {
  //   e.preventDefault();
  // }

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
          <button  type="submit" className="cart-button" disabled={loading}>
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
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <strong>{item.product.name}</strong> - Quantity: {item.quantity}, Total: ${item.product.price * item.quantity}
                  <button onClick={() => handleDelete(item.id)} className="delete-button">Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ToastContainer />
    </section>
  );
};

export default Cart;

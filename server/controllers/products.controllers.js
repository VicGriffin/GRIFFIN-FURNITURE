import React, { useEffect, useState } from 'react';
import './products.css';
import { IoMdClose } from "react-icons/io";
import { getProducts, createProduct } from './api'; // Assuming your API functions are in a file named api.js

const Products = () => {
  const [products, setProducts] = useState([]);
  const [activePreview, setActivePreview] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data); // Assuming your API returns data in { data } format like Axios
    } catch (error) {
      console.error('Failed to fetch products:', error);
      // Handle error state if necessary
    }
  };

  const openPreview = (id) => {
    setActivePreview(id);
  };

  const closePreview = () => {
    setActivePreview(null);
  };

  const handleCreateProduct = async (name, price, imageUrl) => {
    try {
      const response = await createProduct({ name, price, imageUrl });
      // Assuming you want to update products state after creation
      setProducts([...products, response.data]);
    } catch (error) {
      console.error('Failed to create product:', error);
      // Handle error state if necessary
    }
  };

  return (
    <>
      <div className="products-container">
        <h3 className="title">Products</h3>
        <div className="product-container">
          {products.map((product) => (
            <div className="product" data-name={product.id} key={product.id} onClick={() => openPreview(product.id)}>
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="price"><button>{`$${product.price.toFixed(2)}`}</button></div>
            </div>
          ))}
        </div>
      </div>
      <div className="product-preview" style={{ display: activePreview ? 'flex' : 'none' }}>
        {products.map((product) => (
          <div className={`preview ${activePreview === product.id ? 'active' : ''}`} data-target={product.id} key={product.id}>
            <button className="fas fa-times" onClick={closePreview}><IoMdClose /></button>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet mollitia itaque neque iure ullam est delectus officia alias quaerat?</p>
            <div className="price">{`$${product.price.toFixed(2)}`}</div>
            <div className="buttons">
              <a href="#" className="buy">buy now</a>
              <a href="#" className="cart">add to cart</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;

import React, { useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./cloud.css";

function Cloudinary() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const cloudName = 'dctthhvkg';
  const preset = 'furnitures';

  const handleUploadImage = async () => {
    if (!image || !name || !price) {
      toast.error("Please fill in all fields and select an image.");
      return null; // Return null if validation fails
    }

    const payload = new FormData();
    payload.append('file', image);
    payload.append('upload_preset', preset);

    try {
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, payload);
      const imageUrl = response.data.secure_url;
      toast.success("Image uploaded successfully!");
      return imageUrl; // Return image URL on successful upload
    } catch (err) {
      console.error(err);
      toast.error("Image upload failed. Please try again.");
      return null; // Return null if upload fails
    }
  };

  const handleAddProduct = async () => {
    const imageUrl = await handleUploadImage();
    if (!imageUrl) {
      return; // Stop if image upload failed
    }

    const priceNumber = parseFloat(price);
    const productData = {
      img: imageUrl, // Use 'img' instead of 'image'
      name,
      price: priceNumber
    };

    try {
      const result = await fetch("http://localhost:3001/users/products", {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const resultJson = await result.json();
      toast.success("Product added successfully!");
      console.log(resultJson);
    } catch (err) {
      console.error(err);
      toast.error("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="cloudinary">
      <div className="cloudinary-container">
        <ToastContainer />
        <h1>Upload Product</h1>
        <div className="cloudinary-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="cloudinary-input"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Product Price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              className="cloudinary-input"
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              onChange={e => setImage(e.target.files[0])}
              className="cloudinary-file"
            />
          </div>
          <button onClick={handleAddProduct} className="cloudinary-button">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cloudinary;

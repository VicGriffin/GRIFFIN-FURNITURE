import React, { useState } from 'react';
import './hero.css';
import { Link } from 'react-router-dom';
import B_img from '../../assets/hero-img/hero.jpeg';
import B1_img from '../../assets/hero-img/hero2.jpeg';
import B2_img from '../../assets/hero-img/hero3.jpeg';
import B3_img from '../../assets/hero-img/hero4.jpeg';

function Hero() {
  const [thumbnails, setThumbnails] = useState([
    { id: 1, img: B_img, title: 'Modern', description: 'description' },
    { id: 2, img: B1_img, title: 'Modern', description: 'description' },
    { id: 3, img: B2_img, title: 'Modern', description: 'description' },
    { id: 4, img: B3_img, title: 'Modern', description: 'description' },
  ]);

  return (
    <div className="hero-section">
      <div className="upper-hero">
        <input type="text" placeholder="search" />
        <button><Link to="/">Orders</Link></button>
        <button><Link to="/">New</Link></button>
        <button><Link to="/">Offers</Link></button>
      </div>
      <div className="middle-hero">
        <a href="#">furnitures</a>
        <a href="#">indoor</a>
        <a href="#">outdoors</a>
        <a href="#">kitchen</a>
        <a href="#">more</a>
      </div>
      <div className="lower-hero">
        <h1>GRIFFINS</h1>
        <h2>furnitures</h2>
        <p>we value quality and satisfaction to our <br /> customers</p>
      </div>
      <div className="thumbnails">
        {thumbnails.map((item) => (
          <div key={item.id} className="thumbnail">
            <img src={item.img} alt="" />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;

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
      </div>
      <div className="middle-hero dropdown">
      <div className="dropdown">
        <button><a href="#">furnitures</a></button>
          <div className="dropdown-menu">
            <a href="#">Tables</a>
            <a href="#">desks</a>
            <a href="#">closet storage</a>
            <a href="#">towers</a>
          </div>
        </div> <div className="dropdown">
        <button><a href="#">indoors</a></button>
          <div className="dropdown-menu">
            <a href="#">sofas</a>
            <a href="#">recliners</a>
            <a href="#">endtables</a>
            <a href="#">tv stand</a>
          </div>
        </div> <div className="dropdown">
        <button><a href="#">outdoors</a></button>
          <div className="dropdown-menu">
            <a href="#">outdoor benches</a>
            <a href="#">outdoor chairset</a>
            <a href="#">outdoor convo set</a>
            <a href="#">patio umbrela</a>
          </div>
        </div> <div className="dropdown">
        <button><a href="#">dinning</a></button>
          <div className="dropdown-menu">
            <a href="#">dinning room collection</a>
            <a href="#">dinning room set</a>
            <a href="#">dinning room chairs</a>
            <a href="#">dinning room tables</a>
          </div>
        </div> <div className="dropdown">
        <button><a href="#">more</a></button>
          <div className="dropdown-menu">
            <a href="#">shop by style</a>
            <a href="#">new arrivals</a>
            <a href="#">home ideas</a>
            <a href="#">exclusively at griffins</a>
          </div>
        </div>
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

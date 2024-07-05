import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './store.css';
import S1_img from '../../assets/stores-img/billiani.jpeg';
import S2_img from '../../assets/stores-img/kisumu.jpeg';
import S3_img from '../../assets/stores-img/mombasa.jpeg';
import S4_img from '../../assets/stores-img/mountke.jpeg';
import S5_img from '../../assets/stores-img/nairobi.jpeg';

function Store() {
  const [stores, setStores] = useState([
    {
      img: S2_img,
      alt: "USA Store",
      name: "USA Store",
      description: "Griffins Furniture’s flagship store offers a wide variety of stylish and modern furniture for all tastes."
    },
    {
      img: S1_img,
      alt: "Billiani Store",
      name: "Billiani Store",
      description: "High-end, Italian-inspired pieces make Billiani a luxurious addition to Griffins Furniture’s portfolio."
    },
    {
      img: S3_img,
      alt: "Norway Store",
      name: "Norway Store",
      description: "Coastal-inspired designs, perfect for beachfront homes and tropical aesthetics, define the Mombasa branch."
    },
    {
      img: S5_img,
      alt: "New york Store",
      name: "NEW YORK Store",
      description: "Vibrant, colorful furniture pieces ideal for lakeside living and contemporary urban styles."
    },
    {
      img: S4_img,
      alt: "Kenya Store",
      name: "Kenya Store",
      description: "Eco-friendly, rustic furniture reflecting the natural beauty of the Kenya region."
    }
  ]);

  return (
    <div className="store-container">
      <div className='store-heading'>
        <h3>Most Popular Stores in the world</h3>
      </div>
      <section className='card-name'>
        {stores.map((store, index) => (
          <div className="card-section" key={index}>
            <div className="card-body">
              <img src={store.img} alt={store.alt} />
              <div className="info">
                <h3>{store.name}</h3>
                <p>{store.description}</p>
                <button><Link to="/Products">see more &#8599;</Link></button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Store;

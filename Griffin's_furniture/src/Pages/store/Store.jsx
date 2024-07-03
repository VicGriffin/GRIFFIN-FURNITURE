import React from 'react';
import { Link } from 'react-router-dom';
import './store.css';
import S1_img from '../../assets/stores-img/billiani.jpeg'
import S2_img from '../../assets/stores-img/kisumu.jpeg'
import S3_img from '../../assets/stores-img/mombasa.jpeg'
import S4_img from '../../assets/stores-img/mountke.jpeg'
import S5_img from '../../assets/stores-img/nairobi.jpeg'

function Store() {
  return (
    <>
      <div className='heading'>
        <h1>Most Popular Stores in Kenya</h1>
      </div>
      <section className='card-name'>
        <div className="card-section">
          <div className="card-body">
            <img src={S2_img} alt="Kisumu Store" />
            <div className="info">
              <h3>Kisumu Store</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim delectus eligendi sit doloribus. Magni consequatur harum voluptate perferendis tempora necessitatibus aliquid. Eos natus corporis laudantium autem voluptates id eius?</p>
            </div>
          </div>
        </div>
        <div className="card-section">
          <div className="card-body">
            <img src={S1_img} alt="Nakuru Store" />
            <div className="info">
              <h3>Billiani store</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim delectus eligendi sit doloribus. Magni consequatur harum voluptate perferendis tempora necessitatibus aliquid. Eos natus corporis laudantium autem voluptates id eius?</p>
            </div>
          </div>
        </div>
        <div className="card-section">
          <div className="card-body">
            <img src={S3_img} alt="Mombasa Store" />
            <div className="info">
              <h3>Mombasa Store</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim delectus eligendi sit doloribus. Magni consequatur harum voluptate perferendis tempora necessitatibus aliquid. Eos natus corporis laudantium autem voluptates id eius?</p>
            </div>
          </div>
        </div>
        <div className="card-section">
          <div className="card-body">
            <img src={S5_img} alt="Nairobi Store" />
            <div className="info">
              <h3>Nairobi Store</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim delectus eligendi sit doloribus. Magni consequatur harum voluptate perferendis tempora necessitatibus aliquid. Eos natus corporis laudantium autem voluptates id eius?</p>
            </div>
          </div>
        </div>
        <div className="card-section">
          <div className="card-body">
            <img src={S4_img} alt="Mount Kenya Store" />
            <div className="info">
              <h3>Mount Kenya Store</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim delectus eligendi sit doloribus. Magni consequatur harum voluptate perferendis tempora necessitatibus aliquid. Eos natus corporis laudantium autem voluptates id eius?</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Store;

import React, { useEffect } from 'react';
import './products.css';
import { IoMdClose } from "react-icons/io";
import r1_img from '../../assets/rocking-products/rocking1.jpeg';
import r2_img from '../../assets/rocking-products/rocking2.jpeg';
import r3_img from '../../assets/rocking-products/rocking3.jpeg';
import r4_img from '../../assets/rocking-products/rocking4.jpeg';
import r5_img from '../../assets/rocking-products/rocking5.jpeg';
import r6_img from '../../assets/rocking-products/rocking6.jpeg';
import r7_img from '../../assets/rocking-products/rocking7.jpeg';
import r8_img from '../../assets/rocking-products/rocking8.jpeg';

function Products() {
  useEffect(() => {
    const previewContainer = document.querySelector('.product-preview');
    const previewBox = document.querySelectorAll('.preview');

    document.querySelectorAll('.products-container .product').forEach(product => {
      product.onclick = () => {
        previewContainer.style.display = 'flex';
        const name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
          preview.classList.remove('active');  // Ensure all previews are inactive
          const target = preview.getAttribute('data-target');
          if (name === target) {
            preview.classList.add('active');
          }
        });
      };
    });

    previewBox.forEach(close => {
      close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
      };
    });
  }, []);

  return (
    <>
      <div className="products-container">
        <h3 className="title">Products</h3>
        <div className="product-container">
          <div className="product" data-name="p-1">
            <img src={r1_img} alt="Rocking Chair" />
            <h3>rocking chair</h3>
            <div className="price"><button>$20.00</button></div>
          </div>
          <div className="product" data-name="p-2">
            <img src={r2_img} alt="Rocking Chair" />
            <h3>rocking chair</h3>
            <div className="price"><button>$20.00</button></div>
          </div>
          <div className="product" data-name="p-3">
            <img src={r3_img} alt="Rocking Chair" />
            <h3>rocking chair</h3>
            <div className="price"><button>$20.00</button></div>
          </div>
          <div className="product" data-name="p-4">
            <img src={r4_img} alt="Rocking Chair" />
            <h3>rocking chair</h3>
            <div className="price"><button>$20.00</button></div>
          </div>
          <div className="product" data-name="p-5">
            <img src={r5_img} alt="Rocking Chair" />
            <h3>rocking chair</h3>
            <div className="price"><button>$20.00</button></div>
          </div>
          <div className="product" data-name="p-6">
            <img src={r6_img} alt="Rocking Chair" />
            <h3>rocking chair</h3>
            <div className="price"><button>$20.00</button></div>
          </div>
          <div className="product" data-name="p-7">
            <img src={r7_img} alt="Rocking Chair" />
            <h3>rocking chair</h3>
            <div className="price"><button>$20.00</button></div>
          </div>
          <div className="product" data-name="p-8">
            <img src={r8_img} alt="Rocking Chair" />
            <h3>rocking chair</h3>
            <div className="price"><button>$20.00</button></div>
          </div>
        </div>
      </div>
      <div className="product-preview">
        <div className="preview" data-target="p-1">
          <button className="fas fa-times"><IoMdClose /></button>
          <img src={r1_img} alt="Rocking Chair" />
          <h3>rocking chair</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet mollitia itaque neque iure ullam est delectus officia alias quaerat?</p>
          <div className="price">$20.00</div>
          <div className="buttons">
            <a href="" className="buy">buy now</a>
            <a href="" className="cart">add to cart</a>
          </div>
        </div>
        <div className="preview" data-target="p-2">
          <button className="fas fa-times"><IoMdClose /></button>
          <img src={r2_img} alt="Rocking Chair" />
          <h3>rocking chair</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet mollitia itaque neque iure ullam est delectus officia alias quaerat?</p>
          <div className="price">$20.00</div>
          <div className="buttons">
            <a href="" className="buy">buy now</a>
            <a href="" className="cart">add to cart</a>
          </div>
        </div>
        <div className="preview" data-target="p-3">
          <button className="fas fa-times"><IoMdClose /></button>
          <img src={r3_img} alt="Rocking Chair" />
          <h3>rocking chair</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet mollitia itaque neque iure ullam est delectus officia alias quaerat?</p>
          <div className="price">$20.00</div>
          <div className="buttons">
            <a href="" className="buy">buy now</a>
            <a href="" className="cart">add to cart</a>
          </div>
        </div>
        <div className="preview" data-target="p-4">
          <button className="fas fa-times"><IoMdClose /></button>
          <img src={r4_img} alt="Rocking Chair" />
          <h3>rocking chair</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet mollitia itaque neque iure ullam est delectus officia alias quaerat?</p>
          <div className="price">$20.00</div>
          <div className="buttons">
            <a href="" className="buy">buy now</a>
            <a href="" className="cart">add to cart</a>
          </div>
        </div>
        <div className="preview" data-target="p-5">
          <button className="fas fa-times"><IoMdClose /></button>
          <img src={r5_img} alt="Rocking Chair" />
          <h3>rocking chair</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet mollitia itaque neque iure ullam est delectus officia alias quaerat?</p>
          <div className="price">$20.00</div>
          <div className="buttons">
            <a href="" className="buy">buy now</a>
            <a href="" className="cart">add to cart</a>
          </div>
        </div>
        <div className="preview" data-target="p-6">
          <button className="fas fa-times"><IoMdClose /></button>
          <img src={r6_img} alt="Rocking Chair" />
          <h3>rocking chair</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet mollitia itaque neque iure ullam est delectus officia alias quaerat?</p>
          <div className="price">$20.00</div>
          <div className="buttons">
            <a href="" className="buy">buy now</a>
            <a href="" className="cart">add to cart</a>
          </div>
        </div>
        <div className="preview" data-target="p-7">
          <button className="fas fa-times"><IoMdClose /></button>
          <img src={r7_img} alt="Rocking Chair" />
          <h3>rocking chair</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet mollitia itaque neque iure ullam est delectus officia alias quaerat?</p>
          <div className="price">$20.00</div>
          <div className="buttons">
            <a href="" className="buy">buy now</a>
            <a href="" className="cart">add to cart</a>
          </div>
        </div>
        <div className="preview" data-target="p-8">
          <button className="fas fa-times"><IoMdClose /></button>
          <img src={r8_img} alt="Rocking Chair" />
          <h3>rocking chair</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet mollitia itaque neque iure ullam est delectus officia alias quaerat?</p>
          <div className="price">$20.00</div>
          <div className="buttons">
            <a href="" className="buy">buy now</a>
            <a href="" className="cart">add to cart</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;

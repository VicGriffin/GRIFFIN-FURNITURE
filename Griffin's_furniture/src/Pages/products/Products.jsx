import React from 'react'
import './products.css'
import r1_img from '../../assets/rocking-products/rocking1.jpeg'
import r2_img from '../../assets/rocking-products/rocking2.jpeg'
import r3_img from '../../assets/rocking-products/rocking3.jpeg'
import r4_img from '../../assets/rocking-products/rocking4.jpeg'
import r5_img from '../../assets/rocking-products/rocking5.jpeg'
import r6_img from '../../assets/rocking-products/rocking6.jpeg'
import r7_img from '../../assets/rocking-products/rocking7.jpeg'
import r8_img from '../../assets/rocking-products/rocking8.jpeg'
function Products() {
  return (
    <>
    <div className="products-container">
      <h3 className="title">Products</h3>
      <div className="product-container">

      <div className="product">
        <img src={r1_img} alt="" />
        <h3>rocking chair</h3>
        <div className="price"><button>$20.00</button></div>
      </div>

      <div className="product">
        <img src={r2_img} alt="" />
        <h3>rocking chair</h3>
        <div className="price"><button>$20.00</button></div>
      </div>

      <div className="product">
        <img src={r3_img} alt="" />
        <h3>rocking chair</h3>
        <div className="price"><button>$20.00</button></div>
      </div>

      <div className="product">
        <img src={r4_img} alt="" />
        <h3>rocking chair</h3>
        <div className="price"><button>$20.00</button></div>
      </div>

      <div className="product">
        <img src={r5_img} alt="" />
        <h3>rocking chair</h3>
        <div className="price"><button>$20.00</button></div>
      </div>

      <div className="product">
        <img src={r6_img} alt="" />
        <h3>rocking chair</h3>
        <div className="price"><button>$20.00</button></div>
      </div>

      <div className="product">
        <img src={r7_img} alt="" />
        <h3>rocking chair</h3>
        <div className="price"><button>$20.00</button></div>
      </div>

      <div className="product">
        <img src={r8_img} alt="" />
        <h3>rocking chair</h3>
        <div className="price"><button>$20.00</button></div>
      </div>

      </div>
    </div>
    </>
  )
}

export default Products
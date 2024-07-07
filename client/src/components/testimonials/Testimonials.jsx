import React from 'react'
import './testimonials.css'
import T1_img from '../../assets/testimonial-img/testimonials1.jpeg'
import T2_img from '../../assets/testimonial-img/testimonials2.jpeg'
import T3_img from '../../assets/testimonial-img/testimonials3.jpeg'
import T4_img from '../../assets/testimonial-img/testimonials4.jpeg'
import T5_img from '../../assets/testimonial-img/testimonials5.jpeg'

function Testimonials() {
  return (
    <>
      <div className="heading-test">
        <h1>Testimonials</h1>
      </div>
      <div className="testimonials">
        <div className="lists">
          <div className="item" id="item1" data-tooltip="Outstanding experience! Griffins Furniture provides elegance and comfort for all"><img src={T1_img} alt="" /></div>
          <div className="item" id="item2" data-tooltip="Griffins Furniture transformed our home! Stunning pieces and excellent durability"><img src={T2_img} alt="" /></div>
          <div className="item" id="item3" data-tooltip="Absolutely love our new sofa! Griffins Furniture never disappoints"><img src={T3_img} alt="" /></div>
          <div className="item" id="item4" data-tooltip="Remarkable craftsmanship, elegant furniture, and superb value at Griffins Furniture"><img src={T4_img} alt="" /></div>
          <div className="item" id="item5" data-tooltip="Griffins Furniture: Stylish designs, exceptional quality, and unmatched customer service!"><img src={T5_img} alt="" /></div>
        </div>
      </div>
    </>
  )
}

export default Testimonials

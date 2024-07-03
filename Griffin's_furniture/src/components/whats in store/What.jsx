import React, { useEffect, useRef } from 'react';
import './what.css';
import { PiArrowBendRightDownFill } from "react-icons/pi";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import Chair1 from '../../assets/whats-in-store-img/whats-in-store1-removebg-preview.png';
import Chair2 from '../../assets/whats-in-store-img/whats-in-store2-removebg-preview.png';
import Chair3 from '../../assets/whats-in-store-img/whats-in-store3-removebg-preview.png';
import Chair4 from '../../assets/whats-in-store-img/whats-in-store4-removebg-preview.png';

function What() {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const backButtonRef = useRef(null);
  const seeMoreButtonsRef = useRef([]);

  useEffect(() => {
    const nextButton = nextButtonRef.current;
    const prevButton = prevButtonRef.current;
    const backButton = backButtonRef.current;
    const carousel = carouselRef.current;
    const listREACT = listRef.current;
    const seeMoreButtons = seeMoreButtonsRef.current;

    let unAcceptClick;

    const showSlider = (type) => {
      nextButton.style.pointerEvents = 'none';
      prevButton.style.pointerEvents = 'none';

      carousel.classList.remove('prev', 'next');
      let items = listREACT.querySelectorAll('.item');
      if (type === 'next') {
        listREACT.appendChild(items[0]);
        carousel.classList.add('next');
      } else {
        let positionLast = items.length - 1;
        listREACT.prepend(items[positionLast]);
        carousel.classList.add('prev');
      }
      clearTimeout(unAcceptClick);
      unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
      }, 2000);
    };

    nextButton.onclick = () => showSlider('next');
    prevButton.onclick = () => showSlider('prev');

    seeMoreButtons.forEach(button => {
      button.onclick = () => {
        carousel.classList.add('showDetail');
      };
    });

    backButton.onclick = () => {
      carousel.classList.remove('showDetail');
    };

    // Cleanup event listeners on unmount
    return () => {
      nextButton.onclick = null;
      prevButton.onclick = null;
      backButton.onclick = null;
      seeMoreButtons.forEach(button => {
        button.onclick = null;
      });
    };
  }, []);

  return (
    <>
      <section className="whats-in-store">
        <div className="heading">
          What's in store
          <button className='btn'><PiArrowBendRightDownFill /></button>
        </div>
        <div className="carousel" ref={carouselRef}>
          <div className="list" ref={listRef}>
            <div className="item">
              <img src={Chair1} alt="chair" />
              <div className="intro">
                <div className="title">GRIFFINS FURNITURE</div>
                <div className="topic">Chair</div>
                <div className="describe">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, adipisci?
                </div>
                <button className='seeMore' ref={el => seeMoreButtonsRef.current[0] = el}>
                  see more &#8599;
                </button>
              </div>
              <div className="detail">
                <div className="title">comfy chair</div>
                <div className="describe">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dignissimos atque quo expedita. Optio, consectetur ipsam fugiat illo, asperiores eaque repudiandae quaerat placeat amet cumque eveniet officia ratione sapiente delectus?
                </div>
                <div className="specification">
                  <div>
                    <p>used time</p>
                    <p>NEW</p>
                  </div>
                  <div>
                    <p>size</p>
                    <p>1.5m x 1.5m</p>
                  </div>
                  <div>
                    <p>compatible</p>
                    <p>indoors</p>
                  </div>
                  <div>
                    <p>price</p>
                    <p>1000$</p>
                  </div>
                </div>
                <div className="checkout">
                  <button className='checkoutBtn'>ADD TO CART</button>
                  <button className='checkoutBtn'>checkout</button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={Chair2} alt="chair" />
              <div className="intro">
                <div className="title">GRIFFINS FURNITURE</div>
                <div className="topic">Chair</div>
                <div className="describe">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, adipisci?
                </div>
                <button className='seeMore' ref={el => seeMoreButtonsRef.current[1] = el}>
                  see more &#8599;
                </button>
              </div>
              <div className="detail">
                <div className="title">comfy chair</div>
                <div className="describe">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dignissimos atque quo expedita. Optio, consectetur ipsam fugiat illo, asperiores eaque repudiandae quaerat placeat amet cumque eveniet officia ratione sapiente delectus?
                </div>
                <div className="specification">
                  <div>
                    <p>used time</p>
                    <p>NEW</p>
                  </div>
                  <div>
                    <p>size</p>
                    <p>1.5m x 1.5m</p>
                  </div>
                  <div>
                    <p>compatible</p>
                    <p>indoors</p>
                  </div>
                  <div>
                    <p>price</p>
                    <p>1000$</p>
                  </div>
                </div>
                <div className="checkout">
                  <button className='checkoutBtn'>ADD TO CART</button>
                  <button className='checkoutBtn'>checkout</button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={Chair3} alt="chair" />
              <div className="intro">
                <div className="title">GRIFFINS FURNITURE</div>
                <div className="topic">Chair</div>
                <div className="describe">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, adipisci?
                </div>
                <button className='seeMore' ref={el => seeMoreButtonsRef.current[2] = el}>
                  see more &#8599;
                </button>
              </div>
              <div className="detail">
                <div className="title">comfy chair</div>
                <div className="describe">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dignissimos atque quo expedita. Optio, consectetur ipsam fugiat illo, asperiores eaque repudiandae quaerat placeat amet cumque eveniet officia ratione sapiente delectus?
                </div>
                <div className="specification">
                  <div>
                    <p>used time</p>
                    <p>NEW</p>
                  </div>
                  <div>
                    <p>size</p>
                    <p>1.5m x 1.5m</p>
                  </div>
                  <div>
                    <p>compatible</p>
                    <p>indoors</p>
                  </div>
                  <div>
                    <p>price</p>
                    <p>1000$</p>
                  </div>
                </div>
                <div className="checkout">
                  <button className='checkoutBtn'>ADD TO CART</button>
                  <button className='checkoutBtn'>checkout</button>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={Chair4} alt="chair" />
              <div className="intro">
                <div className="title">GRIFFINS FURNITURE</div>
                <div className="topic">Chair</div>
                <div className="describe">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, adipisci?
                </div>
                <button className='seeMore' ref={el => seeMoreButtonsRef.current[3] = el}>
                  see more &#8599;
                </button>
              </div>
              <div className="detail">
                <div className="title">comfy chair</div>
                <div className="describe">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dignissimos atque quo expedita. Optio, consectetur ipsam fugiat illo, asperiores eaque repudiandae quaerat placeat amet cumque eveniet officia ratione sapiente delectus?
                </div>
                <div className="specification">
                  <div>
                    <p>used time</p>
                    <p>NEW</p>
                  </div>
                  <div>
                    <p>size</p>
                    <p>1.5m x 1.5m</p>
                  </div>
                  <div>
                    <p>compatible</p>
                    <p>indoors</p>
                  </div>
                  <div>
                    <p>price</p>
                    <p>1000$</p>
                  </div>
                </div>
                <div className="checkout">
                  <button className='checkoutBtn'>ADD TO CART</button>
                  <button className='checkoutBtn'>checkout</button>
                </div>
              </div>
            </div>
          </div>
          <div className="arrows">
            <button id='prev' ref={prevButtonRef}><FaRegArrowAltCircleLeft /></button>
            <button id='back' ref={backButtonRef}>go back &#8599; </button>
            <button id='next' ref={nextButtonRef}><FaRegArrowAltCircleRight /></button>
          </div>
        </div>
      </section>
    </>
  )
}

export default What;

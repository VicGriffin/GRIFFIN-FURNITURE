import React from 'react'
import Hero from '../../components/hero/Hero.jsx'
import About from '../../components/about/About.jsx'
import What from '../../components/whats in store/What.jsx'
import Testimonials from '../../components/testimonials/Testimonials.jsx'

function Home() {
  return (
    <div> 
        <Hero />
        <About />
        <What/>
        <Testimonials />
    </div>
  )
}

export default Home;
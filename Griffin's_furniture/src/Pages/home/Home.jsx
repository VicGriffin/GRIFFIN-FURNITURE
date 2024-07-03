import React from 'react'
import Hero from '../../components/hero/Hero.jsx'
import About from '../../components/about/About.jsx'
import What from '../../components/whats in store/What.jsx'

function Home() {
  return (
    <div> 
        <Hero />
        <About />
        <What/>
    </div>
  )
}

export default Home;
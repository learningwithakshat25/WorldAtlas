import React from 'react'
import HeroSection from '../Components/UI/HeroSection'
import About from './About'

const Home = () => {
  return (
    <div className='container mx-auto flex flex-col md:gap-12'>
    <HeroSection/>
    <About/>
    </div>
    
  )
}

export default Home
import React from 'react'
import HeroSection from '../Components/UI/HeroSection'
import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
    <div className='container mx-auto flex flex-col md:gap-12'>
    <HeroSection/>
    <About/>
    <Contact/>
    </div>
    
  )
}

export default Home
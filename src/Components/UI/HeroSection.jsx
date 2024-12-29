import React from 'react'
import HeroImg from '../../assets/Hero-img.png'
// import HeroImg from '../../../public/Images/Hero-img.png'

const HeroSection = () => {
  return (
    <div className='container mx-auto flex flex-col-reverse items-center justify-center md:flex-row '>
      <div className="md:w-6/12 hero-left flex flex-col gap-6 items-center p-4 text-white md:items-start text-center">
        <h1 className='text-3xl font-bold '>Explore the world, One Country at a Time.</h1>
        <p className='text-sm'>Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.</p>
        <button className='px-6 py-2 rounded-lg border border-white text-sm flex flex-row gap-2 justify-center items-center'>Start Exploring <i class="fa-solid fa-arrow-right"></i></button>
      </div>
      <div className="hero-right md:w-6/12 ">
         <img src={HeroImg} alt="" />
      </div>
    </div>
  )
}

export default HeroSection
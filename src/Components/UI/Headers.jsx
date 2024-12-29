import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Headers = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);

  return (
  <div className="navbar bg-stone-800">

    <header className='container mx-auto flex flex-row items-center justify-between p-4  text-white '>
      <NavLink to='/'>
        <h1 className='text-xl font-semibold'>WorldAtlas</h1>
      </NavLink>
      {/* <div className={`mobile-nav-items`}>
        <ul className={`inset-0 w-screen p-4  bg-stone-800 flex gap-4 flex-col absolute top-14 left-0 ${isOpenMenu ? "opacity-100" : "opacity-0"}`}>
        <li><NavLink className='hover:underline underline-offset-8 text-white font-semibold text-xl' to='/'>Home</NavLink></li>
        <li><NavLink className='hover:underline underline-offset-8 text-white font-semibold text-xl' to='About'>About</NavLink></li>
          <li><NavLink className='hover:underline underline-offset-8 text-white font-semibold text-xl' to='Country'>Country</NavLink></li>
          <li><NavLink className='hover:underline underline-offset-8 text-white font-semibold text-xl' to='Contact'>Contact</NavLink></li>
          </ul>
          </div> */}
      <div className={`pc-nav-items`}>
        <ul className={"hidden md:flex flex-row gap-4"}>
          <li><NavLink className="text-md text-white" to='/'>Home</NavLink></li>
          <li><NavLink className="text-md text-white" to='About'>About</NavLink></li>
          <li><NavLink className="text-md text-white" to='Country'>Country</NavLink></li>
          <li><NavLink className="text-md text-white" to='Contact'>Contact</NavLink></li>
        </ul>
      </div>
      <div onClick={() => { setisOpenMenu(!isOpenMenu) }} className="hamberger md:hidden">
        <i className="fa-solid fa-bars text-xl"></i>
      </div>
    </header>
  </div>
  )
}

export default Headers
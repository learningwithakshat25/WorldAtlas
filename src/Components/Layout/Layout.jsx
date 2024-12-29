import React from 'react'
import Headers from '../UI/Headers'
import Footers from '../UI/Footers'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col gap-2'>
    <Headers/>
    <Outlet/>
    <Footers/>
    </div>
    
  )
}

export default Layout
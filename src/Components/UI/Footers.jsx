import React from 'react'
import footerData from '../../Api/footerApi.json';
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

const Footers = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />

  }
  return (
    <>
      <div className=' text-white flex flex-col justify-between items-center bg-stone-800 p-4 gap-4 md:flex-row md:justify-center'>
        {
          footerData.map((data) => {
            const { icon, title, details } = data
            return (
              <div className="main-footer border-b-2 border-stone-500 px-20 py-2 w-screen flex flex-row gap-4 items-center justify-center md:border-none md:p-4 ">
                <div className="icon text-3xl font-bold text-blue-900 w-1/4">{footerIcon[icon]}</div>
                <div className="footer-list w-3/4">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>

            )
          })
        }
      </div>
      <div className="copyright text-white flex flex-row items-center justify-center p-4 text-center">
        <p className='text-sm'>Copyright @copy; 2024, All Right Reserved <NavLink className='text-blue-700 font-semibold text-lg' to='/' target='blank'>www.worldatlas.com</NavLink></p>
      </div>
    </>
  )
}

export default Footers
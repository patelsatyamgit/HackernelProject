import React from 'react'
import Logo from "../assets/Logo & Others/Logo.png"
import { navbarList } from '../utils/Navbarlist';
import '../App.css'

const Navbar = () => {
  return (
    <div className='nav flex justify-between px-[100px] pt-[67px] mx-auto  relative'>
     
        <div className='text-[#FFFFFF] z-50'>
            <img src={Logo} alt=""  className='w-[153px] h-[66px]' />
        </div>
        <div className='flex gap-5 z-50 text-[#FFFFFF]'>
            {
                navbarList.map((item,index)=>(
                      <p className='navlink'>{item.name}</p>
                ))
            }
        </div>
    </div>
  )
}

export default Navbar;
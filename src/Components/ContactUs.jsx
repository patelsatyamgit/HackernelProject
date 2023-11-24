import React from 'react';
import addr1 from  "../assets/Contact Us Icons/CU1.png"
import addr2 from  "../assets/Contact Us Icons/CU2.png"
import addr3 from  "../assets/Contact Us Icons/CU3.png"


const ContactUs = () => {
  return (
    <div className='h-[1080px] bg-[#EEF3F7]'>
      <h1 className='ml-[350px] text-4xl t-[200px]'>Contact Us</h1>
      <div className='ml-[600px] py-[200px] flex flex-col gap-16'>
        <div className='flex'>
              <img src={addr1}  className='w-[100px] opacity-20' />
              <p className='text-3xl text-gray-700 w-[500px]'>White Architectures 2787 Street, Fremont California 94538</p>
        </div>
        <div className='flex'>
        <img src={addr2} className='w-[100px] opacity-20'  />
              <p className='text-3xl text-gray-700 '>wagetintouch@whitearch.com</p>
        </div>
        <div className='flex'>
        <img src={addr3} className='w-[100px] opacity-20' />
              <p className='text-3xl text-gray-700 '>510-979-9360</p>
        </div>
      </div>

    </div>
  )
}

export default ContactUs;
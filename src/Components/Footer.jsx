import React from 'react'

const Footer = () => {
  return (
    <div className='h-[1080px] bg-[rgb(18,17,17)] '>

        <div className='flex justify-center items-center  flex-col h-[80%]'>
            <h1 className="footertext">White Architectures</h1>
            <div className='text-gray-500 ml-5 flex mt-20 text-3xl gap-10 font-bold '>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
        </div>

        <div className=''>
            <div className='w-[90%] bg-gray-500 h-1 mx-auto relative'>
                <div className='absolute h-[300px] w-1 right-8 -top-52 bg-gray-500'>

                </div>
            </div>
            <div className='w-[90%] mx-auto flex justify-between mt-8 text-gray-400 text-3xl px-7'>
                <p>skillmix2021</p>
                <p>Top</p>
                <p>skillmix2021@gmail.com</p>
            </div>
        </div>

    </div>
  )
}

export default Footer;
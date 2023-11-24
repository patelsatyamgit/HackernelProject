import React from 'react'
import design from "../assets/Logo & Others/Design White.png"

const About = () => {
  return (
    <div className=' bg-[#121111] h-[1080px] pt-[230px] flex flex-col justify-between '>
        <h1 className='text-[#A0A2A3] text-4xl ml-[350px]'>About</h1>
        <div>
            <img src={design} alt="" />
        </div>
        <div className='flex justify-end'>
            <div className='w-[686px] '>
                <div className=' abouttext'>
                Architecture is the learned game, correct and magnificent, of forms assembled in the light. So keeping this in mind we started with our work. We are a team of 5 Architects with a clean and white vision.
                </div>
                <p className='abouttext underline my-2 '>Read More +</p>
            </div>
        </div>
    </div>
  )
}
export default About;

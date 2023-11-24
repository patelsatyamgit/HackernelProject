import React from 'react'
import Navbar from '../Components/Navbar';
import mask from "../assets/MAdrid, Spain.png"
import About from '../Components/About';
import News from '../Components/News';
import Services from '../Components/Services';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className='main relative w-[1920px]'>
       <div className='hero relative'>
       <div className='layer w-full h-full absolute z-20'></div>
       <Navbar/>
       <div className='flex z-50 relative justify-evenly items-center top-[224px]'>
        <div>
          <div className='bg-[rgb(187,191,192)] h-1 w-[385px]'>
            
          </div>
        </div>
        <div>
          <div className='herotext '>Sharp & Beautiful <br /> The Edge Building</div>
             <p className='text-[#BBBFC0] text-2xl'>Madrid, Spain</p>
        </div>
        <div>
         <img src={mask} alt="" className='w-[544px] z-50 h-[678px]' />
        </div>
        <div>
          <div className='text-3xl text-[#bbbfc0] flex flex-col -rotate-[30deg] gap-2 items-center justify-center'>
            <p>1</p>
            <p className='w-10 h-1 bg-[#bbbfc0] -rotate-[2deg]' ></p>
            <p>5</p>
          </div>

        </div>
       </div>
       </div>
       <div>
        <About/>
       </div>
       <div>
        <News/>
       </div>
       <div>
        <Services/>
       </div>
       <div>
        <ContactUs/>
       </div>
       <div>
        <Footer/>
       </div>
   
    </div>
  )
}

export default Home;
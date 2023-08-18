import React from 'react'
import  vin from  '../assests/port/vin.jpeg'
import {BsArrowRightShort} from "react-icons/bs";

const Home = () => {
  return (
    <div  name='home' className='flex h-screen w-full bg-gradient-to-b from-black to-gray-800'>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm am a Full Stack Developer</h2>
             <p className='text-gray-500 py-4 max-w-md'>
   I Have   I have 1 year experience of building  and  desgining software.
   Currently , I love to work  on web application using technologies like 
   React,Tailwind,Flask and Django.
             </p>
             <div>
             <button>
              portfolio 
              <span>
              <BsArrowRightShort/>
              </span>
             </button>
             </div>
        </div>

        <div className='rounded-2xl mx-auto  w-2/3 md:w-full'>
         <img src={vin}  alt="my profile" />
        </div>
        
        </div>  
    </div>
  )
}

export default Home
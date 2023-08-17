import React from 'react'
import  vin from  '../assests/port/vin.jpg'
import {BsArrowRightShort} from "react-icons/bs";

const Home = () => {
  return (
    <div  name='home' className='flex h-screen w-full bg-gradient-to-b from-black to-gray-800'>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full">
        <div>
            <h2>I'm am a Full Stack Developer</h2>
             <p>
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
        
        </div>  
    </div>
  )
}

export default Home
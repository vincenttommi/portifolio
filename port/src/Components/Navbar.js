import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
const Navbar = () => {
  return (
   <div className='flex justify-between items-center px-4 w-full h-20 text-white fixed bg-black'>
      <div>
     <h1 className='text-5xl font-signature ml-4'>Vincent</h1>
      </div>

    <ul className="flex">
        <li className='px-4   cursor-pointer'>Home</li>
        <li className="">Home</li>
       

    </ul>

   </div>
  )
}

export default Navbar
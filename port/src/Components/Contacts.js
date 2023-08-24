import React from 'react'

const Contacts = () => {
  return (
  
    <div name="contact" className='w-full  h-screen bg-gradient-to-b from-black to-gray-800  p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form below to  get in touch </p>
        </div>
       



        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/3f4ac0b3-93aa-4a4a-96e3-56af115546e8' method='POST' className='flex flex-col w-full md:w-1/2'>
           <input className='p-2 bg-transparent  
           border-2 rounded-md text-white focus:outline-none'
            type='text' name='name' placeholder='Enter your name'/>
            <input className='my-4 p-2 bg-transparent  
           border-2 rounded-md text-white focus:outline-none'
            type='text' name='email' placeholder='Enter your email'/>

            <textarea name='message' rows="10" placeholder='enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300 '>Lets's talk</button>
          </form>
        </div>
    </div>
    </div>
  )
}

export default Contacts
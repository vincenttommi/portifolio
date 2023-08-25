
import React from "react"

const About = () => {
  return (
    <div  name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black   text-white'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4  border-gray-500'>About Me</p>
            </div>
        <p className='text-xl mt-20'>
        Hello there! I'm Vincent Tommi, a passionate software engineer with a strong affinity for crafting innovative digital solutions. My journey in the realm of code began with a fascination for technology and a curiosity to unravel its endless possibilities
        </p>

        <br/>

        <p className='txt-4xl'>As a seasoned developer, my expertise lies in the dynamic world of web development. I thrive in the Python ecosystem, boasting proficiency in Django and Flask, where I architect robust backends that power seamless user experiences. On the frontend, I'm captivated by the elegance of JavaScript and React, shaping interactive interfaces that engage and delight user
        </p>
    </div>
    </div>
  )
}

export default About
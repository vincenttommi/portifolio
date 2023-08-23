import React from 'react'
import react from '../assests/port/react.png'
import images from '../assests/port/images.png'
import node from '../assests/port/node.png'
import javascript from '../assests/port/javascript.png'
import flasklogo  from '../assests/port/flasklogo.jpg'
import Django from '../assests/port/Django.png'

const Portfolio = () => {

    const  portfolio = [
        {
           id:1,
           src:react,
           href : "https://github.com/vincenttommi",
        },
        {
            id:2,
            src:images,
            href : "https://github.com/vincenttommi",
        },
        {
            id:3,
            src:node,
            href : "https://github.com/vincenttommi",
        },
        {
            id:4,
            src:javascript,
            href : "https://github.com/vincenttommi",
        },
        {
            id:5,
            src:flasklogo,
            href : "https://github.com/vincenttommi",
        },
        {
            id:6,
            src:Django,
            href : "https://github.com/vincenttommi",
        }
    ];
 
  return (
    <div
    name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolio.map(({ id, src,href}) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={Django}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  ">
                <a href={href}>code</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Portfolio;
  

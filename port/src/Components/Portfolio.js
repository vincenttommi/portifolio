import React from 'react'
import bike from '../assests/port/bike.jpg'
import javascript from '../assests/port/javascript.png'
import Django from '../assests/port/Django.png'
import flask from '../assests/port/flask.jpg'
import Python from '../assests/port/Python.png'
import react from '../assests/port/react.png'

const Portfolio = () => {

    const  portfolio = [
        {
           id:1,
           src:bike,
           url: "https://github.com/vincenttommi",
           href:"https://bike-website-umber.vercel.app/",
           title:"bikes-website"
        },
        {
            id:2,
            src:react,
            url: "https://github.com/vincenttommi",
            href : "https://github.com/vincenttommi",
            title:"React-p"
        },
        {
            id:3,
            src:Python,
            href : "https://github.com/vincenttommi/phase3-_cli-project",
            title:"Python-CLI"
        },
        {
            id:4,
            src:Django,
            href : "https://github.com/vincenttommi/Learning-Django",
            title:"Django-Project"
        },
        {
            id:5,
            src:flask,
            href : "https://github.com/vincenttommi/Event-Ticketing-System",
            title:"Event-ticket"
        },
        {
            id:6,
            src:react,
            url: "https://github.com/vincenttommi",
            href:"https://ip-01-code-challenge-bank-of-flatiron.vercel.app/",
            title:"React-p"
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
          Projects
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolio.map(({ id,url, src,href,title}) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={href}>{title}</a>
              </button>
              <button url={url} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  ">
                code
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
  

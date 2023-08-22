import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"; 
// import {FaTwitterSquare} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsJournalArrowDown} from "react-icons/bs";

const SocialLinks = () => {

    
    const  links = [
        {
        id:1,
        child:(
          <>
            LinkedIn  <FaLinkedin size={30}/> 
        </>
        ),
        href : "https://linkedin.com",
        style: 'rounde-tr-md'
        },

        {
          id:2,
          child:(
             <>
             GitHub <FaGithubSquare size={30}/>
             </>
          ),
          href:'https://github.com/vincenttommi',
        },

        {
            id:3,
            child:(
               <>
               Mail<AiOutlineMail size={30} />
               </>
            ),
            href:"vincenttommi@gmail.com"

          },
          {
            id:4,
            child:(
               <>
               Resume <BsJournalArrowDown size={30}/>
               </>
            ),
            href:'/resume.pdf',
            style:'rounded-br-md',
          download:true,
     },
    ];



  return (
    <div   className=' flex flex-col top-[35%] left-0 fixed'>
    <ul>


{links.map(({id,child,href,style,download})=>(
<li key={id} className={"flex  justify-between items-center w-40 h-14 px-4  bg-gray-500  ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" + "" + style}>
<a  href={href} className='flex justify-between items-center w-full text-white'
  download={download}
  target="_blank"
>
{child}
</a>
</li>
))}
  



    </ul>
    </div>
  )
}

export default SocialLinks
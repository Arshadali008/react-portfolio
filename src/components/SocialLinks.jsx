import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(
                <>
            LinkedIn<FaLinkedin size={30}/>
            </>
            ),
            href:"https://www.linkedin.com/in/arshad-ali-b2490629a/",
            style:"rounded-tr-md"
        },
        {
            id:2,
            child:(
                <>
            GitHub<FaGithub size={30}/>
            </>
            ),
            href:"https://github.com/arshadali0008",
        },
        {
            id:3,
            child:(
                <>
            Mail<HiOutlineMail size={30}/>
            </>
            ),
            href:"mailto:arshuarshad8019@gmail.com",
        },
        {
            id:4,
            child:(
                <>
            Resume<BsFillPersonLinesFill size={30}/>
            </>
            ),
            href:"/Arshad's Resume js.pdf",
            style:"rounded-br-md",
            download:true,
        },
    ];
  return (
    <div className='hidden lg:flex flex-col top-[30%] left-0 fixed'>
        <ul>
            {links.map(({id, child, style, href, download})=>(
                 <li key={id} className={'justify-between flex items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] opacity-80 hover:rounded-md hover:opacity-100 duration-300 bg-yellow-900'+' '+style}>
                 <a href={href}
                 className='flex justify-between items-center w-full text-yellow-100'
                 download={download}
                 target='_blank'
                 rel='noreferrer'
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
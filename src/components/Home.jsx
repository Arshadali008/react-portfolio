import React from 'react';
import MyImage from "../assets/myimage.jpg";
import {BiRightArrowCircle, BiRotateLeft} from "react-icons/bi";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
    const [text] = useTypewriter({
        words:["Web Developer", "UI Designer","Full Stack Developer"],
        loop:true,
        typeSpeed:70,
        deLeteSpeed:70,
        deLaySpeed:1000
    });
  return (
    <div name="home" style={{ backgroundImage:`url(${MyImage})`}} className='h-screen w-full bg-no-repeat bg-cover'>
        <div className='max-w-screen-lg ml-2 lg:ml-16 flex flex-col items-center justify-center h-full px-4 md:flex-row w-full'>
            <div className='flex flex-col justify-center h-full mr-auto'>
                <h2 className='text-4xl w-48 sm:text-7xl font-bold text-white'>I'm a {text}<Cursor cursorBlinking="false" cursorStyle="|"/></h2>
                <div className=' bg-yellow-100 bg-opacity-40 rounded px-1'>
                <p className='py-4 max-w-md text-yellow-950'>I have a great experience building and designing software.
                    Currently i love to work with on a web application using technologies like React, Tailwind and Next JS.
                </p>
                </div>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-black cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <BiRightArrowCircle size={25}
                            className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>
        {/* <div>
        <img src={MyImage}
        alt='my profile'
        className='rounded-2xl mx-auto w-2/3 md:w-full'/>

    </div> */}
    </div>
    </div>
  );
};

export default Home
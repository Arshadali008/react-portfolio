import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javaScript from '../assets/javascript.png'
import react from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import mongoDB from '../assets/mongoDB.png'


const Experience = () => {
    const experiences=[
        {
            id:1,
            src: html,
            title:"HTML",
            style:"shadow-white"
        },
        {
            id:2,
            src: css,
            title:"CSS",
            style:"shadow-white"
        },
        {
            id:3,
            src: javaScript,
            title:"HTML",
            style:"shadow-white"
        },
        {
            id:4,
            src: react,
            title:"HTML",
            style:"shadow-white"
        },
        {
            id:5,
            src: nextjs,
            title:"Next JS",
            style:"shadow-white"
        },
        {
            id:6,
            src: mongoDB,
            title:"mongoDB",
            style:"shadow-white"
        },
        {
            id:7,
            src: github,
            title:"GitHub",
            style:"shadow-white"
        },
        {
            id:8,
            src: tailwind,
            title:"Tailwind",
            style:"shadow-white"
        },
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-yellow-500 to-yellow-300 w-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-yellow-300 p-1 inline'>Experience</p>
                <p className='py-6 text-yellow-900'>These are the technologies i've worked with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    experiences.map(({id, src, title, style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience
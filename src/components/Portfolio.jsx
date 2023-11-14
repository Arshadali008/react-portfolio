import React from 'react'
import ReactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
    const Portfolios = [
        {
            id:1,
            src : ReactWeather
        },
        {
            id:2,
            src : ReactWeather
        },
        {
            id:1,
            src : ReactWeather
        },
        {
            id:1,
            src : ReactWeather
        },
        {
            id:1,
            src : ReactWeather
        },
    ]
  return (
    <div
        name="portfolio"
        className="bg-gradient-to-b from-yellow-500 to-yellow-300 w-full text-white">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-300'>Portfolio</p>
                <p className='py-6 text-yellow-900'>Check some of my works right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-0 lg:px-12 w-full'>

            {
                Portfolios.map(({id, src})=>(
                <div key={id} className='shadow-md shadow-black rounded-lg'>
                    <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center '>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button >
                    </div>
                </div>
                ))}
                </div>
            </div>
    </div>
  )
}

export default Portfolio
import React from 'react'
import blogImgOne from '../assets/blogImageOne.jpg';
import blogImgTwo from "../assets/blogImageTwo.jpg";
import blogImgThree from "../assets/blogImagethree.jpg";
import blogImgFour from '../assets/blogImageFour.jpg'
import BlogCard from './BlogCard';

const Blog = () => {
  return (
    <div name="blog" className='bg-gradient-to-b from-yellow-300 to-yellow-500 w-full lg:p-20 sm:p-10'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-yellow-500 inline'>Blog</p>
                <p className='py-6 text-yellow-900'>Some of my latest sketches</p>
            </div>
        <div className='grid py-8 lg:grid-cols-2 gap-10 sm:grid-cols-1'>
            <div className='px-16 lg:px-0'>
                <BlogCard
                    image={blogImgOne}
                    title="march 26,2022"
                    subTitle="Edsverga meet at Knowledge City 2022"
                    category="Travel"
                />,
                <BlogCard
                    image={blogImgTwo}
                    title="september 07,2022"
                    subTitle="fresh your mindset"
                    category="Travel"
                />,
                

            </div>
            <div className='px-16 lg:px-0'>
                <BlogCard
                    image={blogImgThree}
                    title="january 27,2023"
                    subTitle="Refreshing energy"
                    category="Travel"
                />,
                <BlogCard
                    image={blogImgFour}
                    title="november 13,2022"
                    subTitle="Trazco meet at Kochi"
                    category="Travel"
                />,
                </div>
        </div>
    </div>
    </div>
  )
}

export default Blog
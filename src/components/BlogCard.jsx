import React from 'react'

const BlogCard = ({image, title, subTitle, category}) => {
  return (
    <div className='py-6 flex flex-col gap-2 items-center justify-center border-b-[1px] border-b-zinc-800 group'>
        <div className='w-full h-full mb-2 overflow-hidden cursor-pointer'>
            <div className='w-full h-full top-0 left-0 hover:bg-gradient-to-t hover:from-gray-100 hover:via-gray-100 hover:to-gray-100 hover:opacity-90'>
            <img src={image} alt='blogImage'/>
            </div>
        </div>
            <div className='flex flex-col items-center gap-2'>
                <span className='text-yello-500 border-[1px] border-yellow-600 px-2'>{title}</span>
                <h2 className='text-center text-black group-hover:text-yellow-700 duration-300'>{subTitle}</h2>
                <p>{category}</p>
            </div>
    </div>
  )
}

export default BlogCard
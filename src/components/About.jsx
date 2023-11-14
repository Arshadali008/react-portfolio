import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full bg-gradient-to-b from-yellow-300 to-yellow-500 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-500'>About</p>
            </div>
            <p className='text-xl mt-20 text-yellow-900'>In the dynamic world of web development, I am a seasoned full-stack developer with a deep-rooted passion for creating elegant and functional digital experiences. With a solid foundation in HTML, CSS, and JavaScript, I bring to the table a wealth of experience and expertise in building responsive and visually appealing user interfaces. My proficiency in modern web development frameworks and libraries, such as Tailwind CSS, ensures that I can craft user-friendly, interactive websites that not only look great but also offer exceptional performance.</p>
            <br/>
            <p className='text-xl text-yellow-900'>Furthermore, my expertise extends to database management, where I am well-versed in both MongoDB and MySQL, enabling me to design efficient data storage and retrieval systems. But my versatility doesn't stop at web technologies; I'm also well-versed in C++ and C#, two powerful programming languages that have allowed me to delve into application development. In addition to my technical skills, I pride myself on my commitment to staying up-to-date with the latest industry trends, ensuring that I'm always ready to take on new challenges and deliver top-notch solutions as a full-stack developer. With a well-rounded skill set and a drive for innovation, I am excited to continue pushing the boundaries of what can be achieved in the world of web and software development.</p>
        </div>
    </div>
  )
}

export default About
import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-left '>

            <div className='pb-3'>
                <p className='text-3xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-lg mt-20 sm:mt-13'>
            &nbsp;&nbsp;&nbsp;  Hello there! I'm a dedicated and enthusiastic individual currently embarking on a journey to obtain a Bachelor's degree in Computer Science and Engineering (CSE). My goal is to transform my passion for technology into innovative and impactful products that can make a positive difference in the world.
            </p>
            <br />
            
            <p className='text-lg'>
            &nbsp;&nbsp;&nbsp; Outside of my academic pursuits, I enjoy staying up-to-date with the latest industry trends and engaging in personal projects that challenge me to push my boundaries. I firmly believe that through continuous learning and persistent effort.

            Feel free to reach out. Let's connect and explore the exciting possibilities that lie at the intersection of innovation and creativity!
            </p>

        </div>
    </div>
  )
}

export default About
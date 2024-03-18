import React, {useRef} from 'react'
import Img1 from './../assets/123.jpg'
import {motion, useTransform} from 'framer-motion'

function AboutMe() {
  return (
    <div className='lg:h-screen w-full pt-28 overflow-hidden flex flex-col items-center '>
        <p className='px-10 poppins-regular text-left w-full'>About Me</p>
        
        <div className='w-full h-full py-1 px-10 flex flex-col-reverse lg:flex-row justify-start lg:justify-between gap-5'>
          <div className='w-full flex flex-col justify-start'>
            <p className='text-gray-700 text-2xl w-full text-center underline underline-offset-8 decoration-purple-300'>Why Work With Me?</p>
            <div className='text-center poppins-regular rounded-xl w-full py-2 grid grid-cols-1 gap-3 px-5 text-lg'>
                <div className='w-full  flex flex-col'>
                  <h3 className='text-lg'>Straightforward and Transparent Solutions</h3>
                  <p className='text-base poppins-light'>My approach is direct and transparent, providing you straightforward solutions that align with your needs and budget.</p>
                </div>
                <div className='w-full  flex flex-col '>
                  <h3 className='text-lg'>Problem-Solving for Your Success</h3>
                  <p className='text-base poppins-light'>I am dedicated to solving your unique challenges and helping you achieve your business goals through strategic and customized web development solutions.</p>
                </div>
                <div className='w-full  flex flex-col '>
                  <h3 className='text-lg'>Unwavering Commitment</h3>
                  <p className='text-base poppins-light'>I am fully committed to your project's success, ensuring unwavering dedication, timely delivery, and transparent communication throughout the development journey.</p>
                </div>
            </div>
          </div>
          <div className='w-full poppins-light flex flex-col lg:flex-col gap-4 text-center'>
            <p className='text-gray-700 text-4xl'>My name is Afrin Haque. By profession, I'm a <span className='text-orange-800'>Software Engineer</span> with <span className='poppins-medium'>2+ years</span> of industry experience.</p>
            <p className='text-gray-700 text-lg'>I have completed a bachelors in Computer Science and worked with experts in the field to learn about the best ways to build <span>applications</span> that are <span className='underline underline-offset-4'>scalable, robust and resilient</span>.</p>
            <div className='flex justify-center lg:justify-end align-middle'>
              <img src={Img1} className='w-36 h-36 object-cover object-top rounded-full shadow-xl' alt="profile" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutMe
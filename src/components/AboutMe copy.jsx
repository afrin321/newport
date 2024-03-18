import React, {useRef} from 'react'
import Img1 from './../assets/hero-img-2.png'
import {motion, useTransform} from 'framer-motion'

function AboutMe() {
  return (
    <div className='h-screen w-full pt-28 overflow-hidden '>
        <p className='px-10 poppins-regular'>About Afrin</p>
        {/* <p className='poppins-extralight text-xl min-[1680px]:text-3xl px-10 min-[1680px]:px-20'>The <i className='poppins-medium'>sweetest</i> person you will ever meet! 🌱</p> */}
        
        {/* <div className='px-20 mt-10'>
            <img src={Img1} className='w-[300px] rounded-t-xl hover:brightness-125 hover:scale-125'/>
        </div> */}
        <div className='w-full h-full border-2 py-1 flex justify-between'>
          <div className='w-full flex flex-col justify-center items-center'>
            
            <img src={Img1} className='w-[300px] rounded-t-xl hover:brightness-125 hover:scale-125'/>
          </div>
          <div className='w-full poppins-light h-[200vh] flex flex-col gap-4 -translate-y-[0px]'>
            <p className='text-gray-700'>Hi, my name is Afrin Haque. A <span className='text-orange-800'>Software Engineer</span> by profession with <span className='poppins-medium'>2+ Years</span> of <span>industry experience.</span></p>
            <p className='text-gray-600 text-xl w-[90%]'>I started my career as a <span className='poppins-medium'>front-end</span> engineer after completing a bachelors degree in Computer Science.</p>
            <p className='text-gray-600 text-xl w-[90%]'>I always wanted to build <i className='poppins-light-italic'>full-fledged & quality-full</i> systems. As I worked alongside backend teams, I encountered terms like <i>'Scalable'</i> and <i>'Web Services'</i>. </p>
            <p className='text-gray-600 text-xl w-[90%]'>I soon became intrigued by how big companies such as Netflix and Meta managed load and maintained consistency and availability in their applications, across continents.</p>
            <p className='text-gray-600 text-2xl w-[90%]'>After delving into the topics, I realized that <span className='poppins-medium'>real</span> applications are more than just a bunch of technical requirements.</p>
            <p className='text-gray-600 text-xl w-[90%]'>Compliance and Risk management plays a massive role in building <i>resilient</i> systems. Soon, I pursued a year long diploma in Cyber and Cloud Security. By constant learning, I intend to always integrate standard practices in development. </p>
            <p className='text-gray-600 text-xl w-[90%]'>Now, thats enough of <span className='poppins-medium'>Tech Talk</span>! <span className='hidden'>(I'm kinda obsessed...)</span></p>
            <p className='text-gray-600 text-xl w-[90%]'>I usually prefer tea over coffee and like pineapple pizza. When I'm not working, I unwind by exploring creative pursuits in books, art and nature. </p>
          </div>
        </div>
    </div>
  )
}

export default AboutMe
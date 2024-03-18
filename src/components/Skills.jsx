import React from 'react'
import Img1 from './../assets/hero-img-1.png'

function Skills() {
  return (
    <div className='w-full h-screen pt-28 flex flex-col'>
        <p className='poppins-regular px-10 min-[1680px]:px-12'>Skills</p>
        <p className='poppins-regular px-10 min-[1680px]:px-12 text-lg min-[1680px]:text-4xl min-[1920px]:text-6xl cursor-pointer'>Bringing your vision to life, one line of code at a time.</p>
        <div className='flex flex-col lg:flex-row justify-around mt-10 min-[1680px]:mt-20 gap-8 min-[1680px]:gap-20 lg:gap-16 px-10 lg:px-20 pb-10 lg:pb-0'>
            
            <div className='hover:scale-110 flex flex-col justify-start gap-3 min-[1680px]:gap-6 w-full'>
                <h2 className='poppins-light text-gray-700 text-2xl min-[1680px]:text-5xl min-[1920px]:text-6xl min-[2560px]:text-7xl'>Front-end</h2>
                <p className='poppins-light text-gray-800 text-xl min-[1680px]:text-4xl min-[2560px]:text-5xl min-[2560px]:tracking-wider'>
                    Website Developement, Responsive UI, Interactive Components, Complex Animations, Parallax Effects, API Integration
                </p>
                <p className='flex justify-start gap-3 flex-wrap text-sm min-[1680px]:text-2xl min-[1920px]:text-3xl min-[2560px]:text-5xl poppins-light text-gray-500'>
                    <span>Website Developement</span>
                    <span>HTML/CSS JavaScript</span>
                    <span>React</span>
                    <span>Vue</span>
                    <span>Tailwind + SCSS</span>
                    <span>Framer Motion</span>
                    <span>More+</span>
                </p>
            </div>
            <div className='hover:scale-110 flex flex-col justify-start gap-3 min-[1680px]:gap-6 w-full'>
                <h2 className='poppins-light text-gray-700 text-2xl min-[1680px]:text-5xl min-[1920px]:text-6xl  min-[2560px]:text-7xl'>Back-end</h2>
                <p className='poppins-light text-gray-800 text-xl min-[1680px]:text-4xl min-[2560px]:text-5xl min-[2560px]:tracking-wider'>
                    Building APIs, Backend Design and Architecture, Database Design, Microservices and Distributed Systems, Cloud Native
                </p>
                <p className='flex justify-start flex-wrap gap-3 text-sm min-[1680px]:text-2xl min-[1920px]:text-3xl min-[2560px]:text-5xl poppins-light text-gray-500'>
                    <span>REST APIs</span>
                    <span>Java/Spring Framework</span>
                    <span>SQL/ORM</span>
                    <span>Microservices</span>
                    <span>PHP/Laravel</span>
                    <span>Apache Ngnix</span>
                    <span>Linux & Shell Scripting</span>
                    <span>CI/CD</span>
                    <span>AWS</span>
                    <span>Docker</span>
                </p>
            </div>
            
            <div className='hover:grayscale hover:scale-90 w-full flex justify-center '>
                <img src={Img1} className='h-[80%]' />
            </div>
            {/* <div className='flex-col'>
                <h2 className='poppins-light text-gray-700 text-2xl'>Infrastructure</h2>
                <p className='flex justify-between text-lg poppins-light text-gray-500'>
                    <span>Linux & Shell Scripting</span>
                    <span>CI/CD</span>
                    <span>AWS</span>
                    <span>Docker</span>
                    <span>VirtualBox</span>
                    <span>WSTG</span>
                </p>
            </div> */}
        </div>
        <div className='mt-8 w-full h-36 min-[1920px]:h-52 bg-pink-400'></div>
    </div>
  )
}

export default Skills
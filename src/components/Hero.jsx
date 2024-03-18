import React from 'react'
import Img1 from './../assets/hero-img-5.png'

function Hero() {
  return (
    <div className='w-full h-screen pt-28 lg:pt-20 px-10 lg:px-20 poppins-regular flex flex-col justify-start lg:justify-between overflow-hidden gap-2 lg:gap-10 min-[1920px]:gap-20'>
        <div className='my-2'>
            <p className='text-[1.8rem] lg:text-[4rem] min-[1680px]:text-[6rem] text-shadow-gainsboro'>HI, I'm <span className='text-orange-800 text-shadow-none'>Afrin</span>. </p>
            <p className='text-[2rem] lg:text-[3rem] min-[1680px]:text-[5rem]'>A passionate <br className='block lg:hidden'/> <span className='bg-yellow-200'>Full Stack Developer</span> from <b className='poppins-semibold'>Dhaka, Bangladesh.</b></p>
            <p className='text-[1.5rem] lg:text-[2rem] min-[1680px]:text-[4rem]'>I build <span className='underline decoration-wavy decoration-[#a9a3d2] underline-offset-8'>creative</span> <i>web</i> solutions.</p>
        </div>
        {/* <div className='flex flex-col lg:flex-row justify-between w-ful my-3 poppins-regular py-10'>
            <div className='flex align-bottom gap-3'>✨ <p className='text-sm lg:text-xl'>Pixel Perfect<br/> Front-ends</p></div>
            <div className='flex align-bottom gap-3'>✨ <p className='text-sm lg:text-xl'>Scalable<br/> Microservices</p></div>
            <div className='flex align-bottom gap-3'>✨ <p className='text-sm lg:text-xl'>Security &<br/> Reliable</p></div>
        </div> */}
        <div className='flex flex-col w-full'>
            <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start w-ful mt-5 poppins-regular text-gray-500 lg:text-gray-400  px-12 '>
                <div className='flex align-bottom gap-3'> <p className='text-base lg:text-2xl min-[1680px]:text-4xl min-[1920px]:text-5xl'>Pixel Perfect UI</p></div>
                <div className='flex align-bottom gap-3'> <p className='text-base lg:text-2xl min-[1680px]:text-4xl min-[1920px]:text-5xl'>Scalable & Robust</p></div>
                <div className='flex align-bottom gap-3'> <p className='text-base lg:text-2xl min-[1680px]:text-4xl min-[1920px]:text-5xl'>Secure & Reliable</p></div>
            </div>
            <div className='flex justify-end '>
                <img src={Img1} className='w-full' />
            </div>
        </div>
    </div>
  )
}

export default Hero
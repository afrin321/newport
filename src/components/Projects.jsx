import React from 'react'
import ProjectCard from './ProjectCard'
import Img1 from './../assets/pro1.png'
import Img2 from './../assets/pro2.png'
import Img3 from './../assets/pro3.png'

function Projects() {

  const  projects = [
    {
      title: "Elegant E-Commerce", 
      subtitle: "Learning Microservices",
      img: Img1, 
      dscr: "Built a Full-stack Furniture E-Commerce Site with <span className='poppins-medium'>ReactJS</span> and <span className='poppins-medium'>Spring Boot</span> <span className='poppins-regular-italic'>Microservices</span>."
    }, 
    {
      title: "BurgerScrolls", 
      subtitle: "Animated Landing Page",
      img: Img2, 
      dscr: "Developed an Animated landing page for a restaurant using <span className='poppins-medium'>Framer Motion</span> and <span className='poppins-medium'>ReactJS</span>."
    },
    {
      title: "Contact Flo", 
      subtitle: "Backend API Service",
      img: Img3, 
      dscr: "Designed an <span >API </span> to <span className='poppins-medium'>directly</span> send <span className='poppins-regular-italic'>contact form submissions</span> to your <span className='poppins-medium'>personal E-mail<span>."
    }
  ]

  return (
    <div className='w-full pt-20 lg:pt-28 flex flex-col items-center'>
        <p className='poppins-regular px-10 text-shadow-gainsboro w-full text-left'>Portfolio</p>
        <p className='poppins-extralight text-xl px-10 w-full text-left'>What I'm Working On</p>
        <div className='flex gap-10 my-2 h-full w-full px-10'>
          <ProjectCard  project={projects[0]} />
          <ProjectCard  project={projects[1]} />
          <ProjectCard  project={projects[2]} />
        </div>
    </div>
  )
}

export default Projects
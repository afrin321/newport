import React from 'react'
import Img1 from './../assets/pro1.png'
import parse from 'html-react-parser'

function ProjectCard(props) {
  const {project} = props
  return (
    <div className='h-full basis-[30%] w-full border-2 border-gray-600 rounded-xl poppins-regular p-[1rem] flex flex-col items-center gap-2 scale-90'>
      <h3 className='py-0 my-0 poppins-light text-2xl text-gray-700'>
        {project.title}
      </h3>
      <p className='text-gray-400 poppins-regular text-sm my-0 py-0'>{project.subtitle}</p>
      <img src={project.img} alt="Project Image" className='w-[347px] h-[193px] rounded-2xl' />
      
      <p className='w-full text-center text-gray-800 text-sm py-3 px-10' >{parse(project.dscr)}</p>
      <div className='flex justify-center gap-3 items-center'>
          <button className='py-1 px-10 text-lg hover:bg-yellow-100 hover:text-orange-700 hover:rounded-xl'>GitHub</button>
          <button className='py-1 px-10 text-lg hover:bg-gray-200 hover:text-white hover:rounded-xl'>Live Site</button>
      </div>
    </div>
  )
}

export default ProjectCard
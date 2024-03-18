import React from 'react'


function Header() {
  return (
    <div className='w-full top backdrop-blur-md flex flex-col items-center justify-center fixed top-0'>
        <h1 className="py-5 poppins-regular underline underline-offset-4 decoration-wavy text-5xl font-bold text-gray-800 w-fit">AfrinCodes</h1>
        {/* <div className='flex justify-between text-lg w-full'>
            <a className='hover:text-xl'>🏰</a>
            <a className='hover:text-xl'>💁‍♀️</a>
            <a className='hover:text-xl'>🛠️</a>
            <a className='hover:text-xl'>☎️</a>
        </div> */}
    </div>
  )
}

export default Header
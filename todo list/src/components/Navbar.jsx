import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-cyan-600 text-white py-2'>
      <div className="logo flex">
        <span className='font-bold text-xl mx-4.5 cursor-pointer justify-center'>itask</span>
      </div>
      <ul className="flex gap-9 mx-10 text-md ">
        <li className='cursor-pointer hover:font-bold transition-all duration-100'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-100'>Your Task</li>
      </ul>
    </nav>
  )
}

export default Navbar

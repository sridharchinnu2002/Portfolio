import React from 'react'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <div className='bg-black py-2'>
    <nav className='flex flex-row justify-center gap-6 my-2 mt-10'>
     <Link to=''><button className='bg-red-500 py-2  rounded rounded-b-md px-2 text-white hover:bg-red-300 '><b>Home</b></button></Link>
      <Link to='/About'><button className='bg-red-500 py-2  rounded rounded-b-md px-2 text-white hover:bg-red-300 '><b>About</b></button></Link>
      <Link to='/Projects'><button className='bg-red-500 py-2  rounded rounded-b-md px-2 text-white hover:bg-red-300 '><b>Projects</b></button></Link>
      <Link to='/Contact'><button className='bg-red-500 py-2  rounded rounded-b-md px-2 text-white hover:bg-red-300 '><b>Contact</b></button></Link>
    </nav>
    </div>
  )
}

export default Header

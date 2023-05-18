import Link from 'next/link'
import React from 'react'

interface Props {}

const Navbar = () => {

  return (
  <div className=' fixed w-full  z-[100] p-6 bg-opacity-90 font-outfit'>
    
    <div className='flex flex-row p-2 items-center justify-center tracking-wide'>
    <Link href="/menu"><p className='mx-5'>Menu</p></Link>
    <Link href="/"><p className='mx-5'>Reserve</p></Link>
    <Link href="/about"><p className='mx-5'>About</p></Link>
   
    </div>
  </div> 

  )
}

export default Navbar
//bg-[#fffbff]
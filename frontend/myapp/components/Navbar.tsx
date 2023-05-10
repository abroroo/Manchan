import Link from 'next/link'
import React from 'react'

interface Props {}

const Navbar = () => {

  return (
  <div>
    
    <div className='flex flex-row p-2 items-center justify-center'>
    <Link href="/menu"><p className='mx-5'>Menu</p></Link>
    <Link href="/"><p className='mx-5'>Reserve</p></Link>
    <Link href="/about"><p className='mx-5'>About</p></Link>
   
    </div>
  </div> 

  )
}

export default Navbar
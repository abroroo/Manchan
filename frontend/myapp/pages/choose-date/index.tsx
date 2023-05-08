import React from 'react'
import Link from 'next/link';
import DateForm from '../../components/DateForm';

interface Props {}

const index = () => {
  return (
  

    <div className='flex h-screen flex-col items-center justify-start'>
      <h1 className='text-6xl font-bold mt-20'>Choose the Date Page</h1>
      <div className='flex flex-row mt-10 p-10 items-center justify-between'>
      <DateForm />
      </div>
     
      <div className='flex flex-col items-center mt-20'>
      <Link className="flex items-start justify-center m-5" href= "/choose-menu">
  
  <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Confirm!</button>
  
  </Link>
  <Link  className="m-5" href="/">
    
    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Home!</button>
    
    </Link>
      </div>

     
    </div>
 
  )
}

export default index
import React from 'react'
import Link from 'next/link';


const Landing = () => {




  return (



    <div className=''>
      <h1 className='text-6xl font-bold'>Manchan Food Service </h1>
      <Link className="flex mt-20 items-start justify-center" href= "/choose-date">
  
<button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Reserve an Event!</button>

</Link>
    </div>
    
    
    
    )

}

export default Landing


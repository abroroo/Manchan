import React from 'react'
import Link from 'next/link';
import Polygon from './Polygon';
import Navbar from './Navbar';


const Landing = () => {




  return (



    <div className='h-screen '>
      {/* <div className='flex items-center justify-center w-full text-white'>
      <Navbar />
      </div> */}
      
      <div className='flex items-center justify-center flex-col h-screen -mt-20'>
      <h1 className='text-6xl font-bold '>Manchan Food Service </h1>
      {/* <svg id="svg-96" viewBox="0, 0, 150, 150" className="w-[150px] h-[150px] top-[75px] left-[-75px]">
			<g transform="translate(75,75)">
				<polygon id="poly-97" opacity="1" stroke="#4A464E" stroke-width="0" stroke-miterlimit="10" fill="#000000" points="-17.365 49.24 -43.969 26.917 -50 -7.285 -32.635 -37.362 0 -49.24 32.635 -37.362 50 -7.285 43.969 26.917 17.365 49.24" className="opacity-[0.9]"></polygon>
			</g>
		<defs></defs></svg> */}
    {/* <svg viewBox="0, 0, 150, 150" className=" absolute top -32 left-32 w-[150px] h-[150px]"><Polygon points="-17.365 49.24 -43.969 26.917 -50 -7.285 -32.635 -37.362 0 -49.24 32.635 -37.362 50 -7.285 43.969 26.917 17.365 49.24" /></svg> */}
    
      <Link className="flex mt-10 items-start justify-center " href= "/register-page">
  
<button className='bg-transparent font-semibold  hover:text-green py-2 px-4 z-20'>Reserve </button>



{/* <g className=' absolute right-[533px] top-[390px]' transform="">
<svg className=""><Polygon points="-17.365 49.24 -43.969 26.917 -50 -7.285 -32.635 -37.362 0 -49.24 32.635 -37.362 50 -7.285 43.969 26.917 17.365 49.24" /></svg>
  
  </g> */}
  </Link>
      </div>
      
    </div>
    
    
    
    )

}

export default Landing


import React from 'react'

interface Props {}

const index = () => {
  return (<div className='bg-[#fff] h-screen w-screen'>

    <h1 className='text-[120px] text-gray-300 font-extrabold  h-[20%] w-[70%] flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40'>최근 이벤트</h1>
{/* Top container */}
     <div className='top_image_wrapper  flex flex-row z-10 absolute  w-screen mt-5  '>
       {/* Container for small images in the top */}
       <div className='small_images_top flex flex-row absolute h-screen animate-bg-row1'>
       <div className='sm_image_container m-10  flex h-[90vh] items-start mx-20'>
         <img src='/images/optimized/reserveHero.jpeg' alt='africa' className='lg_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
       </div>
       <div className='sm_image_container m-10  flex h-[90vh] items-end mx-20'>
         <img src='/images/optimized/ciling.jpeg' alt='ciling' className='sm_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
       </div>
       <div className='sm_image_container m-10  flex h-[90vh] items-start mx-20'>
         <img src='/images/optimized/govea.jpeg' alt='bert-wedd' className='lg_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
       </div>
       <div className='sm_image_container m-10  flex h-[90vh] items-end mx-20'>
         <img src='/images/optimized/brett.jpeg ' alt='brett' className='sm_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
       </div>
       </div>

      {/* Container for medium images  */}
        <div className='medium_images_top flex flex-row absolute h-screen animate-bg-row2'>
       <div className='md_image_container m-10  flex h-[90vh] items-end mx-20'>
         <img src='/images/optimized/reserveHero.jpeg' alt='africa' className='lg_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
       </div>
       <div className='md_image_container m-10 flex h-[90vh] items-start mx-20'>
         <img src='/images/optimized/ciling.jpeg' alt='ciling' className='sm_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
       </div>
       <div className='md_image_container m-10 flex h-[90vh] items-end mx-20'>
         <img src='/images/optimized/govea.jpeg' alt='bert-wedd' className='lg_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
       </div>
       <div className='md_image_container m-10 flex h-[90vh] items-start mx-20'>
         <img src='/images/optimized/brett.jpeg ' alt='brett' className='sm_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
       </div>
       </div>

      {/* Container for large images */}
        <div className='large_images_top flex felx-row absolute h-screen animate-bg-row3'>
       <div className='lg_image_container m-10  flex h-[90vh] items-start mx-10'>
         <img src='/images/optimized/reserveHero.jpeg' alt='africa' className='lg_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
       </div>
       <div className='lg_image_container m-10 flex h-[90vh] items-end mx-10'>
         <img src='/images/optimized/ciling.jpeg' alt='ciling' className='sm_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
       </div>
       <div className='lg_image_container m-10 flex h-[90vh] items-start mx-10'>
         <img src='/images/optimized/govea.jpeg' alt='bert-wedd' className='lg_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
       </div>
       <div className='lg_image_container m-10 flex h-[90vh] items-end mx-10'>
         <img src='/images/optimized/brett.jpeg ' alt='brett' className='sm_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
       </div>
       </div> 
    
     </div> 
  </div>)
}

export default index
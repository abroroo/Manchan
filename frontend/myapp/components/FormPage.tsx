import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Form from './Form';
import Link from 'next/link';
import ScrollingTable from './ScrollingTable';
import SmoothScroll from './Scolling/SmoothScroll';
import { motion } from 'framer-motion';




const FormPage = () => {
  
  const router = useRouter();




  const [parentButtonBackground, setParentButtonBackground] =
  useState<string>("");

// Callback function to update the parent's button background
const handleButtonBackgroundChange = (background: string) => {
  setParentButtonBackground(background);
};





 // Animation for lines 

 const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 2, type: "spring", duration: 0.7, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};







  return (
  
    <div className='flex w-screen h-screen '>
      <div className=' flex flex-col md:flex-row w-full  '>
      
      
      
      

        {/* LEFT HALF */}


        <div id='leftDiv' className=' h-screen  w-screen xl:w-[60%]  flex items-center justify-center  overflow-y-hidden   z-10 bg-[#fff]'>
          {/* <div style={{ background: buttonBackground }} className='h-[80vh] w-2 bg-[#6161FF] absolute left-0 bottom-0'></div> */}

         
        <Form onButtonBackgroundChange={handleButtonBackgroundChange} />
        
        {/* <motion.svg
  width="5"    // Set the width to 5px
  height="600" // Set the height to 800px
  viewBox="0 0 5 600" // Adjust the viewBox
  initial="hidden"
  animate="visible"
>
  <motion.line
    x1="2.5"  // Set x1 to the center of the width
    y1="120"
    x2="2.5"  // Set x2 to the center of the width
    y2="560"  // Set y2 to the height
    stroke="#F0F0F0"
    strokeWidth={1}
    variants={draw}
    custom={2}
  />
</motion.svg> */}

          {/* <div className=' h-screen xl:flex justify-end hidden '>
          <div style={{ background: buttonBackground }} className='h-[100vh] w-2 bg-[#1d040b] z-50' />
          </div> */}
         
        </div>
        











        {/* RIGHT HALF */}

        
        <div id='rightDiv' className='hidden w-[40%] xl:flex   h-screen   '> 
        
                <div className='flex flex-col items-center justify-center w-full h-full overflow-y-scroll '>

              {/* <ScrollingTable /> */}

                   <div className='flex flex-row justify-center items-center mt-20'>
                        <div className='flex-col '>
        <img src="images/outsideEvent.jpg" style={{width: 400, height: 450}} className='mr-[5px] mb-[5px] rounded ' />
                          {/* <img src="images/optimized/brett.jpeg" style={{width: 190, height: 150}} className='mr-[5px] mb-[5px]'/>
                          <img src="images/optimized/brett.jpeg" style={{width: 190, height: 150}} className='mr-[5px] my-[5px]'/>
                          <img src="images/optimized/brett.jpeg" style={{width: 190, height: 150}} className='mr-[5px] my-[5px]'/>
                          <img src="images/optimized/brett.jpeg" style={{width: 190, height: 150}} className='mr-[5px] my-[5px]'/>
                          <img src="images/optimized/brett.jpeg" style={{width: 190, height: 150}} className='mr-[5px] my-[5px]'/>
                          <img src="images/optimized/brett.jpeg" style={{width: 190, height: 150}} className='mr-[5px] my-[5px]'/>
                          <img src="images/optimized/brett.jpeg" style={{width: 190, height: 150}} className='mr-[5px] my-[5px]'/>
                          <img src="images/optimized/brett.jpeg" style={{width: 190, height: 150}} className='mr-[5px] mt-[5px]'/> */}
                        </div>
                        {/* <div className='flex-col'>
                        <img src="images/optimized/ciling.jpeg" style={{width: 190, height: 150}} className='mx-[5px] mb-[5px]'/>
                        <img src="images/optimized/ciling.jpeg" style={{width: 190, height: 150}} className='mx-[5px] my-[5px]'/>
                        <img src="images/optimized/ciling.jpeg" style={{width: 190, height: 150}} className='mx-[5px] my-[5px]'/>
                        <img src="images/optimized/ciling.jpeg" style={{width: 190, height: 150}} className='mx-[5px] my-[5px] '/>
                        <img src="images/optimized/ciling.jpeg" style={{width: 190, height: 150}} className='mx-[5px] my-[5px]'/>
                        <img src="images/optimized/ciling.jpeg" style={{width: 190, height: 150}} className='mx-[5px] my-[5px]'/>
                        <img src="images/optimized/ciling.jpeg" style={{width: 190, height: 150}} className='mx-[5px] my-[5px]'/>
                        <img src="images/optimized/ciling.jpeg" style={{width: 190, height: 150}} className='mx-[5px] my-[5px]'/>
                        <img src="images/optimized/ciling.jpeg" style={{width: 190, height: 150}} className='mx-[5px] mt-[5px]'/>
                        </div>
                        <div className='flex-col '>
                        <img src="images/optimized/bert-wedd.jpeg" style={{width: 190, height: 150}} className='ml-[5px] mb-[5px]'/>
                        <img src="images/optimized/bert-wedd.jpeg" style={{width: 190, height: 150}} className='ml-[5px] my-[5px]'/>
                        <img src="images/optimized/bert-wedd.jpeg" style={{width: 190, height: 150}} className='ml-[5px] my-[5px]'/>
                        <img src="images/optimized/bert-wedd.jpeg" style={{width: 190, height: 150}} className='ml-[5px] my-[5px]'/>
                        <img src="images/optimized/bert-wedd.jpeg" style={{width: 190, height: 150}} className='ml-[5px] my-[5px]'/>
                        <img src="images/optimized/bert-wedd.jpeg" style={{width: 190, height: 150}} className='ml-[5px] my-[5px]'/>
                        <img src="images/optimized/bert-wedd.jpeg" style={{width: 190, height: 150}} className='ml-[5px] my-[5px]'/>
                        <img src="images/optimized/bert-wedd.jpeg" style={{width: 190, height: 150}} className='ml-[5px] my-[5px]'/>
                        <img src="images/optimized/bert-wedd.jpeg" style={{width: 190, height: 150}} className='ml-[5px] mt-[5px]'/>
                        </div> */}
                   </div>
                   
            </div>
            
        </div>







        
      </div>
    </div>
    
  );
};

export default FormPage;






{/* <div className='flex flex-col items-center justify-center text-[#fff] text-lg'>
<Link className='p-2' href="/work">최근 이벤트</Link>
<Link className='p-2' href="/how">작동 방식</Link>
<Link className='p-2' href="/about">스토리</Link>

</div> */}












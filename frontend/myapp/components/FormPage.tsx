import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Form from './Form';
import Link from 'next/link';







const FormPage = () => {
  
  const router = useRouter();




  const [parentButtonBackground, setParentButtonBackground] =
  useState<string>("");

// Callback function to update the parent's button background
const handleButtonBackgroundChange = (background: string) => {
  setParentButtonBackground(background);
};










  return (
    <div className='flex w-screen h-screen '>
      <div style={{ background: parentButtonBackground }} className=' flex flex-col md:flex-row w-full bg-[#6161ff] '>
      
      
      
      

        {/* LEFT HALF */}


        <div id='leftDiv' className=' h-screen  w-screen xl:w-[60%]  flex items-center justify-center  overflow-y-scroll   z-10 bg-[#fff]'>
          {/* <div style={{ background: buttonBackground }} className='h-[80vh] w-2 bg-[#6161FF] absolute left-0 bottom-0'></div> */}

         
        <Form onButtonBackgroundChange={handleButtonBackgroundChange} />
        

          {/* <div className=' h-screen xl:flex justify-end hidden '>
          <div style={{ background: buttonBackground }} className='h-[100vh] w-2 bg-[#1d040b] z-50' />
          </div> */}
         
        </div>
        











        {/* RIGHT HALF */}

        
        <div id='rightDiv' className='hidden w-[40%] xl:flex   h-screen    '> 
                <div className='flex flex-col items-center justify-center w-full h-full overflow-y-scroll'>


                  <div className='flex flex-col items-center justify-center text-[#fff] text-lg'>
                      <Link className='p-2' href="/work">최근 이벤트</Link>
                    <Link className='p-2' href="/how">작동 방식</Link>
                    <Link className='p-2' href="/about">스토리</Link>
                    
                  </div>

                    <footer className=' hidden  items-center justify-center absolute bottom-0 '>
                    <div className="text-[#fff] py-4 text-center ">
                    <p className="text-sm">&copy; {new Date().getFullYear()} 만찬. All rights reserved.</p>
                    </div>
                  </footer>
            </div>
        </div>







        
      </div>
    </div>
  );
};

export default FormPage;


















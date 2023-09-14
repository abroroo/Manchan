import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellConcierge, faUtensils, faSpoon, faPlus, faAnglesDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState, ChangeEvent } from 'react';
import Link from 'next/link';

interface Props {}

const index = () => {


  const [isHovered, setIsHovered] = useState(false);
  const landingLoader = useAnimation();

  useEffect(() => {
    landingLoader.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.445, 0.05, 0.058, .96],
      },
    });
  },[landingLoader])



  return (<div>
     <motion.div   
              className=' landing_loader flex flex-col items-center md:items-center justify-center absolute  w-[100vw] h-[100vh] z-[100] bg-[#fff] p-5 md:px-10 '
              initial={{ opacity: 0, y: 120,  }}
              animate={landingLoader}
              transition={{ duration: 1.6, delay: 0.4, ease: [0.445, 0.05, 0.058, .96],  }}
              >
                {/* <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex items-center justify-center text-gray-50 font-bold text-[250px] -z-[10]'>FOODCOM</h1> */}
                <div className='flex text-[#49111c] items-center justify-center mb-5  '>
                <FontAwesomeIcon icon={faSpoon} className='-rotate-45 text-[31px]'/>
                <FontAwesomeIcon icon={faUtensils}  flip='horizontal' className='text-[40px]' />
                
                </div>
                
              <h1  className=' mt-5 text-[30px] md:text-[50px] xl:text-[50px] font-[900] text-[#49111c]  px-0 md:px-5 rounded-md font-kr '>식사, 음식이 필요한 행사의 기획에서<span className='flex md:hidden'>견적, 실행, 이밴드진행까지 책이지는 도작 푸드전물 플랫폼</span><br className='hidden md:block'/><span className='hidden md:flex items-center justify-center  '> 견적, 실행, 이밴드진행까지 책이지는</span> <span className='hidden md:flex items-center justify-center'>도작 푸드전물 플랫폼</span>
              </h1>

              <div className=' flex items-center justify-center flex-col p-5 md:px-7 xl:px-10 pb-0 font-kr font-bold mt-5 md:mb-10 mb-2'>
                <p className='text-[#49111c]/90  text-[18px] md:text-[22px]    '> 고객 맞춤형 서비스 <br/><span className='flex items-center justify-center'>우한화사 푸드컴</span></p>
                
              </div>

             
             <div className=' w-full flex items-center justify-center mt-2 md:mt-5'  >
              <Link className="flex  items-start justify-center p-7 xl:px-16  " href= "/register-page">
              
                    <motion.button
                     className='border p-6 rounded-[48px] w-44 flex items-center justify-center'
                    >
                     
                         <motion.div 
                        // initial={{rotate: 0}} 
                        // animate={isHovered ? {rotate: [ -15, 15, -15, 0]} : {}} 
                        // transition={{}}
                        className=' text-[#49111c]' ><FontAwesomeIcon size='xl' bounce icon={faChevronDown} /></motion.div>
                      
                    </motion.button>
                   

                
              </Link>
              </div>
              </motion.div>
  </div>)
}

export default index
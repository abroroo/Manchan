import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBellConcierge, faUtensils, faSpoon } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
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
        duration: 1.6,
        delay: 0.8,
        ease: [0.445, 0.05, 0.058, .96],
      },
    });
  },[landingLoader])



  return (<div>
     <motion.div   
              className=' landing_loader flex flex-col items-center md:items-center justify-center absolute  w-[100vw] h-[100vh] z-[100] bg-[#fff]/90 p-5 md:px-10 '
              initial={{ opacity: 0, y: 70,  }}
              animate={landingLoader}
              transition={{ duration: 1.6, delay: 2.8, ease: [0.445, 0.05, 0.058, .96],  }}
              >
                {/* <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex items-center justify-center text-gray-50 font-bold text-[250px] -z-[10]'>FOODCOM</h1> */}
                <div className='flex text-[#49111c] items-center justify-center   '>
                <FontAwesomeIcon icon={faSpoon} className='-rotate-45 text-[31px]'/>
                <FontAwesomeIcon icon={faUtensils}  flip='horizontal' className='text-[40px]' />
                
                </div>
                
              <h1  className=' mt-5 text-[30px] md:text-[50px] xl:text-[50px] font-[900] text-[#49111c]  px-5 rounded-md font-kr '>식사, 음식이 필요한 행사의 기획에서 <br /><span className='flex items-center justify-center'> 견적, 실행, 이밴드진행까지 책이지는</span> <span className='flex items-center justify-center'>도작 푸드전물 플랫폼</span>
              </h1>

              <div className=' flex items-center justify-center flex-col p-5 md:px-7 xl:px-10 pb-0 font-kr font-bold'>
                <p className='text-[#49111c]/90  text-[16px] md:text-[30px]    '> 고객 맞춤형 서비스 <br/><span className='flex items-center justify-center'>우한화사 푸드컴</span></p>
                
              </div>

             
             <div className=' w-full flex items-center justify-center mt-5 md:mt-5'  >
              <Link className="flex  items-start justify-center p-7 xl:px-16  " href= "/register-page">
              
                    <motion.button
                      style={{
                        width: 155,
                        height: 65,
                        borderRadius: 40,
                        cursor: "pointer",
                      
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 100 }}
                      className={`bg-[#6161FF] hover:bg-[#6161FF]/80 text-[#fff] border text-[17px] p-3 md:p-10 md:px-24 z-20 flex flex-row justify-center items-center shadow-sm`}
                      whileTap={{ scale: [1, 1.1, 1] }}
                      onHoverStart={() => setIsHovered(true)} // Set isHovered to true when hovering starts
                      onHoverEnd={() => setIsHovered(false)} // Set isHovered to false when hovering ends
                    
                    >
                     
                        Get&nbsp;Started <motion.div 
                        // initial={{rotate: 0}} 
                        // animate={isHovered ? {rotate: [ -15, 15, -15, 0]} : {}} 
                        // transition={{}}
                        className='ml-2 ' ><FontAwesomeIcon bounce icon={faBellConcierge}  /></motion.div>
                      
                    </motion.button>
                   

                
              </Link>
              </div>
              </motion.div>
  </div>)
}

export default index
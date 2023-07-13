import Navbar from '../components/Navbar';
import SmoothScroll from '../components/Scolling/SmoothScroll'
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';


export default function Home() {

  const router = useRouter();
  const columnInnerControls1 = useAnimation();
  const columnInnerControls2 = useAnimation();
  const columnInnerControls3 = useAnimation();
  const columnInnerControls4 = useAnimation();
  const columnInnerControls5 = useAnimation();

  const isMiddle = useAnimation();
  const loaderFlex = useAnimation();

  const landingLoader = useAnimation();

  useEffect(() => {
    if (router.asPath === router.route) { 
    columnInnerControls1.start({ height: '100%', y: 0 });
    columnInnerControls2.start({ height: '100%', y: '10%' });
    columnInnerControls3.start({ height: '100%', y: 0 });
    columnInnerControls4.start({ height: '100%', y: '10%' });
    columnInnerControls5.start({ height: '100%', y: 0 });
    isMiddle.start({ scale: 1 });
    loaderFlex.start({ scale: 1});
    landingLoader.start({ opacity: 1, y: 0,  });
  }
  }, [router, columnInnerControls1, columnInnerControls2, columnInnerControls3, columnInnerControls4, columnInnerControls5, isMiddle, loaderFlex, landingLoader]);



const [isHovered, setIsHovered] = useState(false);
  return (
   
    <motion.main className="loader h-[100vh] w-[100vw] fixed flex items-center justify-center ">


 {/*  Title Text Start */}
              <motion.div   
              className=' landing_loader flex flex-col items-start justify-center absolute  w-[100vw] h-[100vh] z-[100] bg-[#fff] p-5 md:px-10 '
              initial={{ opacity: 0, y: 70,  }}
              animate={landingLoader}
              transition={{ duration: 1.6, delay: 2.8, ease: [0.445, 0.05, 0.058, .96],  }}
              >
                {/* <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex items-center justify-center text-gray-50 font-bold text-[250px] -z-[10]'>FOODCOM</h1> */}

              <h1  className=' text-[35px] md:text-[50px] xl:text-[125px] font-[900] text-[#49111c]  px-5 rounded-md font-kr '>행사고객 맞춥형 <span className=''><br /></span>무료 견적 플랫폼 
              </h1>

              <div className=' flex items-center justify-center flex-col p-5 md:px-7 xl:px-10 pb-0'>
                <p className='text-[#49111c]/90  text-[16px] md:text-[20px]    '> 당신의 모든 행사의 기획, 서빙, 식사가 <br className='md:hidden xl:hidden block ' />푸드컴 팀에 의해 관리되는 플랫폼</p>
                
              </div>

             
             


              <Link className="flex  items-start justify-center p-5 xl:px-8 " href= "/register-page">
              
                    <motion.button
                      style={{
                        width: 155,
                        height: 65,
                        borderRadius: 30,
                        cursor: "pointer",
                      
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 100 }}
                      className={`bg-[#6161FF] hover:bg-[#6161FF]/80 text-[#fff] border text-[17px] p-2 z-20 `}
                      whileTap={{ scale: [1, 1.1, 1] }}
                      onHoverStart={() => setIsHovered(true)} // Set isHovered to true when hovering starts
                      onHoverEnd={() => setIsHovered(false)} // Set isHovered to false when hovering ends
                    
                    >
                      <span className="flex flex-row items-center justify-center">
                        Get Started
                        <motion.svg
                          aria-hidden="true"
                          className={`w-5 h-10 ml-1 ${isHovered ? "animate-spin" : ""}`} // Add the animate-bounce class when isHovered is true
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 6v12M18 12l-6 6-6-6"></path>
                        </motion.svg>{" "}
                      </span>
                    </motion.button>


                
              </Link>
              </motion.div>
           


            {/*  Title Text End */}

      <motion.div 
      initial={{ scale: 0.240 }}
      animate={isMiddle}
      transition={{ duration: 2.1, delay: 2.1, ease: [0.445, 0.05, 0.058, .96] }}
      className='loader_flex flex flex-row items-stretch h-[561vh]   '>
        <div className='loader_column px-[7vh] flex flex-col items-stretch justify-start'>
            <motion.div 
            initial={{ height: '350%', y: '70%' }}
            animate={columnInnerControls1}
            transition={{ duration: 2.7, ease: [0.8, 0.240, 0.104, .773] }}
            className='loader_column_inner flex flex-col justify-between items-stretch h-full flex-none is-edge '>
                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/bert-hall.jpeg' alt="Image 1"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/rene.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/bert-wedd.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/africa.jpeg' alt="Image 4"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/brett.jpeg' alt="Image 5"/>
                </div>
            </motion.div>
        </div>


        <div className='loader_column px-[7vh] is-alt flex flex-col items-stretch justify-end'>
            <motion.div 
            initial={{ height: '340%', y: '-40%' }}
            animate={columnInnerControls2}
            transition={{ duration: 2.7, ease: [0.8, 0.240, 0.104, .773] }}
            className='loader_column_inner flex flex-col justify-between items-stretch h-full flex-none is-reversed'>
                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/govea.jpeg' alt="Image 1"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/trivet.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/naim.jpeg' alt="Image 3"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/pietro.jpeg' alt="Image 4"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/skyline.jpeg' alt="Image 5"/>
                </div>
            </motion.div>
        </div>


        <div className='loader_column px-[7vh]'>
            <motion.div 
            initial={{ height: '370%', y: '40%' }}
            animate={columnInnerControls3}
            transition={{ duration: 2.7, ease: [0.8, 0.240, 0.104, .773] }}
            className='loader_column_inner flex flex-col justify-between items-stretch h-full flex-none is-centered'>
                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/trivet.jpeg' alt="Image 1"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/brett.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <motion.img
                  initial={{ scale: 1.5 }}
                  animate={isMiddle}
                  transition={{ duration: 2.1, delay: 2.1,  ease: [0.445, 0.05, 0.058, .96] }}
                  className='loader_img w-full h-full object-cover is-middle '
                  src='images/optimized/ciling.jpeg'
                  
                    />
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/africa.jpeg' alt="Image 4"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/rene.jpeg' alt="Image 5"/>
                </div>
            </motion.div>
            
        </div>


        <div className='loader_column px-[7vh] is-alt flex flex-col items-stretch justify-end'>
            <motion.div 
            initial={{ height: '340%', y: '-40%' }}
            animate={columnInnerControls4}
            transition={{ duration: 2.7, ease: [0.8, 0.240, 0.104, .773] }}
            className='loader_column_inner flex flex-col justify-between items-stretch h-full flex-none is-reversed'>
                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/bert-hall.jpeg' alt="Image 1"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/skyline.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/govea.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/bertelli.jpeg' alt="Image 4"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/naim.jpeg' alt="Image 5"/>
                </div>
            </motion.div>
        </div>


        <div className='loader_column px-[7vh]'>
            <motion.div 
            initial={{ height: '350%', y: '70%' }}
            animate={columnInnerControls5}
            transition={{ duration: 2.7, ease: [0.8, 0.240, 0.104, .773]}}
            className='loader_column_inner flex flex-col justify-between items-stretch h-full flex-none is-edge'>
                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/govea.jpeg' alt="Image 1"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/rene.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/bert-hall.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/skyline.jpeg' alt="Image 4"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/brett.jpeg' alt="Image 5"/>
                </div>
            </motion.div>
        </div>



      </motion.div>
     
    </motion.main>
    
  )
}


















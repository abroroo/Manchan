import React, {FC} from 'react'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react';
import { Outside, Wedding, Real, Bussiness} from '../images';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { set } from 'date-fns';


interface GalleryProps {
    onClose: () => void; // Specify the type of onClose prop
  }
  

  

const EventsModal: FC<GalleryProps> = ({ onClose }) => {


const [widthReal, setWidthReal] = useState(0);
const recentSlider = useRef<HTMLDivElement>(null);



useEffect(() => {
    setWidthReal((recentSlider.current as HTMLDivElement).scrollWidth - (recentSlider.current as HTMLDivElement).offsetWidth);
}, []);




const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };




  // following cursor cirlce 


const cursorRef = useRef<HTMLDivElement>(null);
const cursorRef2 = useRef<HTMLDivElement>(null);
const cursorRef3 = useRef<HTMLDivElement>(null);
const imageWrapperRef2 = useRef<HTMLDivElement>(null);
const imageWrapperRef3 = useRef<HTMLDivElement>(null);
const imageWrapperRef = useRef<HTMLDivElement>(null);
const [isMouseWithinHero, setIsMouseWithinHero] = useState(false);
const [cursorX, setCursorX] = useState(800);
const [cursorY, setCursorY] = useState(200);
const [cursorX2, setCursorX2] = useState(0);
const [cursorY2, setCursorY2] = useState(0);
const [cursorX3, setCursorX3] = useState(0);
const [cursorY3, setCursorY3] = useState(0);


const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const imageElement = imageWrapperRef.current;
  const imageElement2 = imageWrapperRef2.current;
  const imageElement3 = imageWrapperRef3.current;
  const cursorElement = cursorRef.current;
  const cursorElement2 = cursorRef2.current;
  const cursorElement3 = cursorRef3.current;

  if (imageElement && cursorElement || imageElement && cursorElement2 || imageElement && cursorElement3) {
    const imageRect = imageElement.getBoundingClientRect();
    const imageRect2 = imageElement2.getBoundingClientRect();
    const imageRect3 = imageElement3.getBoundingClientRect();
    const x = e.clientX - imageRect.left;
    const y = e.clientY - imageRect.top;
    const x2 = e.clientX - imageRect2.left;
    const y2 = e.clientY - imageRect2.top;
    const x3 = e.clientX - imageRect3.left;
    const y3 = e.clientY - imageRect3.top;

    
    // Set the cursor's position based on the mouse position within the image with a slight delay
    setCursorX(x);
    setCursorY(y);
    setCursorX2(x2);
    setCursorY2(y2);
    setCursorX3(x3);
    setCursorY3(y3);


  }
};





const handleMouseEnter = () => {
  setIsMouseWithinHero(true);
};


const handleMouseLeave = () => {
  setIsMouseWithinHero(false);
};


  return (<motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0 }}
    transition={{delay: 0, duartion: 1, }}
    className='z-[110] bg-[#fff] w-screen h-screen fixed overflow-y-scroll px-5 pb-40 mt-[84px]'>

        {/* THis button */}
        <motion.div
       
        className='fixed top-[72px] left-[50%] bg-white rounded-b-[40%] h-10 w-10 flex items-center justify-center'>
<motion.button
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 2.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  className="  border-[1.5px]  h-6 w-6 border-[#49111c] rounded-md"
  onClick={onClose}
>

  <motion.svg
    width="20"
    height="20" // Adjusted height to 30px
    viewBox="0 0 20 20" // Adjusted viewBox
    initial="hidden"
    animate="visible"
   >
    <motion.line
      x1="16"
      y1="16"
      x2="5"
      y2="5"
      stroke="#49111c"
      variants={draw}
      custom={2.5}
      strokeWidth={1.5}
    />
    <motion.line
      x1="5"
      y1="16"
      x2="16"
      y2="5"
      stroke="#49111c"
      variants={draw}
      custom={2}
      strokeWidth={1.5}
    />
  </motion.svg>
</motion.button>
</motion.div>
         
         

        <motion.div 
        initial={{opacity: 1, scale: 0.7 }}
        whileInView={{opacity: 1, scale: 1 }}
        transition={{delay: 0.8, duration: 1, ease: [.4,.18,0,1.03]}}
        viewport={{once: true}}
        ref={recentSlider}  
         className=' corousel overflow-hidden  mt-5 mx-16'>
            <motion.h4 
            initial={{opacity: 0, x: -100, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
            viewport={{once: true}}
            className='mb-2 mt-5 ml-2 pl-[2px] text-[16px]  font-semibold uppercase'>최근 이벤트</motion.h4>
            <motion.p 
            initial={{opacity: 0, x: -100, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 1.2, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
            viewport={{once: true}}
            className='text-[15px]  ml-2 pl-[2px] uppercase text-slate-500 mb-5'>가장 최신 이벤트에 대한 최근 서비스 소개!</motion.p>
            
            <motion.div 
            ref={imageWrapperRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
            whileTap={{cursor: 'grabbing'}} 
            className='h-full w-full cursor-grab '
            >
            <motion.div 
            // drag='x' 
            // dragConstraints={{right: 0, left: -widthReal}} 
            // dragElastic={0.1}
           
            className='inner-corousel relative flex overflow-x-scroll overflow-y-hidden'>
               {isMouseWithinHero && (
              <motion.div
              id="cursor"
              ref={cursorRef}
             style={{
              width: "80px",
              height: "80px",
              backgroundColor: "white",
              borderRadius: "50%",
              position: "absolute",
              zIndex: 100,
            }}
            initial={{ opacity: 0, scale: 0.5, x: cursorX , y: cursorY  }} // Add a slight delay and position the cursor below
            animate={{ scale: 1, opacity: 1, x: cursorX , y: cursorY  }}
            exit={{ opacity: 0, scale: 0.5 }} // Optional exit animation
            transition={{ duration: 0.3 } }
              className=' text-[#49111c] rounded-full  flex flex-col items-center justify-center text-sm pt-3'>Scroll<motion.div
              initial={{ x: -10, opacity: 0}}
              transition={{ repeat: Infinity, duration: 1, delay: 1, repeatDelay: 1, ease: [0.22, 1, 0.36, 1] }}
              animate={{ x: 10, opacity: [0, 1, 0]}}
              
              //exit={{ opacity: 0}}
              ><FontAwesomeIcon className="" icon={faArrowRight} /></motion.div>
              </motion.div>
               )}
                {Real.map((image: any, a: number) => {
                    return (
                        <motion.div 
                        initial={{opacity: 0, x: -70,  }}
                        whileInView={{opacity: 1, x: 0, }}
                        transition={{delay: a / 5, duration: 2, ease: [0.22, 1, 0.36, 1]}}
                        viewport={{once: true}}
                        key={image.id} className='min-h-[550px] min-w-[500px] p-3 pointer-events-none'>
                            <motion.p 
                            initial={{opacity: 0, y: 15, }}
                            whileInView={{opacity: 1, y: 0, }}
                            transition={{delay: 1.6, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                            viewport={{once: true}}
                            className='pl-[2px] mb-4 font-semibold text-[13px]'>0{a}</motion.p>
                            <Image src={image.imageSrc} alt="Real"  width={500}  height={550} className=' w-full h-full'/>
                        </motion.div>
                    )
                })}
            </motion.div>
            </motion.div>
        </motion.div>


                {/* Outside Events  */}
        <motion.div 
        initial={{opacity: 0, y: 100 }}
        whileInView={{opacity: 1, y: 0 }}
        transition={{delay: 0, duration: 0.5, ease: [.4,.18,0,1.03]}}
        viewport={{once: true}}
        className='mr-16 ml-20 mt-20 mb-10'>
            <motion.h4 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            viewport={{once: true}}
            className=' my-7 text-[17px] font-semibold text-slate-500 uppercase'>큰 행사</motion.h4>
        <Image src='/images/large-inside.jpg' width={1200} height={1000} alt="Bert wedding"  className='mb-20 w-full '/>
        </motion.div>


        <motion.div 
        initial={{opacity: 0, y: 100 }}
        whileInView={{opacity: 1, y: 0 }}
        transition={{delay: 0, duration: 0.5, ease: [.4,.18,0,1.03]}}
        viewport={{once: true}}
         ref={recentSlider} 
         className=' corousel overflow-hidden  mx-16'>
            <motion.h4 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            viewport={{once: true}}
            className='mb-2 ml-3 mt-10 pl-[2px] text-[16px] font-semibold uppercase'>자연 속 행사들</motion.h4>
            <motion.p 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            viewport={{once: true}}
            className='text-[15px] ml-3 pl-[2px] uppercase font-semibold text-slate-500 mb-5'>우리가 진행한 야외 이벤트 중 일부. 축제, 스포츠 대회, 사교 모임 등 다양한 이벤트들을 자세히 살펴보세요</motion.p>
            <motion.div 
            ref={imageWrapperRef2}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
            whileTap={{cursor: 'grabbing'}} 
            className='h-full w-full cursor-grab '>
            <motion.div 
            // drag='x' 
            // dragConstraints={{right: 0, left: -widthReal  }} 
            // dragElastic={0.1}
            className='inner-corousel flex overflow-x-scroll overflow-y-hidden '>
               {isMouseWithinHero && (
              <motion.div
              id="cursor"
              ref={cursorRef2}
             style={{
              width: "80px",
              height: "80px",
              backgroundColor: "white",
              borderRadius: "50%",
              position: "absolute",
              zIndex: 100,
            }}
            initial={{ opacity: 0, scale: 0.5, x: cursorX2 , y: cursorY2  }} // Add a slight delay and position the cursor below
            animate={{ scale: 1, opacity: 1, x: cursorX2 , y: cursorY2  }}
            exit={{ opacity: 0, scale: 0.5 }} // Optional exit animation
            transition={{ duration: 0.3 } }
              className=' text-[#49111c] rounded-full  flex flex-col items-center justify-center text-sm pt-3'>Scroll<motion.div
              initial={{ x: -10, opacity: 0}}
              transition={{ repeat: Infinity, duration: 1, delay: 0, repeatDelay: 1, ease: [0.22, 1, 0.36, 1] }}
              animate={{ x: 10, opacity: [0, 1, 0]}}
              
              //exit={{ opacity: 0}}
              ><FontAwesomeIcon className="" icon={faArrowRight} /></motion.div>
              </motion.div>
               )}
                {Outside.map((image: any, a: number) => {
                    return (
                        <motion.div 
                        initial={{opacity: 0, x: -70,  }}
                        whileInView={{opacity: 1, x: 0, }}
                        transition={{delay: a / 10, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        viewport={{once: true}}
                        key={image.id} className='min-h-[550px] min-w-[500px] p-3 pointer-events-none'>
                            <motion.p 
                            initial={{opacity: 0, y: 15, }}
                            whileInView={{opacity: 1, y: 0, }}
                            transition={{delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                            className='pl-[2px] mb-4 font-semibold text-[13px]'>0{a}</motion.p>
                            <Image src={image.imageSrc} alt="Real"  width={500}  height={550} className=' w-full h-full'/>
                        </motion.div>
                    )
                })}
            </motion.div>
            </motion.div>
        </motion.div>


{/* Corporate Events */}

        <motion.div 
        initial={{opacity: 0, y: 100 }}
        whileInView={{opacity: 1, y: 0 }}
        transition={{delay: 0, duration: 0.5, ease: [.4,.18,0,1.03]}}
        viewport={{once: true}}
        className='mr-16 ml-20 mt-20'>
            <motion.h4 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            viewport={{once: true}}
            className=' my-5 text-[16px] font-semibold text-slate-500 uppercase'>우아함이 공개됩니다: 부드콤의 정례 행사</motion.h4>
        <Image src='/images/real/bussiness/large_business.jpeg' width={1200} height={1000} alt="Bert wedding"  className='mb-20 w-full '/>
        </motion.div>


        <motion.div 
        initial={{opacity: 0, y: 100 }}
        whileInView={{opacity: 1, y: 0 }}
        transition={{delay: 0, duration: 0.5, ease: [.4,.18,0,1.03]}}
        viewport={{once: true}}
         ref={recentSlider} 
         className=' corousel overflow-hidden mt-5 mx-16'>
            <motion.h4 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            viewport={{once: true}}
            className='mb-2 ml-3 pl-[2px] text-[16px] font-semibold uppercase'>특별한 자리를 위한 서비스</motion.h4>
            <motion.p 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            viewport={{once: true}}
            className='text-[15px] ml-3 pl-[2px] uppercase font-semibold text-slate-500 mb-5'>우리의 고요한 서비스로 감각적인 행사를 완성하세요. 결혼식, 기업 행사, 공식 행사 등 다양한 포멀 이벤트에서 우리의 전문성을 경험하세요</motion.p>
            <motion.div 
            ref={imageWrapperRef3}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
            whileTap={{cursor: 'grabbing'}} 
            className='h-full w-full cursor-grab '>
            <motion.div 
            // drag='x' 
            // dragConstraints={{right: 0, left: -widthReal  }} 
            // dragElastic={0.1}
            className='inner-corousel flex  overflow-x-scroll overflow-y-hidden'>
               {isMouseWithinHero && (
              <motion.div
              id="cursor"
              ref={cursorRef3}
             style={{
              width: "80px",
              height: "80px",
              backgroundColor: "white",
              borderRadius: "50%",
              position: "absolute",
              zIndex: 100,
            }}
            initial={{ opacity: 0, scale: 0.5, x: cursorX3 , y: cursorY3  }} // Add a slight delay and position the cursor below
            animate={{ scale: 1, opacity: 1, x: cursorX3 , y: cursorY3  }}
            exit={{ opacity: 0, scale: 0.5 }} // Optional exit animation
            transition={{ duration: 0.3 } }
              className=' text-[#49111c] rounded-full  flex flex-col items-center justify-center text-sm pt-3'>Scroll<motion.div
              initial={{ x: -10, opacity: 0}}
              transition={{ repeat: Infinity, duration: 1, delay: 1, repeatDelay: 1, ease: [0.22, 1, 0.36, 1] }}
              animate={{ x: 10, opacity: [0, 1, 0]}}
              
              //exit={{ opacity: 0}}
              ><FontAwesomeIcon className="" icon={faArrowRight} /></motion.div>
              </motion.div>
               )}
                {Bussiness.map((image: any, a: number) => {
                    return (
                        <motion.div 
                        initial={{opacity: 0, x: -70,  }}
                        whileInView={{opacity: 1, x: 0, }}
                        transition={{delay: a / 10, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        viewport={{once: true}}
                        key={image.id} className='min-h-[550px] min-w-[500px] p-3 pointer-events-none'>
                            <motion.p 
                            initial={{opacity: 0, y: 15, }}
                            whileInView={{opacity: 1, y: 0, }}
                            transition={{delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                            className='pl-[2px] mb-4 font-semibold text-[13px]'>0{a}</motion.p>
                            <Image src={image.imageSrc} alt="Real"  width={500}  height={550} className=' w-full h-full'/>
                        </motion.div>
                    )
                })}
            </motion.div>
            </motion.div>
        </motion.div>



        
  </motion.div>)
}

export default EventsModal
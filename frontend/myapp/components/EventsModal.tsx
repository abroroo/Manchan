import React, {FC} from 'react'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react';
import { Outside, Wedding, Real, Bussiness} from '../images';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
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
        transition={{delay: 1.1, duration: 1, ease: [.4,.18,0,1.03]}}
        viewport={{once: true}}
        ref={recentSlider}  
         className=' corousel overflow-hidden  mt-5 mx-16'>
            <motion.h4 
            initial={{opacity: 0, x: -100, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 1.7, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
            viewport={{once: true}}
            className='mb-2 mt-5 ml-2 pl-[2px] text-[16px] font-semibold uppercase'>최근 이벤트</motion.h4>
            <motion.p 
            initial={{opacity: 0, x: -100, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 1.5, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
            viewport={{once: true}}
            className='text-[15px] ml-2 pl-[2px] uppercase text-slate-500 mb-5'>가장 최신 이벤트에 대한 최근 서비스 소개!</motion.p>
            <motion.div 
            whileTap={{cursor: 'grabbing'}} 
            className='h-full w-full cursor-grab '
            >
            <motion.div drag='x' dragConstraints={{right: 0, left: -widthReal}} 
             dragElastic={0.1}
            className='inner-corousel flex'>
                {Real.map(image => {
                    return (
                        <motion.div 
                        initial={{opacity: 0, x: -70,  }}
                        whileInView={{opacity: 1, x: 0, }}
                        transition={{delay: image.id / 4.5, duration: 2, ease: [0.22, 1, 0.36, 1]}}
                        viewport={{once: true}}
                        key={image.id} className='min-h-[550px] min-w-[500px] p-3 pointer-events-none'>
                            <motion.p 
                            initial={{opacity: 0, y: 15, }}
                            whileInView={{opacity: 1, y: 0, }}
                            transition={{delay: 1.6, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                            viewport={{once: true}}
                            className='pl-[2px] mb-4 font-semibold text-[13px]'>0{image.id}</motion.p>
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
        className='mr-16 ml-20 mt-20'>
            <motion.h4 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            className=' my-5 text-[16px] font-semibold text-slate-500 uppercase'>큰 행사</motion.h4>
        <Image src='/images/large-inside.jpg' width={1200} height={1000} alt="Bert wedding"  className='mb-20 w-full '/>
        </motion.div>


        <motion.div 
        initial={{opacity: 0, y: 100 }}
        whileInView={{opacity: 1, y: 0 }}
        transition={{delay: 0, duration: 0.5, ease: [.4,.18,0,1.03]}}
         ref={recentSlider} 
         className=' corousel overflow-hidden mt-5 mx-16'>
            <motion.h4 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            className='mb-2 ml-3 pl-[2px] text-[16px] font-semibold uppercase'>자연 속 행사들</motion.h4>
            <motion.p 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            className='text-[15px] ml-3 pl-[2px] uppercase font-semibold text-slate-500 mb-5'>우리가 진행한 야외 이벤트 중 일부. 축제, 스포츠 대회, 사교 모임 등 다양한 이벤트들을 자세히 살펴보세요</motion.p>
            <motion.div 
            whileTap={{cursor: 'grabbing'}} 
            className='h-full w-full cursor-grab '>
            <motion.div drag='x' dragConstraints={{right: 0, left: -widthReal  }} 
             dragElastic={0.1}
            className='inner-corousel flex  '>
                {Outside.map(image => {
                    return (
                        <motion.div 
                        initial={{opacity: 0, x: -70,  }}
                        whileInView={{opacity: 1, x: 0, }}
                        transition={{delay: image.id / 5, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        viewport={{once: true}}
                        key={image.id} className='min-h-[550px] min-w-[500px] p-3 pointer-events-none'>
                            <motion.p 
                            initial={{opacity: 0, y: 15, }}
                            whileInView={{opacity: 1, y: 0, }}
                            transition={{delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                            className='pl-[2px] mb-4 font-semibold text-[13px]'>0{image.id}</motion.p>
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
        className='mr-16 ml-20 mt-20'>
            <motion.h4 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            className=' my-5 text-[16px] font-semibold text-slate-500 uppercase'>우아함이 공개됩니다: 부드콤의 정례 행사</motion.h4>
        <Image src='/images/real/bussiness/large_business.jpeg' width={1200} height={1000} alt="Bert wedding"  className='mb-20 w-full '/>
        </motion.div>


        <motion.div 
        initial={{opacity: 0, y: 100 }}
        whileInView={{opacity: 1, y: 0 }}
        transition={{delay: 0, duration: 0.5, ease: [.4,.18,0,1.03]}}
         ref={recentSlider} 
         className=' corousel overflow-hidden mt-5 mx-16'>
            <motion.h4 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            className='mb-2 ml-3 pl-[2px] text-[16px] font-semibold uppercase'>특별한 자리를 위한 서비스</motion.h4>
            <motion.p 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            className='text-[15px] ml-3 pl-[2px] uppercase font-semibold text-slate-500 mb-5'>우리의 고요한 서비스로 감각적인 행사를 완성하세요. 결혼식, 기업 행사, 공식 행사 등 다양한 포멀 이벤트에서 우리의 전문성을 경험하세요</motion.p>
            <motion.div 
            whileTap={{cursor: 'grabbing'}} 
            className='h-full w-full cursor-grab '>
            <motion.div drag='x' dragConstraints={{right: 0, left: -widthReal  }} 
             dragElastic={0.1}
            className='inner-corousel flex  '>
                {Bussiness.map(image => {
                    return (
                        <motion.div 
                        initial={{opacity: 0, x: -70,  }}
                        whileInView={{opacity: 1, x: 0, }}
                        transition={{delay: image.id / 5, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        viewport={{once: true}}
                        key={image.id} className='min-h-[550px] min-w-[500px] p-3 pointer-events-none'>
                            <motion.p 
                            initial={{opacity: 0, y: 15, }}
                            whileInView={{opacity: 1, y: 0, }}
                            transition={{delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                            className='pl-[2px] mb-4 font-semibold text-[13px]'>0{image.id}</motion.p>
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
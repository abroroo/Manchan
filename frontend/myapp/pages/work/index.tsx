import React, {FC} from 'react'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react';
import { Outside, Wedding, Real, Bussiness} from '../../images';
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
    className='z-[110] bg-[#fff] w-screen h-screen fixed overflow-y-scroll md:px-1 pb-40 mt-[84px]'>

      
        <motion.div 
        initial={{opacity: 1, scale: 0.7 }}
        whileInView={{opacity: 1, scale: 1 }}
        transition={{delay: 1.1, duration: 1, ease: [.4,.18,0,1.03]}}
        viewport={{once: true}}
        ref={recentSlider}  
         className=' corousel overflow-hidden  mt-5 mx-5 md:mx-16'>
            <motion.h4 
            initial={{opacity: 0, x: -100, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 1.7, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            viewport={{once: true}}
            className='mb-2 mt-5 ml-2 pl-[2px] text-[16px] font-semibold uppercase'>최근 이벤트</motion.h4>
            <motion.p 
            initial={{opacity: 0, x: -100, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 1.5, duration: 1, ease: [0.22, 1, 0.36, 1]}}
            viewport={{once: true}}
            className='text-[15px] ml-2 pl-[2px] uppercase text-slate-500 mb-5'>가장 최신 이벤트에 대한 최근 서비스 소개!</motion.p>
            <motion.div 
            whileTap={{cursor: 'grabbing'}} 
            className='h-full w-full cursor-grab '
            >
            <motion.div 
            // drag='x' 
            // dragConstraints={{right: 0, left: -widthReal}} 
            // dragElastic={0.1}
            className='inner-corousel flex overflow-x-scroll overflow-y-hidden'>
                {Real.map(image => {
                    return (
                        <motion.div 
                        //initial={{opacity: 0,   }}
                        //whileInView={{opacity: 1,  }}
                        //transition={{delay: image.id / 4.5, duration: 0.1, ease: [0.22, 1, 0.36, 1]}}
                        //viewport={{once: true}}
                        key={image.id} className='min-h-[450px] min-w-[400px] p-3 pointer-events-none'>
                            <motion.p 
                            initial={{opacity: 0, y: 15, }}
                            whileInView={{opacity: 1, y: 0, }}
                            transition={{delay: 0.1, duration: 0.2, ease: [0.22, 1, 0.36, 1]}}
                            viewport={{once: true}}
                            className='pl-[2px] mb-4 font-semibold text-[13px]'>0{image.id}</motion.p>
                            <Image src={image.imageSrc} alt="Real"  width={400}  height={450} className=' w-full h-full'/>
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
        className=' mx-5 md:mr-16 md:ml-20 md:mt-20'>
            <motion.h4 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
            className=' my-5 text-[16px] font-semibold text-slate-500 uppercase'>큰 행사</motion.h4>
        <Image src='/images/large-inside.jpg' width={1200} height={1000} alt="Bert wedding"  className='mb-20 w-full '/>
        </motion.div>


        <motion.div 
        initial={{opacity: 0, y: 100 }}
        whileInView={{opacity: 1, y: 0 }}
        transition={{delay: 0, duration: 0.5, ease: [.4,.18,0,1.03]}}
         ref={recentSlider} 
         className=' corousel overflow-hidden mt-5 mx-5 md:mx-16'>
            <motion.h4 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
            className='mb-2 md:ml-3 pl-[2px] text-[16px] font-semibold uppercase'>자연 속 행사들</motion.h4>
            <motion.p 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
            className='text-[15px] md:ml-3 pl-[2px] uppercase font-semibold text-slate-500 mb-5'>우리가 진행한 야외 이벤트 중 일부. 축제, 스포츠 대회, 사교 모임 등 다양한 이벤트들을 자세히 살펴보세요</motion.p>
            <motion.div 
            whileTap={{cursor: 'grabbing'}} 
            className='h-full w-full cursor-grab '>
            <motion.div 
            // drag='x' 
            // dragConstraints={{right: 0, left: -widthReal  }} 
            // dragElastic={0.1}
            className='inner-corousel flex overflow-x-scroll overflow-y-hidden '>
                {Outside.map(image => {
                    return (
                        <motion.div 
                        // initial={{opacity: 0,   }}
                        // whileInView={{opacity: 1,  }}
                        // transition={{delay: image.id / 5, duration: 0.1, ease: [0.22, 1, 0.36, 1]}}
                        // viewport={{once: true}}
                        key={image.id} className='min-h-[450px] min-w-[400px] p-3 pointer-events-none'>
                            <motion.p 
                            initial={{opacity: 0, y: 15, }}
                            whileInView={{opacity: 1, y: 0, }}
                            transition={{delay: 0.1, duration: 0.2, ease: [0.22, 1, 0.36, 1]}}
                            className='pl-[2px] mb-4 font-semibold text-[13px]'>0{image.id}</motion.p>
                            <Image src={image.imageSrc} alt="Real"  width={400}  height={450} className=' w-full h-full'/>
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
        className='mx-5 md:mr-16 md:ml-20 md:mt-20'>
            <motion.h4 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
            className=' my-5 text-[16px] font-semibold text-slate-500 uppercase'>우아함이 공개됩니다: 부드콤의 정례 행사</motion.h4>
        <Image src='/images/real/bussiness/large_business.jpeg' width={1200} height={1000} alt="Bert wedding"  className='mb-20 w-full '/>
        </motion.div>


        <motion.div 
        initial={{opacity: 0, y: 100 }}
        whileInView={{opacity: 1, y: 0 }}
        transition={{delay: 0, duration: 0.5, ease: [.4,.18,0,1.03]}}
         ref={recentSlider} 
         className=' corousel overflow-hidden mt-5 mx-5 md:mx-16'>
            <motion.h4 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
            className='mb-2  md:ml-3 pl-[2px] text-[16px] font-semibold uppercase'>특별한 자리를 위한 서비스</motion.h4>
            <motion.p 
            initial={{opacity: 0, x: -70, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
            className='text-[15px]  md:ml-3 pl-[2px] uppercase font-semibold text-slate-500 mb-5'>우리의 고요한 서비스로 감각적인 행사를 완성하세요. 결혼식, 기업 행사, 공식 행사 등 다양한 포멀 이벤트에서 우리의 전문성을 경험하세요</motion.p>
            <motion.div 
            whileTap={{cursor: 'grabbing'}} 
            className='h-full w-full cursor-grab '>
            <motion.div 
            // drag='x' 
            // dragConstraints={{right: 0, left: -widthReal  }} 
            // dragElastic={0.1}
            className='inner-corousel flex overflow-x-scroll overflow-y-hidden '>
                {Bussiness.map(image => {
                    return (
                        <motion.div 
                        // initial={{opacity: 0,   }}
                        // whileInView={{opacity: 1,  }}
                        // transition={{delay: image.id / 5, duration: 0.1, ease: [0.22, 1, 0.36, 1]}}
                        // viewport={{once: true}}
                        key={image.id} className='min-h-[450px] min-w-[400px] p-3 pointer-events-none'>
                            <motion.p 
                            initial={{opacity: 0, y: 15, }}
                            whileInView={{opacity: 1, y: 0, }}
                            transition={{delay: 0.1, duration: 0.2, ease: [0.22, 1, 0.36, 1]}}
                            className='pl-[2px] mb-4 font-semibold text-[13px]'>0{image.id}</motion.p>
                            <Image src={image.imageSrc} alt="Real"  width={400}  height={450} className=' w-full h-full'/>
                        </motion.div>
                    )
                })}
            </motion.div>
            </motion.div>
        </motion.div>



        
  </motion.div>)
}

export default EventsModal























// import React, {useEffect, useState, useRef} from 'react'
// import { motion, useMotionValue, useAnimation } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faXmark, faArrowRight, faBellConcierge, faListCheck, faFilePen } from '@fortawesome/free-solid-svg-icons'
// import { Outside, Wedding, Real} from '../../images';
// import Image from 'next/image'


// interface Props {}

// const index = () => {

//   const sliderRef = useRef<HTMLDivElement | null>(null); // Change the type of the ref
//   const slidesRef = useRef<HTMLUListElement | null>(null); // Change the type of the ref

//   const [sliderWidth, setSliderWidths] = useState(0);
//   const [slidesWidth, setSlidesWidths] = useState(0);

//   const slideMarginRight = 12;
//   const totalSlidesMarginRight = slideMarginRight * Real.length;
//   const totalSlidesMarginRightOutside = slideMarginRight * Outside.length;
//   const totalSlidesMarginRightWedding = slideMarginRight * Wedding.length;

//   useEffect(() => {
//     const measureSliderWidth = () => {
//       if (sliderRef.current) {
//         setSliderWidths(sliderRef.current.clientWidth);
//       }
//     };
  
//     const measureSlidesWidth = () => {
//       if (slidesRef.current) {
//         const slidesNode = slidesRef.current.childNodes;
//         const slidesArr = Array.from(slidesNode);
//         const slidesSumWidth = slidesArr.reduce(
//           (acc, node) => acc + (node instanceof HTMLElement ? node.clientWidth : 0),
//           0
//         );
//         setSlidesWidths(slidesSumWidth);
//       }
//     };
  
//     measureSliderWidth();
//     measureSlidesWidth();
  
//     window.addEventListener("resize", measureSliderWidth);
//     window.addEventListener("resize", measureSlidesWidth);
  
//     return () => {
//       window.removeEventListener("resize", measureSliderWidth);
//       window.removeEventListener("resize", measureSlidesWidth);
//     };
//   }, [sliderWidth, slidesWidth]);











// // Circle Following Mouse pointer effect


// const cursorRef = useRef<HTMLDivElement>(null);
// const imageFirstParent = useRef<HTMLDivElement>(null);
// const imageUlWrapper = useRef<HTMLDivElement>(null);
// const [isMouseWithinHero, setIsMouseWithinHero] = useState(false);
// const [cursorX, setCursorX] = useState(0);
// const [cursorY, setCursorY] = useState(0);


// const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//   const cursorElement = cursorRef.current;
//   const sliderElement = imageUlWrapper.current;

//   if (cursorElement && sliderElement) {
//     const x = e.clientX - sliderElement.getBoundingClientRect().left - cursorElement.offsetWidth / 2;
//     const y = e.clientY - sliderElement.getBoundingClientRect().top - cursorElement.offsetHeight / 2;

//     cursorElement.style.left = `${x}px`;
//     cursorElement.style.top = `${y}px`;

   
//   }
// };






// const handleMouseEnter = () => {
//   setIsMouseWithinHero(true);
// };

// const handleMouseLeave = () => {
//   setIsMouseWithinHero(false);
//    // Remove blur and darkness when the cursor leaves the image
//    if (imageFirstParent.current) {
//     imageFirstParent.current.style.filter = 'none';
//   }
// };




//   return (<div className=''>

    
// <motion.div
//         className=" fixed inset-0 w-screen h-screen bg-[#fff] px-0  py-0 md:py-10 flex items-center justify-center z-[110] overflow-hidden  mt-20 "
//         initial={{ opacity: 0, scale: 0 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0 }}
//         transition={{delay: 0}}
//       >
       
//         <motion.div 
        
//         onMouseMove={handleMouseMove}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave} 
//         ref={sliderRef} className="slider h-full w-full mx-5 mt-10 overflow-x-hidden  transition-transform duration-400 ease-out">
//         <h4 className='mb-2 mt-16 pl-[2px] text-[13px] font-semibold uppercase'>Recent Events</h4>
//         <p className='text-[12px] pl-[2px] uppercase text-slate-500 mb-10'>Our recent service provided for latest events!</p>
//        <motion.div
//         onMouseMove={handleMouseMove}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         ref={imageUlWrapper}
//         className=''>
//         <motion.ul
//  ref={slidesRef}
//  drag="x"
//  dragConstraints={{
//    left: -(slidesWidth - sliderWidth + totalSlidesMarginRight),
//    right: 0
//  }}
//  dragElastic={0.1}
//  dragTransition={{ bounceDamping: 200 }}
//  className="slides flex list-none "
  
// >   {isMouseWithinHero && (  <motion.div
//          id="cursor"
//          ref={cursorRef}
//          initial={{ opacity: 0, scale: 0.5, x: cursorX, y: cursorY  }} // Add a slight delay and position the cursor below
//          animate={ { scale: 1, opacity: 1, x: cursorX, y: cursorY }}
//          exit={{ opacity: 0, scale: 0.5 }} // Optional exit animation
//          transition={ { duration: 0.2, ease: [0.55, 0, 1, 0.45] } }
//          style={{
//            width: "110px",
//            height: "110px",
//            backgroundColor: "white",
//            borderRadius: "50%",
//            position: "absolute",
//            zIndex: 100,
//          }}
//          className=' hidden absolute xl:flex items-center justify-center text-[11px] font-semibold leading-relaxed cursor-grabbing'>DRAG</motion.div>
//          )}
//   {Real.map((image) => (
//     <motion.li 
    
//     initial={{ opacity: 0, y: 500}}
//     animate={{ opacity: 1, y: 0}}
//     transition={{ delay: 0.3, duration: 0.5, ease: [0.33, 1, 0.68, 1]}}
//     key={image.id} className="mr-4 cursor-grab"
    
//     >
//       <motion.div
//       ref={imageFirstParent}
//         style={{
//           height: '600px',
//           width: '500px',
//           backgroundSize: 'contain',
//           backgroundPosition: 'center top',
//           backgroundRepeat: 'no-repeat',
//           userSelect: 'none',
//           pointerEvents: 'none', 
//         }}
       
//       >
//         <p className='pl-[2px] mb-4 font-semibold text-[13px]'>0{image.id}</p>
        
//         <Image src={image.imageSrc} alt={`Image ${image.id}`} width={500}  height={600}/>
//       </motion.div>
//     </motion.li>
//   ))}
// </motion.ul>
// </motion.div>

// <Image src='/images/large-inside.jpg' width={1200} height={1000} alt="Bert wedding"  className='my-20 w-full '/>
// <h4 className='mb-2 mt-16 pl-[2px] text-[13px] font-semibold uppercase'>Outside</h4>
// <p className='text-[12px] pl-[2px] uppercase text-slate-500 mb-10'>Example of events that we served in outside ares, festivals, sport events , social events and many more!</p>
// <motion.ul
//   ref={slidesRef}
//   drag="x"
//   dragConstraints={{
//     left: -(slidesWidth - sliderWidth + totalSlidesMarginRightOutside),
//     right: 0
//   }}
//   dragElastic={0.1}
//   dragTransition={{ bounceDamping: 200, }}
//   className="slides flex list-none "

  
// >
//   {Outside.map((image) => (
//     <motion.li 
//     initial={{ opacity: 0, y: 500}}
//     animate={{ opacity: 1, y: 0}}
//     transition={{ delay: 0.3, duration: 0.5, ease: [0.33, 1, 0.68, 1]}}
//     key={image.id} className="mr-4 cursor-grab"
    
//     >
//       <motion.div
//         style={{
//           height: '600px',
//           width: '540px',
//           backgroundSize: 'contain',
//           backgroundPosition: 'center top',
//           backgroundRepeat: 'no-repeat',
//           userSelect: 'none',
//           pointerEvents: 'none', 
//         }}
       
//       >
//         <p className='pl-[2px] mb-4 font-semibold text-[13px]'>0{image.id}</p>
        
//         <Image src={image.imageSrc} alt={`Image ${image.id}`} width={500}  height={600}/>
//       </motion.div>
//     </motion.li>
//   ))}
// </motion.ul>





// <Image src='/images/large-outside.jpg' width={1200} height={1000} alt="Bert wedding"  className='my-20 w-full'/>
// <h4 className='mb-2 mt-16  pl-[2px] text-[13px] font-semibold uppercase'>Wedding</h4>
// <p className='text-[12px] pl-[2px] uppercase text-slate-500 mb-10'>Our service provided for the wedding celebrations</p>
// <motion.ul
//   ref={slidesRef}
//   drag="x"
//   dragConstraints={{
//     left: -(slidesWidth - sliderWidth + totalSlidesMarginRightWedding),
//     right: 0
//   }}
//   dragElastic={0.1}
//   dragTransition={{ bounceDamping: 200, }}
//   className="slides flex list-none "

  
// >
//   {Wedding.map((image) => (
//     <motion.li 
//     initial={{ opacity: 0, y: 500}}
//     animate={{ opacity: 1, y: 0}}
//     transition={{ delay: 0.3, duration: 0.5, ease: [0.33, 1, 0.68, 1]}}
//     key={image.id} className="mr-4 cursor-grab"
    
//     >
//       <motion.div
//         style={{
//           height: '600px',
//           width: '540px',
//           backgroundSize: 'contain',
//           backgroundPosition: 'center top',
//           backgroundRepeat: 'no-repeat',
//           userSelect: 'none',
//           pointerEvents: 'none', 
//         }}
       
//       >
//         <p className='pl-[2px] mb-4 font-semibold text-[13px]'>0{image.id}</p>
        
//         <Image src={image.imageSrc} alt={`Image ${image.id}`} width={500}  height={600}/>
//       </motion.div>
//     </motion.li>
//   ))}
// </motion.ul>
//       </motion.div>
      
    
     
//       </motion.div>
      
      
//   </div>)
// }

// export default index








// {/* <h1 className='text-[120px] text-gray-300 font-extrabold  h-[20%] w-[100%] flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40'>최근 이벤트</h1>
// {/* Top container */}
//     //  <div className='top_image_wrapper  flex flex-row z-10 absolute  w-full mt-5  '>
//     //    {/* Container for small images in the top */}
//     //    <div className='small_images_top flex flex-row absolute h-screen animate-bg-row1'>
//     //    <div className='sm_image_container m-10  flex h-[90vh] items-start mx-20'>
//     //      <img src='/images/optimized/reserveHero.jpeg' alt='africa' className='lg_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
//     //    </div>
//     //    <div className='sm_image_container m-10  flex h-[90vh] items-end mx-20'>
//     //      <img src='/images/optimized/ciling.jpeg' alt='ciling' className='sm_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
//     //    </div>
//     //    <div className='sm_image_container m-10  flex h-[90vh] items-start mx-20'>
//     //      <img src='/images/optimized/govea.jpeg' alt='bert-wedd' className='lg_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
//     //    </div>
//     //    <div className='sm_image_container m-10  flex h-[90vh] items-end mx-20'>
//     //      <img src='/images/optimized/brett.jpeg ' alt='brett' className='sm_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
//     //    </div>
//     //    </div>

//     //   {/* Container for medium images  */}
//     //     <div className='medium_images_top flex flex-row absolute h-screen animate-bg-row2'>
//     //    <div className='md_image_container m-10  flex h-[90vh] items-end mx-20'>
//     //      <img src='/images/optimized/reserveHero.jpeg' alt='africa' className='lg_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
//     //    </div>
//     //    <div className='md_image_container m-10 flex h-[90vh] items-start mx-20'>
//     //      <img src='/images/optimized/ciling.jpeg' alt='ciling' className='sm_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
//     //    </div>
//     //    <div className='md_image_container m-10 flex h-[90vh] items-end mx-20'>
//     //      <img src='/images/optimized/govea.jpeg' alt='bert-wedd' className='lg_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
//     //    </div>
//     //    <div className='md_image_container m-10 flex h-[90vh] items-start mx-20'>
//     //      <img src='/images/optimized/brett.jpeg ' alt='brett' className='sm_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
//     //    </div>
//     //    </div>

//     //   {/* Container for large images */}
//     //     <div className='large_images_top flex felx-row absolute h-screen animate-bg-row3'>
//     //    <div className='lg_image_container m-10  flex h-[90vh] items-start mx-10'>
//     //      <img src='/images/optimized/reserveHero.jpeg' alt='africa' className='lg_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
//     //    </div>
//     //    <div className='lg_image_container m-10 flex h-[90vh] items-end mx-10'>
//     //      <img src='/images/optimized/ciling.jpeg' alt='ciling' className='sm_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
//     //    </div>
//     //    <div className='lg_image_container m-10 flex h-[90vh] items-start mx-10'>
//     //      <img src='/images/optimized/govea.jpeg' alt='bert-wedd' className='lg_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
//     //    </div>
//     //    <div className='lg_image_container m-10 flex h-[90vh] items-end mx-10'>
//     //      <img src='/images/optimized/brett.jpeg ' alt='brett' className='sm_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
//     //    </div>
//     //    </div> 
    
//     //  </div>  */}
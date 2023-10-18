import React, {useEffect, useState, useRef} from 'react'
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowRight, faBellConcierge, faListCheck, faFilePen } from '@fortawesome/free-solid-svg-icons'
import { Outside, Wedding, Real} from '../../images';
import Image from 'next/image'


interface Props {}

const index = () => {

  const sliderRef = useRef<HTMLDivElement | null>(null); // Change the type of the ref
  const slidesRef = useRef<HTMLUListElement | null>(null); // Change the type of the ref

  const [sliderWidth, setSliderWidths] = useState(0);
  const [slidesWidth, setSlidesWidths] = useState(0);

  const slideMarginRight = 12;
  const totalSlidesMarginRight = slideMarginRight * Real.length;
  const totalSlidesMarginRightOutside = slideMarginRight * Outside.length;
  const totalSlidesMarginRightWedding = slideMarginRight * Wedding.length;

  useEffect(() => {
    const measureSliderWidth = () => {
      if (sliderRef.current) {
        setSliderWidths(sliderRef.current.clientWidth);
      }
    };
  
    const measureSlidesWidth = () => {
      if (slidesRef.current) {
        const slidesNode = slidesRef.current.childNodes;
        const slidesArr = Array.from(slidesNode);
        const slidesSumWidth = slidesArr.reduce(
          (acc, node) => acc + (node instanceof HTMLElement ? node.clientWidth : 0),
          0
        );
        setSlidesWidths(slidesSumWidth);
      }
    };
  
    measureSliderWidth();
    measureSlidesWidth();
  
    window.addEventListener("resize", measureSliderWidth);
    window.addEventListener("resize", measureSlidesWidth);
  
    return () => {
      window.removeEventListener("resize", measureSliderWidth);
      window.removeEventListener("resize", measureSlidesWidth);
    };
  }, [sliderWidth, slidesWidth]);











// Circle Following Mouse pointer effect


const cursorRef = useRef<HTMLDivElement>(null);
const imageFirstParent = useRef<HTMLDivElement>(null);
const imageUlWrapper = useRef<HTMLDivElement>(null);
const [isMouseWithinHero, setIsMouseWithinHero] = useState(false);
const [cursorX, setCursorX] = useState(0);
const [cursorY, setCursorY] = useState(0);


const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const cursorElement = cursorRef.current;
  const sliderElement = imageUlWrapper.current;

  if (cursorElement && sliderElement) {
    const x = e.clientX - sliderElement.getBoundingClientRect().left - cursorElement.offsetWidth / 2;
    const y = e.clientY - sliderElement.getBoundingClientRect().top - cursorElement.offsetHeight / 2;

    cursorElement.style.left = `${x}px`;
    cursorElement.style.top = `${y}px`;

   
  }
};






const handleMouseEnter = () => {
  setIsMouseWithinHero(true);
};

const handleMouseLeave = () => {
  setIsMouseWithinHero(false);
   // Remove blur and darkness when the cursor leaves the image
   if (imageFirstParent.current) {
    imageFirstParent.current.style.filter = 'none';
  }
};




  return (<div className=''>

    
<motion.div
        className=" fixed inset-0 w-screen h-screen bg-[#fff] px-0  py-0 md:py-10 flex items-center justify-center z-[110] overflow-hidden  mt-20 "
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{delay: 0}}
      >
       
        <motion.div 
        
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
        ref={sliderRef} className="slider h-full w-full mx-5 mt-10 overflow-x-hidden  transition-transform duration-400 ease-out">
        <h4 className='mb-2 mt-16 pl-[2px] text-[13px] font-semibold uppercase'>Recent Events</h4>
        <p className='text-[12px] pl-[2px] uppercase text-slate-500 mb-10'>Our recent service provided for latest events!</p>
       <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={imageUlWrapper}
        className=''>
        <motion.ul
 ref={slidesRef}
 drag="x"
 dragConstraints={{
   left: -(slidesWidth - sliderWidth + totalSlidesMarginRight),
   right: 0
 }}
 dragElastic={0.1}
 dragTransition={{ bounceDamping: 200 }}
 className="slides flex list-none "
  
>   {isMouseWithinHero && (  <motion.div
         id="cursor"
         ref={cursorRef}
         initial={{ opacity: 0, scale: 0.5, x: cursorX, y: cursorY  }} // Add a slight delay and position the cursor below
         animate={ { scale: 1, opacity: 1, x: cursorX, y: cursorY }}
         exit={{ opacity: 0, scale: 0.5 }} // Optional exit animation
         transition={ { duration: 0.2, ease: [0.55, 0, 1, 0.45] } }
         style={{
           width: "110px",
           height: "110px",
           backgroundColor: "white",
           borderRadius: "50%",
           position: "absolute",
           zIndex: 100,
         }}
         className=' hidden absolute xl:flex items-center justify-center text-[11px] font-semibold leading-relaxed cursor-grabbing'>DRAG</motion.div>
         )}
  {Real.map((image) => (
    <motion.li 
    
    initial={{ opacity: 0, y: 500}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.3, duration: 0.5, ease: [0.33, 1, 0.68, 1]}}
    key={image.id} className="mr-4 cursor-grab"
    
    >
      <motion.div
      ref={imageFirstParent}
        style={{
          height: '600px',
          width: '500px',
          backgroundSize: 'contain',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          userSelect: 'none',
          pointerEvents: 'none', 
        }}
       
      >
        <p className='pl-[2px] mb-4 font-semibold text-[13px]'>0{image.id}</p>
        
        <Image src={image.imageSrc} alt={`Image ${image.id}`} width={500}  height={600}/>
      </motion.div>
    </motion.li>
  ))}
</motion.ul>
</motion.div>

<Image src='/images/large-inside.jpg' width={1200} height={1000} alt="Bert wedding"  className='my-20 w-full '/>
<h4 className='mb-2 mt-16 pl-[2px] text-[13px] font-semibold uppercase'>Outside</h4>
<p className='text-[12px] pl-[2px] uppercase text-slate-500 mb-10'>Example of events that we served in outside ares, festivals, sport events , social events and many more!</p>
<motion.ul
  ref={slidesRef}
  drag="x"
  dragConstraints={{
    left: -(slidesWidth - sliderWidth + totalSlidesMarginRightOutside),
    right: 0
  }}
  dragElastic={0.1}
  dragTransition={{ bounceDamping: 200, }}
  className="slides flex list-none "

  
>
  {Outside.map((image) => (
    <motion.li 
    initial={{ opacity: 0, y: 500}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.3, duration: 0.5, ease: [0.33, 1, 0.68, 1]}}
    key={image.id} className="mr-4 cursor-grab"
    
    >
      <motion.div
        style={{
          height: '600px',
          width: '540px',
          backgroundSize: 'contain',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          userSelect: 'none',
          pointerEvents: 'none', 
        }}
       
      >
        <p className='pl-[2px] mb-4 font-semibold text-[13px]'>0{image.id}</p>
        
        <Image src={image.imageSrc} alt={`Image ${image.id}`} width={500}  height={600}/>
      </motion.div>
    </motion.li>
  ))}
</motion.ul>





<Image src='/images/large-outside.jpg' width={1200} height={1000} alt="Bert wedding"  className='my-20 w-full'/>
<h4 className='mb-2 mt-16  pl-[2px] text-[13px] font-semibold uppercase'>Wedding</h4>
<p className='text-[12px] pl-[2px] uppercase text-slate-500 mb-10'>Our service provided for the wedding celebrations</p>
<motion.ul
  ref={slidesRef}
  drag="x"
  dragConstraints={{
    left: -(slidesWidth - sliderWidth + totalSlidesMarginRightWedding),
    right: 0
  }}
  dragElastic={0.1}
  dragTransition={{ bounceDamping: 200, }}
  className="slides flex list-none "

  
>
  {Wedding.map((image) => (
    <motion.li 
    initial={{ opacity: 0, y: 500}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.3, duration: 0.5, ease: [0.33, 1, 0.68, 1]}}
    key={image.id} className="mr-4 cursor-grab"
    
    >
      <motion.div
        style={{
          height: '600px',
          width: '540px',
          backgroundSize: 'contain',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          userSelect: 'none',
          pointerEvents: 'none', 
        }}
       
      >
        <p className='pl-[2px] mb-4 font-semibold text-[13px]'>0{image.id}</p>
        
        <Image src={image.imageSrc} alt={`Image ${image.id}`} width={500}  height={600}/>
      </motion.div>
    </motion.li>
  ))}
</motion.ul>
      </motion.div>
      
    
     
      </motion.div>
      
      
  </div>)
}

export default index








{/* <h1 className='text-[120px] text-gray-300 font-extrabold  h-[20%] w-[100%] flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40'>최근 이벤트</h1>
{/* Top container */}
    //  <div className='top_image_wrapper  flex flex-row z-10 absolute  w-full mt-5  '>
    //    {/* Container for small images in the top */}
    //    <div className='small_images_top flex flex-row absolute h-screen animate-bg-row1'>
    //    <div className='sm_image_container m-10  flex h-[90vh] items-start mx-20'>
    //      <img src='/images/optimized/reserveHero.jpeg' alt='africa' className='lg_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
    //    </div>
    //    <div className='sm_image_container m-10  flex h-[90vh] items-end mx-20'>
    //      <img src='/images/optimized/ciling.jpeg' alt='ciling' className='sm_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
    //    </div>
    //    <div className='sm_image_container m-10  flex h-[90vh] items-start mx-20'>
    //      <img src='/images/optimized/govea.jpeg' alt='bert-wedd' className='lg_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
    //    </div>
    //    <div className='sm_image_container m-10  flex h-[90vh] items-end mx-20'>
    //      <img src='/images/optimized/brett.jpeg ' alt='brett' className='sm_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
    //    </div>
    //    </div>

    //   {/* Container for medium images  */}
    //     <div className='medium_images_top flex flex-row absolute h-screen animate-bg-row2'>
    //    <div className='md_image_container m-10  flex h-[90vh] items-end mx-20'>
    //      <img src='/images/optimized/reserveHero.jpeg' alt='africa' className='lg_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
    //    </div>
    //    <div className='md_image_container m-10 flex h-[90vh] items-start mx-20'>
    //      <img src='/images/optimized/ciling.jpeg' alt='ciling' className='sm_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
    //    </div>
    //    <div className='md_image_container m-10 flex h-[90vh] items-end mx-20'>
    //      <img src='/images/optimized/govea.jpeg' alt='bert-wedd' className='lg_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
    //    </div>
    //    <div className='md_image_container m-10 flex h-[90vh] items-start mx-20'>
    //      <img src='/images/optimized/brett.jpeg ' alt='brett' className='sm_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
    //    </div>
    //    </div>

    //   {/* Container for large images */}
    //     <div className='large_images_top flex felx-row absolute h-screen animate-bg-row3'>
    //    <div className='lg_image_container m-10  flex h-[90vh] items-start mx-10'>
    //      <img src='/images/optimized/reserveHero.jpeg' alt='africa' className='lg_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
    //    </div>
    //    <div className='lg_image_container m-10 flex h-[90vh] items-end mx-10'>
    //      <img src='/images/optimized/ciling.jpeg' alt='ciling' className='sm_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
    //    </div>
    //    <div className='lg_image_container m-10 flex h-[90vh] items-start mx-10'>
    //      <img src='/images/optimized/govea.jpeg' alt='bert-wedd' className='lg_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
    //    </div>
    //    <div className='lg_image_container m-10 flex h-[90vh] items-end mx-10'>
    //      <img src='/images/optimized/brett.jpeg ' alt='brett' className='sm_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
    //    </div>
    //    </div> 
    
    //  </div>  */}
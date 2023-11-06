import React, {FC} from 'react'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react';
import { Wedding, Real, Bussiness, Festival, Steak, FingerFood, Birthday, Public} from '../utils/images';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { set } from 'date-fns';


interface GalleryProps {
    onClose: () => void; // Specify the type of onClose prop
  }
  

  type EventImages = {
    wedding: any[]; // Replace 'any[]' with the actual type of your images
    festival: any[];
    business: any[];
    birthday: any[];
    public: any[];
    steak: any[];
    fingerFood: any[];
    // Add more event types as needed
  };
  

const EventsModal: FC<GalleryProps> = ({ onClose }) => {


// const [widthReal, setWidthReal] = useState(0);
// const recentSlider = useRef<HTMLDivElement>(null);



// useEffect(() => {
//   const slider = recentSlider.current;
//   if (slider) {
//     setWidthReal(slider.scrollWidth - slider.offsetWidth);
//   }
// }, []);




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
const imageWrapperRef = useRef<HTMLDivElement>(null);
const [isMouseWithinHero, setIsMouseWithinHero] = useState(false);
const [cursorX, setCursorX] = useState(800);
const [cursorY, setCursorY] = useState(200);


const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const imageElement = imageWrapperRef.current;
  const cursorElement = cursorRef.current;

  if (imageElement && cursorElement) {
    const imageRect = imageElement.getBoundingClientRect();
   
    const x = e.clientX - imageRect.left;
    const y = e.clientY - imageRect.top;
   
    // Set the cursor's position based on the mouse position within the image with a slight delay
    setCursorX(x);
    setCursorY(y);
  }
};


const handleMouseEnter = () => {
  setIsMouseWithinHero(true);
};


const handleMouseLeave = () => {
  setIsMouseWithinHero(false);
};




     // Animation for the checkboxes in the first question
     const checkboxAnimations = {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.2,
      },
    };


    const [selectedEvent, setSelectedEvent] = useState<string>('');

  
    const eventImages = {
      default: Real,
      wedding: Wedding,
      festival: Festival,
      business: Bussiness,
      birthday: Birthday,
      public: Public,
      steak: Steak,
      fingerFood: FingerFood,
      // Add other event types and their image arrays here
    };
    



  return (<motion.div 
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0 }}
    transition={{delay: 0, duartion: 1, }}
    className='z-[110] bg-[#fff] w-screen h-screen fixed overflow-y-hidden px-5 pb-40 mt-[84px]'>

        {/* THis button */}
        <motion.div
       
        className='fixed top-[170px] left-[50%] bg-white rounded-b-[40%] h-10 w-10 flex items-center justify-center z-10 cursor-pointer'>
<motion.button
  initial={{ opacity: 0, y: 30 }}
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
         

{/* Category buttons */}

<motion.div 
 className='mx-16 mt-0 flex flex-wrap justify-between '>

<motion.div
 initial={{opacity: 1,  y: -75 }}
 whileInView={{opacity: 1,  y: 0 }}
 transition={{delay: 0.89, duration: 1, ease: [.4,.18,0,1.03]}}
 viewport={{once: true}}>
<motion.div 
    whileTap={checkboxAnimations}
    className='event_range_wrapper w-20 h-20 md:w-[10rem] md:h-16 relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg  peer-checked:border-[#F25287] peer-checked:text-[#F25287] hover:text-[#F25287] hover:bg-gray-50 
    text-[12px] md:text-[15px]  '>
      <button 
        id='wedding'
        onClick={() => {setSelectedEvent('wedding'), console.log('selectedEvent inside onClick of wedding', selectedEvent)}}
        className='flex-start cursor-pointer'
        style={{ accentColor: '#F25287'  }}
      />
      <label htmlFor="wedding" className='absolute inset-0 flex flex-row items-center justify-center '>
      
      <Image width="40" height="40" src="/images/icons/wedding.png" alt="wedding" className='mx-2 w-10 h-10 md:h-[40px] md:w-[40px]'/>
      가족 개인행사
      </label>
    </motion.div>
    </motion.div>


    <motion.div
 initial={{opacity: 1,  y: -75 }}
 whileInView={{opacity: 1,  y: 0 }}
 transition={{delay: 0.86, duration: 1, ease: [.4,.18,0,1.03]}}
 viewport={{once: true}}> 
<motion.div
        whileTap={checkboxAnimations}
         className='event_range_wrapper w-20 h-20 md:w-[10rem] md:h-16  relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg cursor-pointer peer-checked:border-[#2563EB]   peer-checked:text-[#2563EB] hover:text-[#2563EB] hover:bg-gray-50 text-[12px] md:text-[15px] select-none '>
        <button 
         style={{ accentColor: '#2563EB', }}
        
        id='business'
        
       
        onClick={() => setSelectedEvent('business')} 
        className='flex-start ' />
          <label htmlFor="business" className="absolute inset-0 flex flex-row items-center justify-center ">
          <Image width="40" height="40" src="/images/icons/bussiness.png" alt="business" className='mx-2 h-11 w-11 md:h-[40px] md:w-[40px]'/>
          기업 이벤트
          </label>
        </motion.div>
        </motion.div>



        <motion.div
          initial={{opacity: 1,  y: -75 }}
          whileInView={{opacity: 1,  y: 0 }}
          transition={{delay: 0.83, duration: 1, ease: [.4,.18,0,1.03]}}
          viewport={{once: true}}> 
        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-20 h-20 md:w-[10rem] md:h-16 relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg  cursor-pointer peer-checked:border-[#047857] peer-checked:text-[#047857] hover:text-[#047857] hover:bg-gray-50 text-[12px] md:text-[15px] select-none'>
        <button  style={{ accentColor: '#047857' }} 
       
        id='public' 
     
        onClick={() => setSelectedEvent('public')} className='flex-start' />
          <label htmlFor="public" className="absolute inset-0 flex flex-row items-center justify-center ">
          <Image width="40" height="40" src="/images/icons/public.png" alt="public" className='mx-2 h-10 w-10 md:h-[40px] md:w-[40px]'/>
          사회 단체행사
          </label>
        </motion.div>
        </motion.div>



        <motion.div
          initial={{opacity: 1,  y: -75 }}
          whileInView={{opacity: 1,  y: 0 }}
          transition={{delay: 0.8, duration: 1, ease: [.4,.18,0,1.03]}}
          viewport={{once: true}}>  
        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-20 h-20 md:w-[10rem] md:h-16 relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg  cursor-pointer peer-checked:border-[#7C3AED] peer-checked:text-[#7C3AED] hover:text-[#7C3AED] hover:bg-gray-50 text-[12px] md:text-[15px] select-none '>
            <button style={{ accentColor: '#7C3AED', alignSelf: 'flex-start' }} 
            
            id='festival' 
          
            onClick={() => setSelectedEvent('festival')}  />
            <label htmlFor="festival" className="absolute inset-0 flex flex-row items-center justify-center">
            <Image width="40" height="40" src="/images/icons/festival.png" alt="festival" className='mx-2 h-10 w-10 md:h-[40px] md:w-[40px]'/>
            기관, 축제등
            </label>
        </motion.div>
        </motion.div>


        <motion.div
          initial={{opacity: 1,  y: -75 }}
          whileInView={{opacity: 1,  y: 0 }}
          transition={{delay: 0.83, duration: 1, ease: [.4,.18,0,1.03]}}
          viewport={{once: true}}> 
        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-20 h-20 md:w-[10rem] md:h-16 relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg  cursor-pointer peer-checked:border-[#9D174D] peer-checked:text-[#9D174D] hover:text-[#9D174D] hover:bg-gray-50 text-[12px] md:text-[15px] select-none '>
        <button  style={{ accentColor: '#9D174D' }} 
        
        id='birthday' 
       
        onClick={() => setSelectedEvent('birthday')} className='flex-start' />
          <label htmlFor="birthday" className="absolute inset-0 flex flex-row items-center justify-center ">
          <Image width="40" height="40" src="/images/icons/birthday.png" alt="birthday" className='mx-2 h-10 w-10 md:h-[40px] md:w-[40px]'/>
          <span className='flex'>
          스몰웨딩</span>
          </label>
        </motion.div>
        </motion.div>


        <motion.div
          initial={{opacity: 1,  y: -75 }}
          whileInView={{opacity: 1,  y: 0 }}
          transition={{delay: 0.86, duration: 1, ease: [.4,.18,0,1.03]}}
          viewport={{once: true}}> 
        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-20 h-20 md:w-[10rem] md:h-16 relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg  cursor-pointer peer-checked:border-[#FE0000] peer-checked:text-[#FE0000] hover:text-[#FE0000] hover:bg-gray-50 text-[12px] md:text-[15px] select-none '>
            <button style={{ accentColor: '#FE0000', alignSelf: 'flex-start' }} 
            
            id='steak' 
           
            onClick={() => setSelectedEvent('steak')}  />
            <label htmlFor="steak" className="absolute inset-0 flex flex-row items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FE0000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-beef mx-2 h-10 w-10 md:h-[40px] md:w-[40px]"><circle cx="12.5" cy="8.5" r="2.5"/><path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"/><path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"/></svg>
            스테이크 행사
            </label>
        </motion.div>
        </motion.div>



        <motion.div
          initial={{opacity: 1,  y: -75 }}
          whileInView={{opacity: 1,  y: 0 }}
          transition={{delay: 0.89, duration: 1, ease: [.4,.18,0,1.03]}}
          viewport={{once: true}}>  
        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-20 h-20 md:w-[10rem] md:h-16 relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg  cursor-pointer peer-checked:border-[#F8B400] peer-checked:text-[#F8B400] hover:text-[#F8B400] hover:bg-gray-50 text-[12px] md:text-[15px] select-none '>
            <button style={{ accentColor: '#F8B400', alignSelf: 'flex-start' }} 
            
            id='fingerFood' 
             
            onClick={() => setSelectedEvent('fingerFood')}  />
            <label htmlFor="fingerFood" className="absolute inset-0 flex flex-row items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F8B400" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dessert mx-2 h-10 w-10 md:h-[40px] md:w-[40px]"><circle cx="12" cy="2" r="1"/><path d="M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"/><path d="M3.2 14.8a9 9 0 0 0 17.6 0"/></svg>
            핑거푸드
            </label>
        </motion.div>
        </motion.div>


       

       


        </motion.div>
        <motion.div 
        initial={{opacity: 1, scale: 0.7 }}
        whileInView={{opacity: 1, scale: 1 }}
        transition={{delay: 0.5, duration: 1, ease: [0.32, 0, 0.24, 1]}}
        viewport={{once: true}}
        
         className=' corousel overflow-hidden  mt-10 mx-16'>
          
            <motion.div 
           
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
            whileTap={{cursor: 'grabbing'}} 
            className='h-full w-full cursor-grab '
            >
            <motion.div 
          
           
            className='inner-corousel relative flex overflow-x-scroll overflow-y-hidden'>
            
            {(selectedEvent ? eventImages[selectedEvent as keyof EventImages] : Real).map((image: any, a: number) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      key={image.id} className='min-h-[550px] min-w-[500px] p-3 pointer-events-none'>
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className='pl-[2px] mb-3 font-semibold text-[12px]'>0{a}</motion.p>
      <Image src={image.imageSrc} alt={selectedEvent || 'default'} width={500} height={550} className='w-full h-full' />
    </motion.div>
  );
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
         
         className=' corousel overflow-hidden    mx-16'>
       
            <motion.div 
           ref={imageWrapperRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
            whileTap={{cursor: 'grabbing'}} 
            className='h-full w-full cursor-grab '>
            <motion.div 
           
            className='inner-corousel flex overflow-x-scroll overflow-y-hidden '>
               {isMouseWithinHero && (
              <motion.div
              id="cursor"
              ref={cursorRef}
             style={{
              width: "90px",
              height: "90px",
              backgroundColor: "white",
              borderRadius: "50%",
              position: "absolute",
              zIndex: 100,
            }}
            initial={{ opacity: 0, scale: 0.5, x: cursorX - 40 , y: cursorY - 95  }} // Add a slight delay and position the cursor below
            animate={{ scale: 1, opacity: 1, x: cursorX - 40 , y: cursorY - 95 }}
            exit={{ opacity: 0, scale: 0.5 }} // Optional exit animation
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] } }
              className=' text-[#49111c] rounded-full  flex flex-col items-center justify-center text-[15px] pt-3'>Scroll<motion.div
              initial={{ x: -10, opacity: 0}}
              transition={{ repeat: Infinity, duration: 1, delay: 0, repeatDelay: 0, ease: [0.22, 1, 0.36, 1] }}
              animate={{ x: 10, opacity: [0, 1, 0]}}
              
              
              ><FontAwesomeIcon className="text-[16px]" icon={faArrowRight} /></motion.div>
              </motion.div>
               )}
               
            </motion.div>
            </motion.div>
        </motion.div>




    



        
  </motion.div>)
}

export default EventsModal
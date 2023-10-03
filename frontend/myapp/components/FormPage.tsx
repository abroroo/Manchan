import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Form from './Form';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import { FC } from 'react';
import EventsGallery from './EventsGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faBuilding, faChair, faCalendarDays, faFileContract, faMapLocationDot, faSackDollar, faPerson, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { PartyPopper, Users, Wallet, Dot } from 'lucide-react';
import { set } from 'date-fns';
import { formToJSON } from 'axios';




const FormPage = () => {
  
  const router = useRouter();



  const [eventType, setEventType] = useState<string>("");
  const [parentButtonBackground, setParentButtonBackground] =
  useState<string>("");
  const [isCurrentQuestion, setIsCurrentQuestion] = useState<number>(0);
  const [formDataTransfered, setFormDataTransfered] = useState<any>({});


// Callback function to update the parent's button background
const handleButtonBackgroundChange = (background: string, event: string, currentQuestion: number, formData: any) => {
  setParentButtonBackground(background);
  setEventType(event);
  setIsCurrentQuestion(currentQuestion);
  setFormDataTransfered(formData);
  console.log("This is formDataTransfered: ", formDataTransfered);
};











// Circle Following Mouse pointer effect


const cursorRef = useRef<HTMLDivElement>(null);
const imageWrapperRef = useRef<HTMLDivElement>(null);
const imageFirstParent = useRef<HTMLDivElement>(null);
const [isMouseWithinHero, setIsMouseWithinHero] = useState(false);
const [cursorX, setCursorX] = useState(0);
const [cursorY, setCursorY] = useState(0);


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

    // Apply blur and darkness to the image
if (imageFirstParent.current) {
  imageFirstParent.current.style.filter = ' brightness(0.9) ';
}
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





// MODAL OPEN CLOSE HANDALING

const [isModalOpen, setIsModalOpen] = useState(false);
const controls = useAnimation();

const handleExploreClick = () => {
  // Expand the circle to cover the entire screen
  controls.start({ scale: [1, 50], opacity: [1, 0] }).then(() => {
    setIsModalOpen(true);
  });
};

const handleCloseModal = () => {
  setIsModalOpen(false);
  // Restore the circle's appearance when closing the modal
  controls.start({ scale: 1, opacity: 1 });
};








 // IMAGE ANIMATION ENTRANCE AND EXIT IN THE HERO PAGE 
  // Define a type for image sources
type ImageSources = {
  [key: string]: string;
};

const imageSources: ImageSources = {
  business: 'images/real/business.jpg',
  wedding: 'images/real/wedding.jpg',
  festival: 'images/real/festival.jpg',
  public: 'images/real/public.jpg',
  birthday: 'images/real/birthday.jpg',
  fingerFood: 'images/real/finger_food.jpeg',
  steak: 'images/real/steak.jpg',
  other: '',
};

 




// Footer color dynamic function

const getColor = (index: number) => {
  // Define color logic based on isCurrentQuestion
  if (isCurrentQuestion >= index) {
    return parentButtonBackground;
  }
  return '#EEEEEE'; // Default color when not active
};


const [eventTypeOther, setEventTypeOther] = useState<string>("");


const onOtherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target;
  setEventTypeOther(value);
}






// Assuming eventTime is in the format "2023-10-19T20:00:00.000Z"
const eventTime = new Date(formDataTransfered.event_time);
const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' } as Intl.DateTimeFormatOptions;

// as Month Day, hour:minute 
const formattedEventTime = eventTime.toLocaleString('ko-KR', options);




// post formDataTransferred to the backend and save it to the database

useEffect(() => {

  const createNewCustomer = async () => {

    try {
      const res = await fetch('/api/new_customer', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };



  const saveFormData = async () => {
    try {
      const res = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataTransfered),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  if (isCurrentQuestion === 8) {
    saveFormData();
  }
})




  return (
  
    <div className='flex w-screen h-screen '>
      
      <div className=' flex flex-col md:flex-row w-full  '>
      
      
      
      

        {/* LEFT HALF */}


        <div id='leftDiv' className=' h-screen  w-screen xl:w-[60%]  flex items-center justify-center  overflow-y-hidden   z-10 bg-[#fff]'>
         
        <Form onButtonBackgroundChange={handleButtonBackgroundChange} eventTypeOther={eventTypeOther} />
      
        </div>
        











        {/* RIGHT HALF */}

        
        <div id='rightDiv' className='hidden w-[40%] xl:flex   h-screen   '> 
        
                <div className='flex flex-col items-center justify-center w-full h-full overflow-y-scroll '>

              {/* <ScrollingTable /> */}

                   <div className='flex flex-row justify-center items-center '>
                        <motion.div 
                        ref={imageWrapperRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} 
                        className='flex-col relative'>
                          {isMouseWithinHero && (
         <motion.div
         onClick={handleExploreClick}
         id="cursor"
         ref={cursorRef}
         initial={{ opacity: 0, scale: 0.5, x: cursorX - 40, y: cursorY - 50 }} // Add a slight delay and position the cursor below
         animate={isModalOpen ? { scale: 400, opacity: 1 } : { scale: 1, opacity: 1, x: cursorX - 40, y: cursorY - 50 }}
         exit={{ opacity: 0, scale: 0.5 }} // Optional exit animation
         transition={isModalOpen ? { duration: 0.2, ease: [0.55, 0, 1, 0.45] } : { duration: 0.3 } }
         style={{
           width: "90px",
           height: "90px",
           backgroundColor: "white",
           borderRadius: "50%",
           position: "absolute",
           zIndex: 100,
         }}
         className='absolute flex items-center justify-center text-[11px] font-semibold leading-relaxed cursor-pointer'
       >
      {isModalOpen ? " " : "EXPLORE"}</motion.div>
      )}
      {isCurrentQuestion < 1 && (
        <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
        ref={imageFirstParent}
        className={eventType === 'wedding' || eventType === 'festival' || eventType === 'business' || eventType === 'public' || eventType === 'birthday' || eventType === 'fingerFood' || eventType === 'steak' ? 'flex cursor-pointer' : 'hidden'}
      >
        <motion.img
          src={eventType === '' ? 'images/real/wedding2.jpg' : imageSources[eventType]}
          style={{ width: 450, height: 450 }}
          className="mr-[5px] mb-[5px] rounded brightness-110"
        />
      </motion.div>
      
      )}  
      
      </motion.div> 
{eventType !== 'wedding' && eventType !== 'festival' && eventType !== 'business' && eventType !== 'public' && eventType !== 'birthday' && eventType !== 'fingerFood' && eventType !== 'steak' && isCurrentQuestion < 1 && (
  <motion.div 
    initial={{opacity: 0, x: 120}}
    whileInView={{opacity: 1, x: 0}}
    transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
    className='flex flex-col'
  >
    <span className="text-gray-700">행사 유형</span>
    <input name="event_type" type="text" className="appearance-none mt-1 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black active:border-[#49111c] focus:outline-none" placeholder="" value={eventTypeOther} onChange={onOtherChange} />
  </motion.div>
        
      )}                            
                   </div> 

{isCurrentQuestion >= 1 && isCurrentQuestion !== 9 && (
                  <div className='hidden w-full h-full xl:flex flex-col items-center justify-center'>
                  <div className='flex items-center justify-between'>
                  {isCurrentQuestion >= 1 && (
                                <motion.div className=' flex items-center justify-between p-2'>
                                  <motion.div 
                                  initial={{x: 50, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  transition={{ duration: 1, delay: 0, type: 'spring', bounce: 0.3 }}
                                  className=' flex'><PartyPopper style={{color: getColor(0)}} className='h-5 w-5 md:h-9 md:w-9  ' /> 
                                  <input className='block w-full h-10 mt-1 text-[#49111c] my-2 focus:outline-none  pb-0 text-[14px] md:text-[17px] border-b-[1px] border-slate-200 focus:border-[#49111c] ml-2' value={`${formDataTransfered.event_type === 'wedding' ? '가쪽 개인행사' : formDataTransfered.event_type === 'business' ? '기업 이벤트' : formDataTransfered.event_type === 'public' ? '사회 단체행사' : formDataTransfered.event_type === 'festival' ? '기관, 축제등' : formDataTransfered.event_type === 'birthday' ? '스몰웨딩, 야외결혼' : formDataTransfered.event_type === 'fingerFood' ? '핑거푸드' : formDataTransfered.event_type === 'steak' ? '스테이크 행사' : eventTypeOther} ` }></input></motion.div>
                                </motion.div>
                              )}
                              {isCurrentQuestion >= 2 && (
                                <motion.div className=' flex items-center justify-between p-2'>
                                  <motion.div 
                                  initial={{x: 50, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  transition={{ duration: 1, delay: 0, type: 'spring', bounce: 0.3 }}
                                  className=' flex'><FontAwesomeIcon style={{color: getColor(1)}} icon={faPerson} className='w-9 h-9' />
                                  <input className='block w-full h-10 mt-1 text-[#49111c] my-2 focus:outline-none  pb-0 text-[14px] md:text-[17px] border-b-[1px] border-slate-200 focus:border-[#49111c] ml-2' value={formDataTransfered.people_count + ' 명'}></input></motion.div>
                                </motion.div>
                    )} 
                  </div>
                  <div className='flex items-center justify-between'>
                  {isCurrentQuestion >= 3 && (
                                <motion.div className=' flex items-center justify-between p-2'>
                                  <motion.div 
                                  initial={{x: 50, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  transition={{ duration: 1, delay: 0, type: 'spring', bounce: 0.3 }}
                                  className=' flex'> <FontAwesomeIcon style={{color: getColor(1)}} icon={faSackDollar} className='h-5 w-5 md:h-8 md:w-8 ' />
                                 <input className='block w-full h-10 mt-1 text-[#49111c] my-2 focus:outline-none  pb-0 text-[14px] md:text-[17px] border-b-[1px] border-slate-200 focus:border-[#49111c] ml-2' value={(formDataTransfered.meal_cost * formDataTransfered.people_count).toLocaleString('ko-KR') + ' 원'}></input></motion.div>
                                </motion.div>
                              )}
                              {isCurrentQuestion >= 4 && (
                                <motion.div className=' flex items-center justify-between p-2'>
                                  <motion.div 
                                  initial={{x: 50, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  transition={{ duration: 1, delay: 0, type: 'spring', bounce: 0.3 }}
                                  className=' flex'><FontAwesomeIcon style={{color: getColor(1)}} icon={faBuilding} className='h-5 w-5 md:h-9 md:w-9 ' />
                                  <input className='block w-full h-10 mt-1 text-[#49111c] my-2 focus:outline-none  pb-0 text-[14px] md:text-[17px] border-b-[1px] border-slate-200 focus:border-[#49111c] ml-2' value={formDataTransfered.event_place}></input></motion.div>
                                </motion.div>
                    )} 
                  </div>
                  <div className='flex items-center justify-start '>
                  {isCurrentQuestion >= 5 && (
                                <motion.div className=' flex items-center justify-between p-2'>
                                  <motion.div 
                                  initial={{x: 50, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  transition={{ duration: 1, delay: 0, type: 'spring', bounce: 0.3 }}
                                  className=' flex '> <FontAwesomeIcon style={{color: getColor(1)}} icon={faChair} className='h-5 w-5 md:h-9 md:w-9 ' />
                                  <input className='block w-full h-10 mt-1 text-[#49111c] my-2 focus:outline-none  pb-0 text-[14px] md:text-[17px] border-b-[1px] border-slate-200 focus:border-[#49111c] ml-2' value={formDataTransfered.tool}></input>
                                  </motion.div>
                                </motion.div>
                              )}
                             
                  </div>
                  <div className='flex items-center justify-start'>
                  {isCurrentQuestion >= 6 && (
                                <motion.div className=' flex items-center justify-between p-2'>
                                  <motion.div 
                                  initial={{x: 50, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  transition={{ duration: 1, delay: 0, type: 'spring', bounce: 0.3 }}
                                  className=' flex'> <FontAwesomeIcon style={{color: getColor(1)}} icon={faCalendarDays} className='h-5 w-5 md:h-9 md:w-9 '/>
                                  <input  className='appearance-none block w-[60%] h-10 mt-1 text-[#49111c] my-2 focus:outline-none  pb-0 text-[14px] md:text-[17px] border-b-[1px] border-slate-200 focus:border-[#49111c] ml-2' 
                                  value={formattedEventTime}></input></motion.div>
                                </motion.div>
                              )}
                  {isCurrentQuestion >= 7 && (
                                <motion.div className=' flex items-center justify-between p-2'>
                                  <motion.div 
                                  initial={{x: 50, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  transition={{ duration: 1, delay: 0, type: 'spring', bounce: 0.3 }}
                                  className=' flex justify-between'>  <FontAwesomeIcon style={{color: getColor(1)}} icon={faMapLocationDot} className='h-5 w-5 md:h-9 md:w-9 ' />
                                  <input className='block w-full h-10 mt-1 text-[#49111c] my-2 focus:outline-none  pb-0 text-[14px] md:text-[17px] border-b-[1px] border-slate-200 focus:border-[#49111c] ml-2' value={formDataTransfered.address}></input></motion.div>
                                </motion.div>
                              )}
                               
                  </div>
                  <div className='flex items-center justify-between'>
                  {isCurrentQuestion >= 8 && (
                                <motion.div className=' flex items-center justify-between p-2'>
                                  <motion.div 
                                  initial={{x: 50, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  transition={{ duration: 1, delay: 0, type: 'spring', bounce: 0.3 }}
                                  className=' flex'> <input className='block w-full h-10 mt-1 text-[#49111c] my-2 focus:outline-none  pb-0 text-[14px] md:text-[17px] border-b-[1px] border-slate-200 focus:border-[#49111c] ml-2' value={formDataTransfered.name} placeholder='이름'></input></motion.div>
                                </motion.div>
                              )}
                              {isCurrentQuestion >= 8 && (
                                <motion.div className=' flex items-center justify-between p-2'>
                                  <motion.div 
                                  initial={{x: 50, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  transition={{ duration: 1, delay: 0, type: 'spring', bounce: 0.3 }}
                                  className=' flex'><input className='block w-full h-10 mt-1 text-[#49111c] my-2 focus:outline-none  pb-0 text-[14px] md:text-[17px] border-b-[1px] border-slate-200 focus:border-[#49111c] ml-2' value={formDataTransfered.phone_number} placeholder='연락처'></input></motion.div>
                                </motion.div>
                              )}
                  </div>
                  <div className='flex items-center justify-start'>
                  {isCurrentQuestion >= 8 && (
                                <motion.div className=' flex items-center justify-between p-2'>
                                  <motion.div 
                                  initial={{x: 50, opacity: 0}}
                                  whileInView={{x: 0, opacity: 1}}
                                  transition={{ duration: 1, delay: 0, type: 'spring', bounce: 0.3 }}
                                  className=' flex'><input className='block w-full h-10 mt-1 text-[#49111c] my-2 focus:outline-none  pb-0 text-[14px] md:text-[17px] border-b-[1px] border-slate-200 focus:border-[#49111c] ml-2' value={formDataTransfered.message} placeholder='요청 사항'></input></motion.div>
                                </motion.div>
                              )}
                  </div>
                  
                  </div>
                        )}
            </div>            
        </div>     

        { isCurrentQuestion < 9 && (
        <motion.div 
        initial={{y: 50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{ duration: 0.5, delay: 0.3, type: 'spring', bounce: 0.3 }}
        className='absolute bottom-0 left-0 h-12 w-screen md:bottom-0 md:h-20 md:w-[100vw] drop-shadow-2xl border border-slate-100 z-[100] '>
          <div className='flex flex-row md:flex-row justify-between items-center h-full w-full px-2 md:px-32'>
            <div className='flex flex-col items-center '>
            <motion.div
            initial={{ y: 0 }}
            animate={{y : isCurrentQuestion === 0 ? -20 :  0 , backgroundColor: isCurrentQuestion === 0 ? getColor(0) : '', color: isCurrentQuestion === 0 ? '#fff' : getColor(0)}}
            transition={{ duration: 0.3, type: 'spring', bounce: 0.1, stiffness: 220 }}
            className='rounded-md p-2'>
            <PartyPopper  className='h-5 w-5 md:h-9 md:w-9  ' />
            </motion.div>
            <Dot style={{color: getColor(0)}} size="30px" className={`transform -translate-y-6 ${isCurrentQuestion === 0 ? 'block': 'hidden'} `}/>
            
            </div>
          <hr style={{background: getColor(1)}} className="hidden md:block h-5 w-1 md:w-28 md:h-1 mx-auto bg-gray-200   border-0 rounded  dark:bg-gray-700"></hr>
          <div className='flex flex-col items-center '>
          <motion.div
          initial={{ y: 0 }}
          animate={{y : isCurrentQuestion === 1 ? -20 :  0 , backgroundColor: isCurrentQuestion === 1 ? getColor(1) : '', color: isCurrentQuestion === 1 ? '#fff' : getColor(1)}}
          transition={{ duration: 0.3, type: 'spring', bounce: 0.1, stiffness: 220 }}
          className='rounded-md p-2'>
          <FontAwesomeIcon icon={faUserGroup}  className='h-5 w-5 md:h-8 md:w-8 ' />
          </motion.div>
          <Dot style={{color: getColor(1)}} size="30px" className={`transform -translate-y-6 ${isCurrentQuestion === 1 ? 'block': 'hidden'} `}/>
          </div>
          <hr style={{background: getColor(2)}} className="hidden md:block h-5 w-1 md:w-28 md:h-1 mx-auto bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>
          <div className='flex flex-col items-center '>
          <motion.div
          initial={{ y: 0 }}
          animate={{y : isCurrentQuestion === 2 ? -20 :  0 , backgroundColor: isCurrentQuestion === 2 ? getColor(2) : '', color: isCurrentQuestion === 2 ? '#fff' : getColor(2)}}
          transition={{ duration: 0.3, type: 'spring', bounce: 0.1, stiffness: 220 }}
          className='rounded-md p-2'> 
          <FontAwesomeIcon icon={faSackDollar} className='h-5 w-5 md:h-8 md:w-8 ' />
          </motion.div>
          <Dot style={{color: getColor(2)}} size="30px" className={`transform -translate-y-6 ${isCurrentQuestion === 2 ? 'block': 'hidden'} `}/>
          </div>
          <hr style={{background: getColor(3)}} className="hidden md:block h-5 w-1 md:w-28 md:h-1 mx-auto bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>
          <div className='flex flex-col items-center '>
          <motion.div
          initial={{ y: 0 }}
          animate={{y : isCurrentQuestion === 3 ? -20 :  0 , backgroundColor: isCurrentQuestion === 3 ? getColor(3) : '', color: isCurrentQuestion === 3 ? '#fff' : getColor(3)}}
          transition={{ duration: 0.3, type: 'spring', bounce: 0.1, stiffness: 220 }}
          className='rounded-md p-2'>
          <FontAwesomeIcon icon={faBuilding} className='h-5 w-5 md:h-9 md:w-9 ' />
          </motion.div>
          <Dot style={{color: getColor(3)}} size="30px" className={`transform -translate-y-6 ${isCurrentQuestion === 3 ? 'block': 'hidden'} `}/>
          </div>
          <hr style={{background: getColor(4)}} className="hidden md:block h-5 w-1 md:w-28 md:h-1 mx-auto bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>
          <div className='flex flex-col items-center '>
          <motion.div
          initial={{ y: 0 }}
          animate={{y : isCurrentQuestion === 4 ? -20 :  0 , backgroundColor: isCurrentQuestion === 4 ? getColor(4) : '', color: isCurrentQuestion === 4 ? '#fff' : getColor(4)}}
          transition={{ duration: 0.3, type: 'spring', bounce: 0.1, stiffness: 220 }}
          className='rounded-md p-2'>
          <FontAwesomeIcon icon={faChair} className='h-5 w-5 md:h-9 md:w-9 '/>
          </motion.div>
          <Dot style={{color: getColor(4)}} size="30px" className={`transform -translate-y-6 ${isCurrentQuestion === 4 ? 'block': 'hidden'} `}/>
          </div>
          <hr style={{background: getColor(5)}} className="hidden md:block h-5 w-1 md:w-28 md:h-1 mx-auto bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>
          <div className='flex flex-col items-center '>
          <motion.div
          initial={{ y: 0 }}
          animate={{y : isCurrentQuestion === 5 ? -20 :  0 , backgroundColor: isCurrentQuestion === 5 ? getColor(5) : '', color: isCurrentQuestion === 5 ? '#fff' : getColor(5)}}
          transition={{ duration: 0.3, type: 'spring', bounce: 0.1, stiffness: 220 }}
          className='rounded-md p-2'>
          <FontAwesomeIcon icon={faCalendarDays} className='h-5 w-5 md:h-9 md:w-9 ' />
          </motion.div>
          <Dot style={{color: getColor(5)}} size="30px" className={`transform -translate-y-6 ${isCurrentQuestion === 5 ? 'block': 'hidden'} `}/>
          </div>
          <hr style={{background: getColor(6)}} className="hidden md:block h-5 w-1 md:w-28 md:h-1 mx-auto bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>
          <div className='flex flex-col items-center '>
          <motion.div
          initial={{ y: 0 }}
          animate={{y : isCurrentQuestion === 6 ? -20 :  0 , backgroundColor: isCurrentQuestion === 6 ? getColor(6) : '', color: isCurrentQuestion === 6 ? '#fff' : getColor(6)}}
          transition={{ duration: 0.3, type: 'spring', bounce: 0.1, stiffness: 220 }}
          className='rounded-md p-2'>
          <FontAwesomeIcon icon={faMapLocationDot} className='h-5 w-5 md:w-9 md:h-9 ' />
          </motion.div>
          <Dot style={{color: getColor(6)}} size="30px" className={`transform -translate-y-6 ${isCurrentQuestion === 6 ? 'block': 'hidden'} `}/>
          </div>
          <hr style={{background: getColor(7)}} className="hidden md:block h-5 w-1 md:w-28 md:h-1 mx-auto bg-gray-200 border-0 rounded  dark:bg-gray-700"></hr>
          <div className='flex flex-col items-center '>
          <motion.div
          initial={{ y: 0 }}
          animate={{y : isCurrentQuestion === 7 ? -20 :  0 , backgroundColor: isCurrentQuestion === 7 ? getColor(7) : '', color: isCurrentQuestion === 7 ? '#fff' : getColor(7)}}
          transition={{ duration: 0.3, type: 'spring', bounce: 0.1, stiffness: 220 }}
          className='rounded-md p-2'>
          <FontAwesomeIcon icon={faFileContract} className='h-5 w-5 md:h-9 md:w-9 '/>
          </motion.div>
          <Dot style={{color: getColor(7)}} size="30px" className={`transform -translate-y-6 ${isCurrentQuestion === 7 ? 'block': 'hidden'} `}/>
          </div>
          </div>
          </motion.div>

        )}



      </div>
      
      
      {isModalOpen && <EventsGallery onClose={handleCloseModal} />}

      
    </div>
    
  );
};

export default FormPage;






{/* <div className='flex flex-col items-center justify-center text-[#fff] text-lg'>
<Link className='p-2' href="/work">최근 이벤트</Link>
<Link className='p-2' href="/how">작동 방식</Link>
<Link className='p-2' href="/about">스토리</Link>

</div> */}












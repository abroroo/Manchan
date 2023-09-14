import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import AddressFinder from './AddressFinder';
import { motion } from 'framer-motion';
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image';
import ko from "date-fns/locale/ko"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { setHours, setMinutes } from 'date-fns'; // Import the functions
import ConfettiExplosion from 'react-confetti-explosion';


interface ChildComponentProps {
    onButtonBackgroundChange: (background: string) => void;
  }





const Form = ({ onButtonBackgroundChange }: ChildComponentProps) => {


  // vars to store form data, not sure if needed

  const [eventDate, setEventDate] = useState<Date | null>(new Date());
  const [eventAddress, setEventAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

      // ...
      
  // const currentDate = new Date(); // Get the current date and time
  // const updatedDate = setHours(setMinutes(currentDate, 30), 17);
      
  const [currentDate, setCurrentDate] = useState<Date | null>(new Date());
      


  const [selectedAccesories, setSelectedAccesories] = useState<string[]>([]);

  const handleCheckboxAccesories = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSelectedAccesories((prevFormData : any) => ([ ...prevFormData, value ]));
  };








  // 키다 option handling var
  const [showInput, setShowInput] = useState<string>('false');

  
  // other option handling
const handleRadioChange = (e: any) => {
  const { value } = e.target;

  // Update the showInput state based on the radio option checked or unchecked
  if (value === 'other') {
    setShowInput('true');
  } else {
    setShowInput('false');
  }
};

















  // used for show/hide on next button click var
  const [currentQuestion, setCurrentQuestion] = useState(0);



  // next/previous  button handling
  const totalQuestions = 9;

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };















  // background chnage Event

  const [selectedEvent, setSelectedEvent] = useState("");
  const [buttonBackground, setButtonBackground] = useState("");

  useEffect(() => {
    // Initialize the buttonBackground state on the client-side
    let initialButtonBackground = "";
    if (selectedEvent === "wedding") initialButtonBackground = "#F25287";
    else if (selectedEvent === "festival") initialButtonBackground = "#7C3AED";
    else if (selectedEvent === "business") initialButtonBackground = "#2563EB";
    else if (selectedEvent === "public") initialButtonBackground = "#047857";
    else if (selectedEvent === "birthday") initialButtonBackground = "#9D174D";
    else if (selectedEvent === "other") initialButtonBackground = "#C05621";
    setButtonBackground(initialButtonBackground);
    if (currentQuestion === 9){
      setIsExploding(true)
      console.log("This is exploding: ", isExploding)
   } else {
     setIsExploding(false)
     console.log("This is exploding: ", isExploding)
   }
  }, [selectedEvent, currentQuestion]);

  const handleCheckboxChange = (value: string) => {
    setSelectedEvent(value);

    // Set the selected event and pass the buttonBackground value to the parent
    let updatedButtonBackground = "";
    if (value === "wedding") updatedButtonBackground = "#F25287";
    else if (value === "festival") updatedButtonBackground = "#7C3AED";
    else if (value === "business") updatedButtonBackground = "#2563EB";
    else if (value === "public") updatedButtonBackground = "#047857";
    else if (value === "birthday") updatedButtonBackground = "#9D174D";
    else if (value === "other") updatedButtonBackground = "#C05621";

    setButtonBackground(updatedButtonBackground);

    // Call the callback function from the parent with the updated buttonBackground value
    onButtonBackgroundChange(updatedButtonBackground);
  };




















 // Update formData whenever eventAddress changes
 useEffect(() => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      address: eventAddress,
      tool: selectedAccesories,
      event_type: selectedEvent,
      date_rigistered: currentDate,
      event_time: eventDate,
    }));
  }, [eventAddress,  selectedAccesories]);

   // Initialize state to store the selected options for each question
   const [formData, setFormData] = useState<any>({
     // initial date value
    address: eventAddress,
    tool: selectedAccesories
  });

  // Handle changes in radio inputs and update the formData state
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData : any) => ({ ...prevFormData, [name]: value }));
  };




    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
       
        
        try {
          // Perform your API request or any other necessary actions
          console.log('Form Data!')
          console.log(JSON.stringify(formData));
          console.log(formData)
    
        } catch (error) {
          console.error(error);
        }
      };
  
      






    







      // validate phone number 
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const validatePhoneNumber = () => {
    const phoneNumberRegex = /^010\d{8}$/; // Regex pattern for Korean phone number starting with 010 and followed by 8 numbers

    if (!phoneNumber.match(phoneNumberRegex)) {
      setPhoneNumberError('010으로 시작하는 전화 번호를 입력하십시오');
    } else {
      setPhoneNumberError('');
    }
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData : any) => ({ ...prevFormData, [name]: value }));
    setPhoneNumberError('');
  };









  // Animation for the checkboxes in the all questions exept the first one
const checkboxAnimationsGeneral = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.2,
    },
  };

  








     // Animation for the checkboxes in the first question
 const checkboxAnimations = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.2,
    },
  };




// Confetti Animation
const [isExploding, setIsExploding] = useState(false);
  


  return (<>
  

          <form className='w-full  h-full  bg-opacity-[0.98] mt-16 p-10 md:p-32 py-10 flex items-center justify-center flex-col  ' onSubmit={handleSubmit}>


{/* Intro to Form */}

{currentQuestion === 0 && (
  <div className='flex flex-col items-center justify-center'>
     <h1 className='font-semibold font-kr text-lg lg:text-[22px]'>어떤 행사를 하고 싶습니까?</h1>
  

<div className='flex flex-wrap  justify-between mt-5 md:mt-4'>

    <motion.div 
    whileTap={checkboxAnimations}
    className='event_range_wrapper w-28 h-28 md:w-36 md:h-36 relative m-1 md:m-2 xl:m-4 text-[#49111c] border rounded-[3px] cursor-pointer peer-checked:border-[#F25287] peer-checked:text-[#F25287] hover:text-[#F25287] hover:bg-gray-50 text-[14px] md:text-md select-none pl-[6px] pt-[2px]'>
      <input type="checkbox"
        value="wedding"
        id='wedding'
        checked={selectedEvent === 'wedding'}
        onChange={() => handleCheckboxChange('wedding')}
        className=''
      />
      <label htmlFor="wedding" className='absolute inset-0 flex flex-col items-center justify-center '>
      
      <Image width="54" height="54" src="/images/icons/wedding.png" alt="wedding" className='mb-2 '/>
      가쪽 개인행사
      </label>
    </motion.div>

   
        <motion.div
        whileTap={checkboxAnimations}
         className='event_range_wrapper w-28 h-28 md:w-36 md:h-36 relative m-1 md:m-2 xl:m-4 text-[#49111c] border rounded-[3px]cursor-pointer peer-checked:border-[#2563EB] peer-checked:text-[#2563EB] hover:text-[#2563EB] hover:bg-gray-50 text-[14px] md:text-md select-none pl-[6px] pt-[2px]'>
        <input type='checkbox' 
        value='bussiness' 
        id='bussiness'
        checked={selectedEvent === 'business'} 
        onChange={() => handleCheckboxChange('business')} className='flex-start' />
          <label htmlFor="bussiness" className="absolute inset-0 flex flex-col items-center justify-center ">
          <img width="54" height="54" src="/images/icons/bussiness.png" alt="wedding" className='mb-2'/>
          기업 이벤트
          </label>
        </motion.div>

        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-28 h-28 md:w-36 md:h-36 relative m-1 md:m-2 xl:m-4 text-[#49111c] border rounded-[3px] cursor-pointer peer-checked:border-[#047857] peer-checked:text-[#047857] hover:text-[#047857] hover:bg-gray-50 text-[14px] md:text-md select-none pl-[6px] pt-[2px]'>
        <input type='checkbox' value='public' id='public' checked={selectedEvent === 'public'} onChange={() => handleCheckboxChange('public')} className='flex-start' />
          <label htmlFor="public" className="absolute inset-0 flex flex-col items-center justify-center ">
          <img width="54" height="54" src="/images/icons/public.png" alt="wedding" className='mb-2'/>
          사회 단체행사
          </label>
        </motion.div>


        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-28 h-28 md:w-36 md:h-36 relative m-1 md:m-2 xl:m-4 text-[#49111c] border rounded-[3px] cursor-pointer peer-checked:border-[#7C3AED] peer-checked:text-[#7C3AED] hover:text-[#7C3AED] hover:bg-gray-50 text-[14px] md:text-md select-none pl-[6px] pt-[2px]'>
            <input type='checkbox' value='festival' id='festival' checked={selectedEvent === 'festival'} onChange={() => handleCheckboxChange('festival')} style={{ alignSelf: 'flex-start' }} />
            <label htmlFor="festival" className="absolute inset-0 flex flex-col items-center justify-center">
            <img width="64" height="64" src="/images/icons/festival.png" alt="festival" className=''/>
            기관, 축제등
            </label>
        </motion.div>


        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-28 h-28 md:w-36 md:h-36 relative m-1 md:m-2 xl:m-4 text-[#49111c] border rounded-[3px] cursor-pointer peer-checked:border-[#9D174D] peer-checked:text-[#9D174D] hover:text-[#9D174D] hover:bg-gray-50 text-[14px] md:text-md select-none pl-[6px] pt-[2px]'>
        <input type='checkbox' value='birthday' id='birthday' checked={selectedEvent === 'birthday'} onChange={() => handleCheckboxChange('birthday')} className='flex-start' />
          <label htmlFor="birthday" className="absolute inset-0 flex flex-col items-center justify-center ">
          <img width="54" height="54" src="/images/icons/birthday.png" alt="birthday" className='mb-2'/>
          스몰웨딩, 야외결혼
          </label>
        </motion.div>

        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-28 h-28 md:w-36 md:h-36 relative m-1 md:m-2 xl:m-4 text-[#49111c] border rounded-[3px] cursor-pointer peer-checked:border-[#C05621] peer-checked:text-[#C05621] hover:text-[#C05621] hover:bg-gray-50 text-[14px] md:text-md select-none pl-[6px] pt-[2px]'>
        <input type='checkbox' value='other' id='other' checked={selectedEvent === 'other'} onChange={() => handleCheckboxChange('other')} className='flex-start' />
          <label htmlFor="other" className="absolute inset-0 flex flex-col items-center justify-center ">
          <img width="54" height="54" src="/images/icons/other.png" alt="birthday" className='mb-2'/>
          키타
          </label>
        </motion.div>
      
    </div>
    </div>

    )}


{/* Number of Attendees */}
{currentQuestion === 1 && (
        <div className=" w-full mx-auto">
          <motion.h4 
          className="font-semibold font-kr text-md lg:text-[22px] mb-5 flex items-center justify-center"
          initial={{ x: -200}}
          whileInView={{ x: 0}}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          >행사 참석 예상 인원을 선택해주세요</motion.h4>

          <div>
              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.08, ease: [0.25, 1, 0.5, 1] }}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                    <input type='radio'  required name="people_count" value={30} onChange={handleInputChange}/>
                    <span className="pl-2 text-[14px] md:text-[17px]">30명 미만</span>
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.04, ease: [0.25, 1, 0.5, 1] }}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="people_count" value={50} onChange={handleInputChange}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">50명 미만</span>
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="people_count"  value={100} onChange={handleInputChange}/>
            
                  <span className="pl-2 text-[14px] md:text-[17px]">100명 미만</span>
                
                  
                  
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="people_count" value={200} onChange={handleInputChange}/>
                  
                  <span className="pl-2 text-[14px] md:text-[17px]">200명 미만</span>
                  
                  
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                    <input type='radio' required name="people_count"  value={300} onChange={handleInputChange}/>
                    
                    <span className="pl-2 text-[14px] md:text-[17px]">300명 미만</span> 
                    
                </motion.label>

                <motion.label 
                 whileTap={checkboxAnimationsGeneral}
                 initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.04, ease: [0.25, 1, 0.5, 1] }}
                 className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                    <input type='radio' required name="people_count" value={400} onChange={handleInputChange}/>
                    
                    <span className="pl-2 text-[14px] md:text-[17px]">400명 미만</span>
                    
                </motion.label>

              

                <motion.label 
                 whileTap={checkboxAnimationsGeneral}
                 initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, ease: [0.08, 1, 0.5, 1] }}
                 className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer">
              <input
                type='radio' required
                name="people_count"
                value="other"
                onChange={handleRadioChange}
                placeholder='직접 입력'
              />
              <span className="pl-2 text-[14px] md:text-[17px]">기타</span>
            </motion.label>

            {showInput == 'true' && (
              <motion.div 
              className="mt-3"
              initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}>
                <input type="text" className="ml-10 w-[90%] px-[15px] py-[14px] text-[#49111c]  rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder='예상 인원 (명)' name='people_count' onChange={handleInputChange}/>
              </motion.div>
            )}

          </div>
        </div>
   
  )}



{/* Event Budget */}

{currentQuestion === 2 && (
 
 <div className=' mx-auto w-full '>
   <motion.h4 
   initial={{ x: -200}}
   whileInView={{ x: 0}}
   transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
   className='font-semibold font-kr text-lg lg:text-[22px] mb-5 flex items-center justify-center'>식사 요청 예정금액 - 1인당</motion.h4>
   <div>
              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                    <input type='radio'  required name="meal_cost" value={10000} onChange={handleInputChange}/>
                    <span className="pl-2 text-[14px] md:text-[17px]">10.000 원 </span>
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.04, ease: [0.25, 1, 0.5, 1] }}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="meal_cost" value={15000} onChange={handleInputChange}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">15.000 원</span>
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="meal_cost" value={20000} onChange={handleInputChange} />
            
                  <span className="pl-2 text-[14px] md:text-[17px]">20.000 원</span>
                
                  
                  
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="meal_cost" value={30000} onChange={handleInputChange} />
                  
                  <span className="pl-2 text-[14px] md:text-[17px]">30.000 원</span>
                  
                  
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                    <input type='radio' required name="meal_cost" value={40000} onChange={handleInputChange} />
                    
                    <span className="pl-2 text-[14px] md:text-[17px]">40.000 원</span> 
                    
                </motion.label>

                <motion.label 
                 whileTap={checkboxAnimationsGeneral}
                 initial={{ x: -200}}
                 whileInView={{ x: 0}}
                 transition={{ duration: 0.2, delay: 0.04, ease: [0.25, 1, 0.5, 1] }}
                 className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                    <input type='radio' required name="meal_cost" value={50000} onChange={handleInputChange}/>
                    
                    <span className="pl-2 text-[14px] md:text-[17px]">50.000 원</span>
                    
                </motion.label>

              

                <motion.label 
                 whileTap={checkboxAnimationsGeneral}
                 initial={{ x: -200}}
                 whileInView={{ x: 0}}
                 transition={{ duration: 0.2, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
                 className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer">
              <input
                type='radio' required
                name="meal_cost"
                value="other"
                onChange={handleRadioChange}
                placeholder='직접 입력'
              />
              <span className="pl-2 text-[14px] md:text-[17px]">기타</span>
            </motion.label>

            {showInput == 'true' && (
              <motion.div 
              initial={{ x: -200}}
              whileInView={{ x: 0}}
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="mt-3">
                <input type="text" className="ml-10 w-[90%] px-[15px] py-[14px] text-[#49111c]  rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder='예상 금액 (원)' name='meal_cost' onChange={handleInputChange}/>
              </motion.div>
            )}

          </div>
 </div>
)}





        {/* Event Venue */}
        {currentQuestion === 3 && (
  <div className=" w-full mx-auto">
    <motion.h4 
    initial={{ x: -200}}
    whileInView={{ x: 0}}
    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
    className="font-semibold font-kr text-lg lg:text-[22px] mb-5 flex items-center justify-center">행사 예정 장소는 어디인가요?</motion.h4>

              <div>
            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
             className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required name="event_place" value={1} onChange={handleInputChange} />
                  <span className="pl-2 text-[14px] md:text-[17px]">실내</span>
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.04, ease: [0.25, 1, 0.5, 1] }}
             className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                <input type='radio' required  name="event_place"  value={2} onChange={handleInputChange}/>
                
                <span className="pl-2 text-[14px] md:text-[17px]">야외</span>
                
                
            </motion.label>

            <motion.label
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
            className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3   hover:bg-indigo-50 cursor-pointer ">
                <input type='radio' required  name="event_place" value={3} onChange={handleInputChange} />
                <span className="pl-2 text-[14px] md:text-[17px]">체육관</span>
                
                
                
            </motion.label>

            <motion.label
             whileTap={checkboxAnimationsGeneral} 
             initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3   hover:bg-indigo-50 cursor-pointer ">
                <input type='radio' required  name="event_place" value={4} onChange={handleInputChange}/>
                <span className="pl-2 text-[14px] md:text-[17px]">연회장</span>
                
               
                
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
             className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3   hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required name="event_place" value={5} onChange={handleInputChange}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">호텔</span> 
                 
                  
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.04, ease: [0.25, 1, 0.5, 1] }}
               className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3   hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required name="event_place" value={6} onChange={handleInputChange}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">미정</span>
          
                  
              </motion.label>

             

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
               className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer">
            <input
              type='radio' required
              name="event_place"
              value="other"
              onChange={handleRadioChange}
              placeholder='직접 입력'
            />
            <span className="pl-2 text-[14px] md:text-[17px]">기타</span>
          </motion.label>

          {showInput == 'true' && (
            <motion.div 
            initial={{ x: -200}}
              whileInView={{ x: 0}}
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="mt-3">
              <input 
              type="text" className="ml-10 w-[90%] px-[15px] py-[14px] text-[#49111c]  rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name='event_place' placeholder='명기해주세요' onChange={handleInputChange} />
            </motion.div>
          )}

        </div>
  </div>


        )}

  


  {/* Event accessory */}

   {currentQuestion === 4 && (
  <div className=" w-full mx-auto">
    <motion.h4 
     initial={{ x: -200}}
     whileInView={{ x: 0}}
     transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
     className="font-semibold font-kr text-lg lg:text-[22px] mb-5 flex items-center justify-center">필요한 품목을 고르세요</motion.h4>

              <div>
            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.08, ease: [0.25, 1, 0.5, 1] }}
             className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='checkbox' required name="tool" value='사각 테이블' onChange={handleCheckboxAccesories}/>
                  
                <span className="pl-2 text-[14px] md:text-[17px]">사각 테이블</span>
                
                
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
             className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                <input type='checkbox' required  name="tool" value='원탁테이블' onChange={handleCheckboxAccesories}/>
                
                <span className="pl-2 text-[14px] md:text-[17px]">원탁테이블</span>
                
                
                
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.04, ease: [0.25, 1, 0.5, 1] }}
             className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                <input type='checkbox' required  name="tool" value='스텐딩 테이블' onChange={handleCheckboxAccesories}/>
                
                <span className="pl-2 text-[14px] md:text-[17px]">스텐딩 테이블</span>
                
               
                
            </motion.label>

            <motion.label
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
             className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                <input type='checkbox' required  name="tool" value='의자' onChange={handleCheckboxAccesories}/>
                
                <span className="pl-2 text-[14px] md:text-[17px]">의자</span>
                
               
                
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
             className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='checkbox' required name="tool" value='의자커버' onChange={handleCheckboxAccesories}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">의자커버</span> 
                
              </motion.label>

              <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
             className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='checkbox' required name="tool" value='자바라 텐트 (3m * 6m)' onChange={handleCheckboxAccesories}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">자바라 텐트 (3m * 6m)</span> 
                
              </motion.label>

              <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.04, ease: [0.25, 1, 0.5, 1] }}
             className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='checkbox' required name="tool" value='몽골텐트 (5m * 5m)' onChange={handleCheckboxAccesories}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">몽골텐트 (5m * 5m)</span> 
                
              </motion.label>

              <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
             className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='checkbox' required name="tool" value='단상' onChange={handleCheckboxAccesories}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">단상</span> 
                
              </motion.label>

              <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.08, ease: [0.25, 1, 0.5, 1] }}
             className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='checkbox' required name="tool" value='기본음향' onChange={handleCheckboxAccesories}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">기본음향</span> 
                
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -200}}
               whileInView={{ x: 0}}
               transition={{ duration: 0.2, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
               className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3 hover:bg-indigo-50 cursor-pointer">
            <input
              type='radio' required
              name="tool"
              value="other"
              onChange={handleRadioChange}
              placeholder='직접 입력'
            />
            <span className="pl-2 text-[14px] md:text-[17px]">기타</span>
          </motion.label>

          {showInput == 'true' && (
            <div className="mt-3">
              <input type="text" className="ml-10 w-[90%] px-[15px] py-[14px] text-[#49111c]  rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"  placeholder='명기해주세요' name='tool' onChange={handleCheckboxAccesories}/>
            </div>
          )}

        </div>
  </div>


        )}





       {/* Event Date */}
       {currentQuestion === 5 && (
        <div className=''>
           <motion.h4 
            initial={{ x: -200}}
            whileInView={{ x: 0}}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="font-semibold font-kr text-lg lg:text-[22px]  flex items-center justify-center mb-5">행사 예상 시간을 선택해주세요</motion.h4>
       <motion.div 
        initial={{ x: -200}}
        whileInView={{ x: 0}}
        transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
        className=" w-full  flex justify-between ">
    
       <DatePicker
            showIcon
            selected={eventDate}
            onChange={(date) => setEventDate(date || new Date())}
            minDate={new Date()}
            inline
            showTimeSelect
            timeIntervals={60}
            timeCaption="행사 시간"
            locale={ko} // Set the Korean locale
            wrapperClassName="datePicker "
            required
            
            
            />


      </motion.div>
      </div>
       )}


      {/* Address of the Event */}
{currentQuestion === 6 && (
      <AddressFinder setEventAddress={setEventAddress} buttonBackground={buttonBackground} />

)}

      {/* Name and Phone Number */}
      {currentQuestion === 7 && (
      <div className='w-full mx-auto'>
              <motion.h1 
              initial={{ x: -200}}
              whileInView={{ x: 0}}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className='text-lg lg:text-[22px] font-semibold font-kr  mb-5 flex items-center justify-center'>연락처 정보를 입력하십시오</motion.h1>
      

      {/* Name */}
      <motion.div
      initial={{ x: -200}}
      whileInView={{ x: 0}}
      transition={{ duration: 0.2, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
      >
      <label htmlFor="input2" className="block text-sm font-medium text-[#49111c] ">이름</label>
      <input className="block w-full h-14 mt-1 text-[#49111c]  py-7 my-2 focus:outline-none rounded-lg pl-4 text-[14px] md:text-[17px] border" placeholder="" type="text" id="name" name='name' onChange={handleInputChange}
      //value={name}
      //onChange={(e) => setName(e.target.value)}
      required/>
      </motion.div>
      

      {/* Phone number */}
       <motion.div 
       initial={{ x: -200}}
       whileInView={{ x: 0}}
       transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
       className="mt-7 mb-7">
              <label htmlFor="input2" className="block text-sm font-medium text-[#49111c]">
                전화번호
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="input2"
                  name='phone_number'
                  
                  className={`block w-full h-14 pl-4 pr-3 py-7 mt-2 text-[14px] md:text-[17px] text-[#49111c] rounded-lg  border ${
                    phoneNumberError ? 'border-red-500' : ''
                  }`}
                  placeholder="숮자만 입력"
                  onChange={handlePhoneNumberChange}
                  onBlur={validatePhoneNumber}
                  required
                />
                {phoneNumberError && <p className="text-red-500 mt-1">{phoneNumberError}</p>}
                
              </div>
            </motion.div>
        </div>
      )}


{currentQuestion === 8 && (

<div 

className='text-xl flex justify-center items-center flex-col  mb-16 w-full'>
  {/* <h1 className='text-[60px] mb-10 font-[500] font-kr'>Congratulation! </h1> */}
  
  <motion.p 
  initial={{ x: -200}}
  whileInView={{ x: 0}}
  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
  className='m-5 font-light'>Your event plan is ready!</motion.p>

<motion.div 
initial={{ x: -100}}
whileInView={{ x: 0}}
transition={{ duration: 0.2, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
className='flex flex-col justify-center items-start  font-bold w-full border p-10 rounded'>
  <h3 className='py-4'>Please confirm your event details: </h3>
    <p>Address: <span className='font-light pl-1'>{formData.address}</span></p>
    <p>Tools: <span className='font-light pl-1'>{formData.tool.join(', ')}</span></p>
    <p>Event Type: <span className='font-light pl-1'>{formData.event_type}</span></p>
    {/* <p>Event Date: {formData.event_date.toLocaleString()}</p>
    <p>Event Time: {formData.event_time.toLocaleString()}</p> */}
    <p>Event Place: <span className='font-light pl-1'>{formData.event_place}</span></p>
    <p>Meal Cost: <span className='font-light pl-1'>{formData.meal_cost} 원</span></p>
    <p>People Count: <span className='font-light pl-1'>{formData.people_count} 명</span></p>
    <p>Name: <span className='font-light pl-1'>{formData.name}</span></p>
    <p>Phone Number: <span className='font-light pl-1'>{formData.phone_number}</span></p>
 
</motion.div>



</div>

)}
      {currentQuestion === 9 && (

<motion.div 
initial={{  scale: 0.8}}
whileInView={{ scale: [1.2, 1]}}
transition={{duration: 0.3, type: "spring", stiffness: 100}}
className='text-center mb-16 flex items-center justify-center flex-col'>
<h1 className='text-4xl md:text-6xl font-semibold font-kr mb-10'>감사합니다!!!</h1>
<div>{isExploding && <ConfettiExplosion force={0.6} duration={2500} particleCount={80} width={1000} />}</div>
<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.5, duration: 0.2, type: "spring", stiffness: 100}}>
<p className='m-1 font-light text-lg md:text-[18px]'>
  귀하의 성공적 행사를 위해
</p>
<p className='m-1 font-light text-lg md:text-[18px]'>
  Catering 고수 전문가의
</p>
<p className='m-1 font-light text-lg md:text-[18px]'>
  견적을 보내드리겠습니다!!!
</p>
</motion.div>
</motion.div>


      )}

  <div className={`w-full flex flex-row items-center   ${currentQuestion < 1 ? 'justify-center' : 'justify-between'} ${currentQuestion > 8 ? 'hidden' : 'flex'}`}>


  {currentQuestion > 0 && (
  <motion.button
  initial={{ x: -10}}
  whileInView={{ x: 0}}
  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
    type='button'
    className='w-[40%] md:w-[16%] h-[46px] text-md py-2 border text-[#49111c] hover:bg-[#6161ff]/10  tracking-wider rounded-[3px]  focus:outline-none focus:bg-blue mt-5 max-w-md  text-[14px] md:text-[16px] mr-2'
    onClick={handlePrevious}
  >
    {currentQuestion < totalQuestions - 1 ? (
      <>
      <FontAwesomeIcon icon={faCaretLeft} />
      </> ) : ( 'Edit' )}
  </motion.button>
  )}
 <motion.button
 
    style={{ background: buttonBackground, color: "#fff" }}
    onClick={handleNext} 
    type='submit'
    className='w-[100%] h-12 text-md py-2  tracking-wider rounded-[3px] border text-[#49111c] focus:outline-none focus:bg-blue mt-5 max-w-sm  text-[14px] md:text-[16px] bg-[#900C3F]'
    draggable="false"
  >
    {currentQuestion < totalQuestions - 1 ? (
      <>
        다음 <FontAwesomeIcon icon={faCaretRight} />
      </>
    ) : (
      'Submit'
    )}
  </motion.button>

  </div>

</form>

  </>)
}

export default Form













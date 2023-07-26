import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import AddressFinder from './AddressFinder';
import { motion } from 'framer-motion';
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image';
import ko from "date-fns/locale/ko"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'



interface ChildComponentProps {
    onButtonBackgroundChange: (background: string) => void;
  }



const Form = ({ onButtonBackgroundChange }: ChildComponentProps) => {


  // vars to store form data, not sure if needed

  const [eventDate, setEventDate] = useState<Date | null>(new Date());
  const [eventAddress, setEventAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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
  const totalQuestions = 10;

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };




















 // Update formData whenever eventAddress changes
 useEffect(() => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      address: eventAddress,
      tool: selectedAccesories,
    }));
  }, [eventAddress,  selectedAccesories]);

   // Initialize state to store the selected options for each question
   const [formData, setFormData] = useState<any>({
    date_rigistered: eventDate, // initial date value
    address: eventAddress,
    phone_number: phoneNumber,
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
  }, [selectedEvent]);

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



  return (<>
  

          <form className='w-full  h-full  bg-opacity-[0.98] mt-16 p-10 md:p-32 py-10 flex items-center justify-center flex-col  ' onSubmit={handleSubmit}>


{/* Intro to Form */}

{currentQuestion === 0 && (
  <div className='flex flex-col items-center justify-center'>
     <h1 className='font-semibold text-[#49111c] text-[23px]'>어떤 행사를 하고 싶습니까?</h1>
  

<div className='flex flex-wrap  justify-between mt-5 md:mt-4'>

    <motion.div 
    whileTap={checkboxAnimations}
    className='event_range_wrapper w-28 h-28 md:w-36 md:h-36 relative m-1 md:m-2 xl:m-4 text-[#49111c] border rounded-md cursor-pointer peer-checked:border-[#F25287] peer-checked:text-[#F25287] hover:text-[#F25287] hover:bg-gray-50 text-md select-none pl-[6px] pt-[2px]'>
      <input type="checkbox"
        value="wedding"
        id='wedding'
        checked={selectedEvent === 'wedding'}
        onChange={() => handleCheckboxChange('wedding')}
        className=''
      />
      <label htmlFor="wedding" className='absolute inset-0 flex flex-col items-center justify-center '>
      
      <Image width="54" height="54" src="/images/icons/wedding.png" alt="wedding" className='mb-2'/>
      웨딩
      </label>
    </motion.div>

   
        <motion.div
        whileTap={checkboxAnimations}
         className='event_range_wrapper w-28 h-28 md:w-36 md:h-36 relative m-1 md:m-2 xl:m-4 text-[#49111c] border rounded-md cursor-pointer peer-checked:border-[#2563EB] peer-checked:text-[#2563EB] hover:text-[#2563EB] hover:bg-gray-50 text-md select-none pl-[6px] pt-[2px]'>
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
        className='event_range_wrapper w-28 h-28 md:w-36 md:h-36 relative m-1 md:m-2 xl:m-4 text-[#49111c] border rounded-md cursor-pointer peer-checked:border-[#047857] peer-checked:text-[#047857] hover:text-[#047857] hover:bg-gray-50 text-md select-none pl-[6px] pt-[2px]'>
        <input type='checkbox' value='public' id='public' checked={selectedEvent === 'public'} onChange={() => handleCheckboxChange('public')} className='flex-start' />
          <label htmlFor="public" className="absolute inset-0 flex flex-col items-center justify-center ">
          <img width="54" height="54" src="/images/icons/public.png" alt="wedding" className='mb-2'/>
          공개 이벤트
          </label>
        </motion.div>


        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-28 h-28 md:w-36 md:h-36 relative m-1 md:m-2 xl:m-4 text-[#49111c] border rounded-md cursor-pointer peer-checked:border-[#7C3AED] peer-checked:text-[#7C3AED] hover:text-[#7C3AED] hover:bg-gray-50 text-md select-none pl-[6px] pt-[2px]'>
            <input type='checkbox' value='festival' id='festival' checked={selectedEvent === 'festival'} onChange={() => handleCheckboxChange('festival')} style={{ alignSelf: 'flex-start' }} />
            <label htmlFor="festival" className="absolute inset-0 flex flex-col items-center justify-center">
            <img width="64" height="64" src="/images/icons/festival.png" alt="festival" className=''/>
            제전
            </label>
        </motion.div>


        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-28 h-28 md:w-36 md:h-36 relative m-1 md:m-2 xl:m-4 text-[#49111c] border rounded-md cursor-pointer peer-checked:border-[#9D174D] peer-checked:text-[#9D174D] hover:text-[#9D174D] hover:bg-gray-50 text-md select-none pl-[6px] pt-[2px]'>
        <input type='checkbox' value='birthday' id='birthday' checked={selectedEvent === 'birthday'} onChange={() => handleCheckboxChange('birthday')} className='flex-start' />
          <label htmlFor="birthday" className="absolute inset-0 flex flex-col items-center justify-center ">
          <img width="54" height="54" src="/images/icons/birthday.png" alt="birthday" className='mb-2'/>
          생일
          </label>
        </motion.div>

        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-28 h-28 md:w-36 md:h-36 relative m-1 md:m-2 xl:m-4 text-[#49111c] border rounded-md cursor-pointer peer-checked:border-[#C05621] peer-checked:text-[#C05621] hover:text-[#C05621] hover:bg-gray-50 text-md select-none pl-[6px] pt-[2px]'>
        <input type='checkbox' value='other' id='other' checked={selectedEvent === 'other'} onChange={() => handleCheckboxChange('other')} className='flex-start' />
          <label htmlFor="other" className="absolute inset-0 flex flex-col items-center justify-center ">
          <img width="54" height="54" src="/images/icons/other.png" alt="birthday" className='mb-2'/>
          키타
          </label>
        </motion.div>
      
    </div>
    </div>

    )}


  {/* Type of Event */}
{currentQuestion === 1 && (
 
  <div className=' mx-auto w-full '>
    <h4 className='text-xl lg:text-2xl text-[#49111c] font-semibold mb-5 flex items-center justify-center'>어떤 행사를 계획 중이신가요?</h4>
    <div>
      
      <motion.label 
      whileTap={checkboxAnimationsGeneral}
      className='flex border   text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer'>
        <input type='radio' required  name='event_type'  value={1} onChange={handleInputChange}/>
        <span className='pl-2 text-[14px] md:text-[17px]'>개인 행사</span>
        
      </motion.label>
    
      <motion.label 
      whileTap={checkboxAnimationsGeneral}
      className='flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer'>
        <input type='radio' required  name='event_type'  value={2} onChange={handleInputChange} />
        <div className='flex flex-col'>
          <span className='pl-2 text-[14px] md:text-[17px]'>기업 행사</span>
          <span className='text-sm text-[#49111c]/50 pl-2'>워크숍, 신년/송년회, 기념식 등</span>
        </div>
      </motion.label>

      <motion.label 
       whileTap={checkboxAnimationsGeneral}
      className='flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer'>
        <input type='radio' required  name='event_type' value={3} onChange={handleInputChange} />
        <div className='flex flex-col'>
          <span className='pl-2 text-[14px] md:text-[17px]'>지역 행사</span>
          <span className='text-sm text-[#49111c]/50 pl-2'>축제, 체험행사 등</span>
        </div>
      </motion.label>

      <motion.label 
       whileTap={checkboxAnimationsGeneral}
       className='flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer'>
        <input type='radio' required  name='event_type' value={4} onChange={handleInputChange} />
        <div className='flex flex-col'>
          <span className='pl-2 text-[14px] md:text-[17px]'>홍보 행사</span>
          <span className='text-sm text-[#49111c]/50 pl-2'>전시, 박람회, 쇼케이스 등</span>
        </div>
      </motion.label>

      <motion.label 
       whileTap={checkboxAnimationsGeneral}
       className='flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer'>
        <input type='radio' required name='event_type' value={5} onChange={handleInputChange} />
        <span className='pl-2 text-[14px] md:text-[17px]'>강연/간담회</span>
      </motion.label>

      <motion.label 
       whileTap={checkboxAnimationsGeneral}
       className='flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer'>
        <input type='radio' required name='event_type' value='other' onChange={handleRadioChange} title='직접 입력' />
        <span className='pl-2 text-[14px] md:text-[17px]'>기타</span>
      </motion.label>

      {showInput == 'true' && (
        <div className='mt-3 '>
          <input
            type='text'
            className='ml-10 w-[90%] px-[15px] py-[14px]  rounded-lg text-[#49111c] border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            name='event_type'
            onChange={handleInputChange}
            
          />
        </div>
      )}
    </div>
  </div>
)}



{/* Number of Attendees */}
{currentQuestion === 2 && (
        <div className=" w-full mx-auto">
          <h4 className="text-xl lg:text-2xl font-semibold text-[#49111c] mb-5 flex items-center justify-center">행사 참석 예상 인원을 선택해주세요</h4>

          <div>
              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                    <input type='radio'  required name="people_count" value={30} onChange={handleInputChange}/>
                    <span className="pl-2 text-[14px] md:text-[17px]">30명 미만</span>
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="people_count" value={50} onChange={handleInputChange}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">50명 미만</span>
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="people_count"  value={100} onChange={handleInputChange}/>
            
                  <span className="pl-2 text-[14px] md:text-[17px]">100명 미만</span>
                
                  
                  
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="people_count" value={200} onChange={handleInputChange}/>
                  
                  <span className="pl-2 text-[14px] md:text-[17px]">200명 미만</span>
                  
                  
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                    <input type='radio' required name="people_count"  value={300} onChange={handleInputChange}/>
                    
                    <span className="pl-2 text-[14px] md:text-[17px]">300명 미만</span> 
                    
                </motion.label>

                <motion.label 
                 whileTap={checkboxAnimationsGeneral}
                 className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                    <input type='radio' required name="people_count" value={400} onChange={handleInputChange}/>
                    
                    <span className="pl-2 text-[14px] md:text-[17px]">400명 미만</span>
                    
                </motion.label>

              

                <motion.label 
                 whileTap={checkboxAnimationsGeneral}
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
              <div className="mt-3">
                <input type="text" className="ml-10 w-[90%] px-[15px] py-[14px] text-[#49111c]  rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name='people_count' onChange={handleInputChange}/>
              </div>
            )}

          </div>
        </div>
   
  )}



{/* Event Budget */}

{currentQuestion === 3 && (
 
 <div className=' mx-auto w-full '>
   <h4 className='text-xl lg:text-2xl text-[#49111c] font-semibold mb-5 flex items-center justify-center'>식사 와청 건금액 / 일인당</h4>
   <div>
              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                    <input type='radio'  required name="meal_cost" value={10000} onChange={handleInputChange}/>
                    <span className="pl-2 text-[14px] md:text-[17px]">10.000 원 </span>
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="meal_cost" value={15000} onChange={handleInputChange}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">15.000 원</span>
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="meal_cost" value={20000} onChange={handleInputChange} />
            
                  <span className="pl-2 text-[14px] md:text-[17px]">20.000 원</span>
                
                  
                  
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="meal_cost" value={30000} onChange={handleInputChange} />
                  
                  <span className="pl-2 text-[14px] md:text-[17px]">30.000 원</span>
                  
                  
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                    <input type='radio' required name="meal_cost" value={40000} onChange={handleInputChange} />
                    
                    <span className="pl-2 text-[14px] md:text-[17px]">40.000 원</span> 
                    
                </motion.label>

                <motion.label 
                 whileTap={checkboxAnimationsGeneral}
                 className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                    <input type='radio' required name="meal_cost" value={50000} onChange={handleInputChange}/>
                    
                    <span className="pl-2 text-[14px] md:text-[17px]">50.000 원</span>
                    
                </motion.label>

              

                <motion.label 
                 whileTap={checkboxAnimationsGeneral}
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
              <div className="mt-3">
                <input type="text" className="ml-10 w-[90%] px-[15px] py-[14px] text-[#49111c]  rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name='meal_cost' onChange={handleInputChange}/>
              </div>
            )}

          </div>
 </div>
)}





        {/* Event Venue */}
        {currentQuestion === 4 && (
  <div className=" w-full mx-auto">
    <h4 className="text-xl lg:text-2xl font-semibold text-[#49111c] mb-5 flex items-center justify-center">행사 예정 장소는 어디인가요?</h4>

              <div>
            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required name="event_place" value={1} onChange={handleInputChange} />
                  <span className="pl-2 text-[14px] md:text-[17px]">호텔</span>
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                <input type='radio' required  name="event_place"  value={2} onChange={handleInputChange}/>
                <div className='flex flex-col'>
                <span className="pl-2 text-[14px] md:text-[17px]">이벤트/컨벤션홀</span>
                </div>
                
            </motion.label>

            <motion.label
             whileTap={checkboxAnimationsGeneral}
            className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                <input type='radio' required  name="event_place" value={3} onChange={handleInputChange} />
                <div className='flex flex-col'>
                <span className="pl-2 text-[14px] md:text-[17px]">주거 공간</span>
                <span className='text-sm text-[#49111c]/50 pl-2'>주택, 빌라 등</span>
                </div>
                
            </motion.label>

            <motion.label
             whileTap={checkboxAnimationsGeneral} 
            className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                <input type='radio' required  name="event_place" value={4} onChange={handleInputChange}/>
                <div className='flex flex-col'>
                <span className="pl-2 text-[14px] md:text-[17px]">사내 공간</span>
                <span className='text-sm text-[#49111c]/50 pl-2'>강당, 사무실, 로비 등</span>
                </div>
                
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required name="event_place" value={5} onChange={handleInputChange}/>
                  <div className='flex flex-col'>
                  <span className="pl-2 text-[14px] md:text-[17px]">기타 실내</span> 
                  <span className='text-sm text-[#49111c]/50 pl-2'>극장, 공연장, 클럽 등</span>
                  </div>
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required name="event_place" value={6} onChange={handleInputChange}/>
                  <div className='flex flex-col'>
                  <span className="pl-2 text-[14px] md:text-[17px]">기타 야외</span>
                  <span className='text-sm text-[#49111c]/50 pl-2'>체육관, 공원, 캠핑장 등</span>
                  </div>
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required name="event_place" value={7} onChange={handleInputChange}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">미정</span>
                  
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
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
            <div className="mt-3">
              <input type="text" className="ml-10 w-[90%] px-[15px] py-[14px] text-[#49111c]  rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name='event_place' onChange={handleInputChange} />
            </div>
          )}

        </div>
  </div>


        )}

  


  {/* Event accessory */}

   {currentQuestion === 5 && (
  <div className=" w-full mx-auto">
    <h4 className="text-xl lg:text-2xl font-semibold text-[#49111c] mb-5 flex items-center justify-center">Would you need ?</h4>

              <div>
            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='checkbox' required name="tool" value='chairs' onChange={handleCheckboxAccesories}/>
                  <div className='flex flex-col'>
                <span className="pl-2 text-[14px] md:text-[17px]">Chairs</span>
                <span className="text-sm text-[#49111c]/50 pl-2">Plastic chairs with cover</span>
                </div>
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                <input type='checkbox' required  name="tool" value='table' onChange={handleCheckboxAccesories}/>
                <div className='flex flex-col'>
                <span className="pl-2 text-[14px] md:text-[17px]">Table</span>
                <span className="text-sm text-[#49111c]/50 pl-2">Circle or square wood tables with cover</span>
                </div>
                
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                <input type='checkbox' required  name="tool" value='tent' onChange={handleCheckboxAccesories}/>
                <div className='flex flex-col'>
                <span className="pl-2 text-[14px] md:text-[17px]">Tent</span>
                <span className='text-sm text-[#49111c]/50 pl-2'>One set 10 meters long</span>
                </div>
                
            </motion.label>

            <motion.label
             whileTap={checkboxAnimationsGeneral}
             className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                <input type='checkbox' required  name="tool" value='music' onChange={handleCheckboxAccesories}/>
                <div className='flex flex-col'>
                <span className="pl-2 text-[14px] md:text-[17px]">Music</span>
                <span className='text-sm text-[#49111c]/50 pl-2'>Speakers, microphone</span>
                </div>
                
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                  <input type='checkbox' required name="tool" value='ceremony' onChange={handleCheckboxAccesories}/>
                  <div className='flex flex-col'>
                  <span className="pl-2 text-[14px] md:text-[17px]">Ceremony Accesosories </span> 
                  <span className='text-sm text-[#49111c]/50 pl-2'>Red carpet, ribbon, scissors</span>
                  </div>
              </motion.label>


              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer">
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
              <input type="text" className="ml-10 w-[90%] px-[15px] py-[14px] text-[#49111c]  rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name='tool' onChange={handleCheckboxAccesories}/>
            </div>
          )}

        </div>
  </div>


        )}




   {/* Event Duration */}
   {currentQuestion === 6 && (
   <div className="w-full mx-auto">
          <h4 className="text-xl lg:text-2xl font-semibold text-[#49111c] flex items-center justify-center">행사 예상 소요 시간을 선택해주세요.</h4>

          <div>
              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg  p-3 md:p-4 pl-5 my-3 hover:bg-indigo-50 cursor-pointer ">
                    <input type='radio' required name="event_duration" value={1} onChange={handleInputChange}/>
                    <span className="pl-2 text-[14px] md:text-[17px]">1시간</span>
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg  p-3 md:p-4 pl-5 my-3 hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="event_duration" value={2} onChange={handleInputChange}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">2시간</span>
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg  p-3 md:p-4 pl-5 my-3 hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="event_duration" value={3} onChange={handleInputChange}/>
            
                  <span className="pl-2 text-[14px] md:text-[17px]">3시간</span>
                
                  
                  
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3 hover:bg-indigo-50 cursor-pointer ">
                  <input type='radio' required  name="event_duration" value={4} onChange={handleInputChange}/>
                  
                  <span className="pl-2 text-[14px] md:text-[17px]">4시간</span>
                  
                  
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               className="flex border text-[#49111c] rounded-lg  p-3 md:p-4 pl-5 my-3 hover:bg-indigo-50 cursor-pointer ">
                    <input type='radio' required name="event_duration" value={5} onChange={handleInputChange}/>
                    
                    <span className="pl-2 text-[14px] md:text-[17px]">5시간</span> 
                    
                </motion.label>

                

                <motion.label 
                 whileTap={checkboxAnimationsGeneral}
                 className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3 hover:bg-indigo-50 cursor-pointer">
              <input
                type='radio' required
                name="event_duration"
                value="allDay"
                onChange={handleInputChange}
                
              />
              <span className="pl-2 text-[14px] md:text-[17px]">하루 이상</span>
            </motion.label>
              

                <motion.label 
                 whileTap={checkboxAnimationsGeneral}
                 className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3 hover:bg-indigo-50 cursor-pointer">
              <input
                type='radio' required
                name="event_duration"
                value="other"
                onChange={handleRadioChange}
                placeholder='직접 입력'
              />
              <span className="pl-2 text-[14px] md:text-[17px]">기타</span>
            </motion.label>

            {showInput == 'true' && (
              <div className="mt-3">
                <input type="text" className="ml-10 w-[90%] px-[15px] py-[14px] text-[#49111c]  rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name='event_duration' onChange={handleInputChange} />
              </div>
            )}

          </div>
        </div>

   )}

       {/* Event Date */}
       {currentQuestion === 7 && (
       <div className=" w-full  flex items-center justify-center">
       <DatePicker
            showIcon
            selected={eventDate}
            onChange={(date) => setEventDate(date || new Date())}
            minDate={new Date()}
            inline
            showTimeSelect
            locale={ko} // Set the Korean locale
            wrapperClassName="datePicker"
            required
            
            
            />
      </div>
       )}


      {/* Address of the Event */}
{currentQuestion === 8 && (
      <AddressFinder setEventAddress={setEventAddress} buttonBackground={buttonBackground} />

)}

      {/* Name and Phone Number */}
      {currentQuestion === 9 && (
      <div className='w-full mx-auto'>
              <h1 className='text-xl lg:text-2xl text-[#49111c] font-semibold mb-5 flex items-center justify-center'>기본 정보를 입력하시면 딱 맞는 <br/>고수의 견적을 보내드립니다</h1>
      

      {/* Name */}
      <div>
      <label htmlFor="input2" className="block text-sm font-medium text-[#49111c] ">이름</label>
      <input className="block w-full h-14 mt-1 text-[#49111c]  py-7 my-2 focus:outline-none rounded-lg pl-4 text-[14px] md:text-[17px] border" placeholder="" type="text" id="name" name='name' onChange={handleInputChange}
      //value={name}
      //onChange={(e) => setName(e.target.value)}
      required/>
      </div>
      

      {/* Phone number */}
       <div className="mt-7 mb-7">
              <label htmlFor="input2" className="block text-sm font-medium text-[#49111c]">
                전화번호
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  id="input2"
                  name='phoneNumber'
                  
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
            </div>
        </div>
      )}

  <div className={`w-full flex flex-row items-center   ${currentQuestion < 1 ? 'justify-center' : 'justify-between'}`}>
  {currentQuestion > 0 && (
  <button
    type='button'
    className='w-[40%] md:w-[16%] h-[46px] text-md py-2 border text-[#49111c] hover:bg-[#6161ff]/10  tracking-wider rounded-[5px]  focus:outline-none focus:bg-blue mt-5 max-w-md  text-[14px] md:text-[16px] mr-2'
    onClick={handlePrevious}
  >
    <FontAwesomeIcon icon={faCaretLeft} />
  </button>
  )}
 <motion.button
    style={{ background: buttonBackground, color: "#fff" }}
    onClick={handleNext} 
    type='submit'
    className='w-[100%] h-12 text-md py-2  tracking-wider rounded-[5px] border text-[#49111c] focus:outline-none focus:bg-blue mt-5 max-w-sm  text-[14px] md:text-[16px] bg-[#6161ff]'
  >
    {currentQuestion < totalQuestions - 1 ? (
      <>
        NEXT <FontAwesomeIcon icon={faCaretRight} />
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
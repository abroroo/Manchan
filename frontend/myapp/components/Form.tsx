import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import AddressFinder from './AddressFinder';
import { motion } from 'framer-motion';
import "react-datepicker/dist/react-datepicker.css";
import Image from 'next/image';
import ko from "date-fns/locale/ko"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faCaretRight, faCaretLeft, faWallet, faBuilding, faChair, faCalendarDays, faFileContract, faPerson, faSackDollar, faWonSign, faUsers, faUserGroup, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { setHours, setMinutes } from 'date-fns'; // Import the functions
import ConfettiExplosion from 'react-confetti-explosion';
import { PartyPopper, Users, Wallet } from 'lucide-react';

interface ChildComponentProps {
  eventTypeOther: string;
    onButtonBackgroundChange: (background: string, eventType: string, currentQuestion: number, fomrData: any) => void;
    
  }





const Form = ({ onButtonBackgroundChange, eventTypeOther }: ChildComponentProps) => {


  // vars to store form data, not sure if needed

  const [eventDate, setEventDate] = useState<Date | null>(new Date());
  const [eventAddress, setEventAddress] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [customerMessage, setCustomerMessage] = useState('');
  const [eventVenue, setEventVenue] = useState('');
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


































// Number People Range Input Handling

const [sliderPeopleNum, setSliderPeopleNum] = useState(0);
const [sliderBudgetVal, setSliderBudgetNum] = useState(0);
  // Calculate the position of the icon based on sliderValue
  const iconPositionForPeopleNum = {
    left: `${(sliderPeopleNum / 1000) * 94}%`, // Adjust this based on your layout
  };

const iconPositionForBudget = {
  left: `${(sliderBudgetVal / 150000) * 100}%`, // Adjust this based on your layout
}


  // Handle changes in radio inputs and update the formData state
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData : any) => ({ ...prevFormData, [name]: value }));
    if (name === 'people_count'){
      setSliderPeopleNum(parseInt(value))
    } else if (name === 'meal_cost'){
      setSliderBudgetNum(parseInt(value))
    } else if (name === 'event_place'){
      setEventVenue(value)
    } else if (name === 'name'){
      setCustomerName(value)
    }

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
  
      






    







      const [phoneNumberError, setPhoneNumberError] = useState('');

      const validatePhoneNumber = (value: any) => {
        const phoneNumberRegex = /\d{11}$/;
    
        if (phoneNumberRegex.test(value)) {
          setPhoneNumberError('완벽해요!');
          return value;
        } else if (value === '') { 
          setPhoneNumberError('');
        } else {
          setPhoneNumberError('11개의 숫자만 입력하십시오');
          return formData.phone_number; // Return the previous value if the new value doesn't pass the checks
        }
      };
    
      const handlePhoneNumberChange = (event: any) => {
        const { name, value } = event.target;
    
        // Call the validation function and set the phoneNumber value
        const validatedPhoneNumber = validatePhoneNumber(value);
        setFormData((prevFormData: any) => ({ ...prevFormData, [name]: validatedPhoneNumber }));
        setPhoneNumber(validatedPhoneNumber);
      };










  // Animation for the checkboxes in the all questions exept the first one
const checkboxAnimationsGeneral = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.2,
    },
  };

  

  const checkboxAnimationsSecondary = {
    scale: [1, 1.2, 1],
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
  







const [sliderBudgetValStart, setSliderBudgetValStart] = useState(0);
  // const [sliderBudgetValEnd, setSliderBudgetValEnd] = useState(100000); // Initial end value

  // Calculate the position of the icons based on slider values
  const iconPositionStart = {
    left: `${(sliderBudgetValStart / 100000) * 105}%`, // Adjust this based on your layout
  };

  // const iconPositionEnd = {
  //   left: `${(sliderBudgetValEnd / 80000) * 78}%`, // Adjust this based on your layout
  // };

  // Handle changes in range inputs
  const handleStartInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSliderBudgetValStart(parseInt(value))
    setSliderBudgetNum(parseInt(value));

    // // Ensure that the start value is less than or equal to the end value
    // if (parseInt(value) >= sliderBudgetValEnd) {
    //   setSliderBudgetValEnd(parseInt(value) + 5000); // Adjust the step value as needed
    // }
  };













  // background chnage Event

  const [selectedEvent, setSelectedEvent] = useState("");
  const [buttonBackground, setButtonBackground] = useState("");

  useEffect(() => {
    // Initialize the buttonBackground state on the client-side
    let initialButtonBackground = "#F1F5F9EEE";
    if (selectedEvent === "wedding") initialButtonBackground = "#F25287";
    else if (selectedEvent === "festival") initialButtonBackground = "#7C3AED";
    else if (selectedEvent === "business") initialButtonBackground = "#2563EB";
    else if (selectedEvent === "public") initialButtonBackground = "#047857";
    else if (selectedEvent === "birthday") initialButtonBackground = "#9D174D";
    else if (selectedEvent === "fingerFood") initialButtonBackground = "#F8B400";
    else if (selectedEvent === "steak") initialButtonBackground = "#FE0000";
    else if (selectedEvent !== `${eventTypeOther}`) initialButtonBackground = "#C05621";
    setButtonBackground(initialButtonBackground);
    onButtonBackgroundChange(initialButtonBackground, selectedEvent, currentQuestion, formData);
    if (currentQuestion === 9){
      setIsExploding(true)
   } else {
     setIsExploding(false)
   }



   
  }, [selectedEvent, currentQuestion]);

  
  
  
  
  const handleCheckboxChange = (value: string) => {
    setSelectedEvent(value);

    // Set the selected event and pass the buttonBackground value to the parent
    let updatedButtonBackground = "#F1F5F9eee";
    if (value === "wedding") updatedButtonBackground = "#F25287";
    else if (value === "festival") updatedButtonBackground = "#7C3AED";
    else if (value === "business") updatedButtonBackground = "#2563EB";
    else if (value === "public") updatedButtonBackground = "#047857";
    else if (value === "birthday") updatedButtonBackground = "#9D174D";
    else if (value === "fingerFood") updatedButtonBackground = "#F8B400";
    else if (value === "steak") updatedButtonBackground = "#FE0000";
    else if (value !== `${eventTypeOther}`) updatedButtonBackground = "#C05621";

    setButtonBackground(updatedButtonBackground);

    // Call the callback function from the parent with the updated buttonBackground value
    //onButtonBackgroundChange(updatedButtonBackground, selectedEvent);
  };














 // Update formData whenever eventAddress changes
 useEffect(() => {
  setFormData((prevFormData: any) => ({
    ...prevFormData,
    address: eventAddress,
    tool: selectedAccesories,
    event_type: eventTypeOther || selectedEvent,
    date_rigistered: currentDate,
    event_time: eventDate,
    meal_cost: sliderBudgetVal,
    event_place: eventVenue,
    name: customerName,
    phone_number: phoneNumber,
    message: customerMessage
  }));

}, [eventAddress,  selectedAccesories, selectedEvent, currentDate, eventDate, sliderBudgetVal, eventVenue, customerName, phoneNumber, customerMessage]);

 // Initialize state to store the selected options for each question
 const [formData, setFormData] = useState<any>({
   // initial date value
  address: eventAddress,
  tool: selectedAccesories
});





// Assuming eventTime is in the format "2023-10-19T20:00:00.000Z"
const eventTime = new Date(formData.event_time);
const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' } as Intl.DateTimeFormatOptions;

// as Month Day, hour:minute 
const formattedEventTime = eventTime.toLocaleString('ko-KR', options);








  return (<>
  

          <form className='w-full  h-full  bg-opacity-[0.98] p-10 md:p-32  flex items-center justify-center flex-col overflow-y-scroll ' onSubmit={handleSubmit}>


{/* Intro to Form */}

{currentQuestion === 0 && (
  <div className='flex flex-col items-center justify-center'>
     <h1 className='font-semibold font-kr text-[1rem] lg:text-[22px] flex justify-center items-center'><PartyPopper style={{color: buttonBackground}}className='h-9 w-9 mr-2' /> 어떤 행사를 계획하고 계십니까?
</h1>
  

<div className='flex flex-wrap  justify-between mt-5 md:mt-4'>

    <motion.div 
    whileTap={checkboxAnimations}
    className='event_range_wrapper w-20 h-20 md:w-32 md:h-32 relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg cursor-pointer peer-checked:border-[#F25287] peer-checked:text-[#F25287] hover:text-[#F25287] hover:bg-gray-50 
    text-[12px] md:text-[15px] select-none pl-[6px] pt-[4px]'>
      <input type="checkbox"
        value="wedding"
        id='wedding'
        checked={selectedEvent === 'wedding'}
        onChange={() => handleCheckboxChange('wedding')}
        className=''
        style={{ accentColor: buttonBackground  }}
      />
      <label htmlFor="wedding" className='absolute inset-0 flex flex-col items-center justify-center '>
      
      <Image width="54" height="54" src="/images/icons/birthday.png" alt="wedding" className='mb-2 w-10 h-10 md:h-[54px] md:w-[54px]'/>
      가족 개인행사
      </label>
    </motion.div>

   
        <motion.div
        whileTap={checkboxAnimations}
         className='event_range_wrapper w-20 h-20 md:w-32 md:h-32 relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg cursor-pointer peer-checked:border-[#2563EB] peer-checked:text-[#2563EB] hover:text-[#2563EB] hover:bg-gray-50 text-[12px] md:text-[15px] select-none pl-[6px] pt-[4px]'>
        <input 
         style={{ accentColor: buttonBackground }}
         type='checkbox' 
        value='business' 
        id='business'
        checked={selectedEvent === 'business'} 
        onChange={() => handleCheckboxChange('business')} className='flex-start' />
          <label htmlFor="business" className="absolute inset-0 flex flex-col items-center justify-center ">
          <Image width="54" height="54" src="/images/icons/bussiness.png" alt="business" className='mb-2 h-11 w-11 md:h-[54px] md:w-[54px]'/>
          기업 이벤트
          </label>
        </motion.div>

        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-20 h-20 md:w-32 md:h-32 relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg  cursor-pointer peer-checked:border-[#047857] peer-checked:text-[#047857] hover:text-[#047857] hover:bg-gray-50 text-[12px] md:text-[15px] select-none pl-[6px] pt-[4px]'>
        <input  style={{ accentColor: buttonBackground }} type='checkbox' value='public' id='public' checked={selectedEvent === 'public'} onChange={() => handleCheckboxChange('public')} className='flex-start' />
          <label htmlFor="public" className="absolute inset-0 flex flex-col items-center justify-center ">
          <Image width="54" height="54" src="/images/icons/public.png" alt="public" className='mb-2 h-10 w-10 md:h-[54px] md:w-[54px]'/>
          사회 단체행사
          </label>
        </motion.div>


        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-20 h-20 md:w-32 md:h-32 relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg  cursor-pointer peer-checked:border-[#7C3AED] peer-checked:text-[#7C3AED] hover:text-[#7C3AED] hover:bg-gray-50 text-[12px] md:text-[15px] select-none pl-[6px] pt-[4px]'>
            <input style={{ accentColor: buttonBackground, alignSelf: 'flex-start' }} type='checkbox' value='festival' id='festival' checked={selectedEvent === 'festival'} onChange={() => handleCheckboxChange('festival')}  />
            <label htmlFor="festival" className="absolute inset-0 flex flex-col items-center justify-center">
            <Image width="64" height="64" src="/images/icons/festival.png" alt="festival" className='h-10 w-10 md:h-[64px] md:w-[64px]'/>
            기관, 축제등
            </label>
        </motion.div>


        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-20 h-20 md:w-32 md:h-32 relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg  cursor-pointer peer-checked:border-[#9D174D] peer-checked:text-[#9D174D] hover:text-[#9D174D] hover:bg-gray-50 text-[12px] md:text-[15px] select-none pl-[6px] pt-[4px]'>
        <input  style={{ accentColor: buttonBackground }} type='checkbox' value='birthday' id='birthday' checked={selectedEvent === 'birthday'} onChange={() => handleCheckboxChange('birthday')} className='flex-start' />
          <label htmlFor="birthday" className="absolute inset-0 flex flex-col items-center justify-center ">
          <Image width="54" height="54" src="/images/icons/wedding.png" alt="birthday" className='mb-2 h-10 w-10 md:h-[54px] md:w-[54px]'/>
          <span className='flex'>
          스몰웨딩<span className='hidden md:block'>, 야외결혼</span></span>
          </label>
        </motion.div>


        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-20 h-20 md:w-32 md:h-32 relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg  cursor-pointer peer-checked:border-[#FE0000] peer-checked:text-[#FE0000] hover:text-[#FE0000] hover:bg-gray-50 text-[12px] md:text-[15px] select-none pl-[6px] pt-[4px]'>
            <input style={{ accentColor: buttonBackground, alignSelf: 'flex-start' }} 
            type='checkbox' value='steak' id='steak' 
            checked={selectedEvent === 'steak'} 
            onChange={() => handleCheckboxChange('steak')}  />
            <label htmlFor="steak" className="absolute inset-0 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FE0000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-beef mb-2 h-10 w-10 md:h-[48px] md:w-[48px]"><circle cx="12.5" cy="8.5" r="2.5"/><path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"/><path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"/></svg>
            스테이크 행사
            </label>
        </motion.div>


        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-20 h-20 md:w-32 md:h-32 relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg  cursor-pointer peer-checked:border-[#F8B400] peer-checked:text-[#F8B400] hover:text-[#F8B400] hover:bg-gray-50 text-[12px] md:text-[15px] select-none pl-[6px] pt-[4px]'>
            <input style={{ accentColor: buttonBackground, alignSelf: 'flex-start' }} 
            type='checkbox' value='fingerFood' 
            id='fingerFood' 
            checked={selectedEvent === 'fingerFood'} 
            onChange={() => handleCheckboxChange('fingerFood')}  />
            <label htmlFor="fingerFood" className="absolute inset-0 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F8B400" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dessert mb-2 h-10 w-10 md:h-[48px] md:w-[48px]"><circle cx="12" cy="2" r="1"/><path d="M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"/><path d="M3.2 14.8a9 9 0 0 0 17.6 0"/></svg>
            핑거푸드
            </label>
        </motion.div>


       

        <motion.div 
        whileTap={checkboxAnimations}
        className='event_range_wrapper w-20 h-20 md:w-32 md:h-32 relative m-1 md:m-2 xl:m-2 text-[#49111c] border rounded-lg  cursor-pointer peer-checked:border-[#C05621] peer-checked:text-[#C05621] hover:text-[#C05621] hover:bg-gray-50 text-[12px] md:text-[15px] select-none pl-[6px] pt-[4px]'>
        <input  style={{ accentColor: buttonBackground }} type='checkbox' id='other'  checked={selectedEvent === ''} onChange={(e) => handleCheckboxChange(e.target.value)} className='flex-start' />
          <label htmlFor="other" className="absolute inset-0 flex flex-col items-center justify-center ">
          <Image width="54" height="54" src="/images/icons/other.png" alt="birthday" className='mb-2 h-10 w-10 md:h-[54px] md:w-[54px]'/>
          키타 행사
          </label>
        </motion.div>
      
    </div>

<div className='flex items-center justify-center w-full'>


   

<motion.button

 style={ selectedEvent !== "" || eventTypeOther !== "" ? { background: buttonBackground, color: "#fff" } : { background: '#F1F5F9', color: "#fff", border: '1px solid #fff'}}
 disabled={selectedEvent !== "" || eventTypeOther !== "" ? false : true}
 onClick={handleNext} 
 type='submit'
 className=' w-[40%] md:w-[15%] h-[41px] text-md py-2  tracking-wider rounded-lg border text-[#49111c] focus:outline-none focus:bg-blue mt-5 max-w-sm  text-[14px] md:text-[16px] bg-[#900C3F] font-semibold'
 draggable="false"
>

   <>
     다음 <FontAwesomeIcon icon={faCaretRight} />
   </>

</motion.button>

</div>
    </div>

    )}


{/* Number of Attendees */}
{currentQuestion === 1 && (
        <div className=" w-full mx-auto ">
          <motion.h4 
          className="font-semibold font-kr text-[0.99rem] lg:text-[22px] mb-5 flex items-center justify-center"
          initial={{ x: -200, opacity: 0}}
          whileInView={{ x: 0, opacity: 1}}
          transition={{ duration: 1,  ease: [0.25, 1, 0.5, 1] }}
          ><FontAwesomeIcon icon={faUserGroup} style={{color: buttonBackground}}className='h-8 w-8 mr-2' />행사 참석 예상 인원을 선택해주세요</motion.h4>

<div 
className='relative mt-10'>
<motion.div 
 id="tickmarks" style={iconPositionForPeopleNum} className='w-24 absolute transform -translate-x-[39%]  text-center '>
  <FontAwesomeIcon style={{color: buttonBackground}} icon={faPerson} className='w-9 h-9' />
  <div className='flex items-center justify-center font-semibold text-[18px]'> {sliderPeopleNum} </div>
  </motion.div>


<motion.div 
initial={{ x: -100, opacity: 0}}
whileInView={{ x: 0, opacity: 1}}
transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
className='flex justify-center items-center'><motion.input 
    style={{ accentColor: buttonBackground , }}
    type="range"  
    id="people_num"  
    min="0" 
    max="1000"  
    step="10" 
    className=" bg-slate-200  w-full h-[1.5px] mt-20 mb-10 cursor-pointer" 
    value={sliderPeopleNum} 
    required  
    name="people_count" 
    onChange={handleInputChange} 
    //</div>list='people_count_list'
    >
    </motion.input><p className='font-bold text-[20px] transform translate-x-4 -translate-y-1.5'>명</p></motion.div>

{/* 
    <datalist id="people_count_list" className="list-none absolute top-[50%] left-0 w-[96%] h-1">
      <option className="w-2 h-1 rounded-full  bg-[#49111c] " value="0"></option>
      <option className="w-2 h-1 rounded-full  bg-[#49111c] " value="100"></option>
      <option className="w-2 h-1 rounded-full  bg-[#49111c] " value="200"></option>
      <option value="300"></option>
      <option value="400"></option>
      <option value="500"></option>
      <option value="600"></option>
      <option value="700"></option>
      <option value="800"></option>
      <option value="900"></option>
      <option value="1000"></option>
      </datalist> */}
    
</div>
   
<div className='flex items-center justify-center'>
   <motion.button
  // initial={{ x: -10}}
  // whileInView={{ x: 0}}
  // transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
    type='button'
    className='w-[30%] md:w-[10%] h-[40px] text-md py-2 border text-[#49111c] hover:bg-[#6161ff]/10  tracking-wider rounded-lg  focus:outline-none focus:bg-blue mt-5 max-w-md  text-[14px] md:text-[16px] mr-2 border-slate-100'
    onClick={() => {setCurrentQuestion(currentQuestion - 1); setSelectedEvent('')}}
  >
    
      <>
      <FontAwesomeIcon icon={faCaretLeft} />
      </> 
  </motion.button>


  <motion.button
//  initial={{ x: 20}}
//  whileInView={{ x: 0}}
//  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
 style={ sliderPeopleNum !== 0 ? { background: buttonBackground, color: "#fff", border: '1px solid #fff' } : { background: '#F1F5F9', color: "#fff", border: '1px solid #fff'}}
 disabled={sliderPeopleNum === 0 ? true : false}
 onClick={handleNext} 
 type='submit'
 className=' w-[40%] md:w-[15%] h-[42px] text-md py-2  tracking-wider rounded-lg border text-[#49111c] focus:outline-none focus:bg-blue mt-5 max-w-sm  text-[14px] md:text-[16px] bg-[#900C3F] font-semibold'
 draggable="false"
>

   <>
     다음 <FontAwesomeIcon icon={faCaretRight} />
   </>

</motion.button>
   </div>
         
        </div>
   
  )}



{/* Event Budget */}

{currentQuestion === 2 && (
 
 <div className=' mx-auto w-full '>
   <motion.h4 
   initial={{ x: -100, opacity: 0}}
   whileInView={{ x: 0, opacity: 1}}
   transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
   className='font-semibold font-kr text-lg lg:text-[22px] mb-5 flex items-center justify-center'><FontAwesomeIcon icon={faSackDollar} style={{color: buttonBackground}}className='h-8 w-8 mr-2' />식사 요청 예정금액 - 1인당</motion.h4>



<div className="relative mt-10">
      <div
        id="tickmarks"
        style={iconPositionStart}
        className="absolute transform -translate-x-[80%] md:-translate-x-[120%] justify-center items-center flex"
      >
        
        <FontAwesomeIcon
          style={{ color: buttonBackground }}
          icon={faWonSign}
          className="w-4 h-4 mr-[6px]"
        />
        <div className="flex flex-row items-center justify-end font-semibold text-[14px] md:text-[17px]   ">
          {(sliderBudgetValStart).toLocaleString('ko-KR')}
        </div>
      </div>


      <motion.input
        style={{ accentColor: buttonBackground }}
        type="range"
        id="budget_num_start"
        min="10000"
        max="100000"
        step="5000"
        className="bg-slate-200 w-full h-[1.5px] mt-16 mb-10 cursor-pointer"
        value={sliderBudgetValStart}
        required
        name="meal_cost"
        list="meal_budget_list"
        onChange={handleStartInputChange}
      />


      <datalist id="meal_budget_list">
      <option value="10000"></option>
      <option value="15000"></option>
      <option value="20000"></option>
      <option value="25000"></option>
      <option value="30000"></option>
      <option value="35000"></option>
      <option value="40000"></option>
      <option value="45000"></option>
      <option value="50000"></option>
      <option value="55000"></option>
      <option value="60000"></option>
      <option value="65000"></option>
      <option value="70000"></option>
      <option value="75000"></option>
      <option value="80000"></option>
      <option value="85000"></option>
      <option value="90000"></option>
      <option value="95000"></option>
      <option value="100000"></option>
      </datalist>
    </div>


    <div className='flex items-center justify-center'>
   <motion.button
  // initial={{ x: -10}}
  // whileInView={{ x: 0}}
  // transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
    type='button'
    className='w-[30%] md:w-[10%] h-[40px] text-md py-2 border text-[#49111c] hover:bg-[#6161ff]/10  tracking-wider rounded-lg  focus:outline-none focus:bg-blue mt-5 max-w-md  text-[14px] md:text-[16px] mr-2 border-slate-100'
    onClick={() => {setCurrentQuestion(currentQuestion - 1); setSliderPeopleNum(0)}}
  >
    
      <>
      <FontAwesomeIcon icon={faCaretLeft} />
      </> 
  </motion.button>


  <motion.button
//  initial={{ x: 20}}
//  whileInView={{ x: 0}}
//  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
 style={ sliderBudgetVal !== 0 ? { background: buttonBackground, color: "#fff", border: '1px solid #fff'} : { background: '#F1F5F9', color: "#fff", border: '1px solid #fff' }}
 onClick={handleNext} 
 type='submit'
 disabled={sliderBudgetVal === 0 ? true : false}
 className=' w-[40%] md:w-[15%] h-[42px] text-md py-2  tracking-wider rounded-lg border text-[#49111c] focus:outline-none focus:bg-blue mt-5 max-w-sm  text-[14px] md:text-[16px] bg-[#900C3F] font-semibold'
 draggable="false"
>

   <>
     다음 <FontAwesomeIcon icon={faCaretRight} />
   </>

</motion.button>
   </div>

 </div>
)}





        {/* Event Venue */}
        {currentQuestion === 3 && (
  <div className=" w-full mx-auto ">
    <motion.h4 
    initial={{ x: -100, opacity: 0}}
    whileInView={{ x: 0, opacity: 1}}
    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
    className="font-semibold font-kr text-[1rem] lg:text-[22px] mb-5 flex items-center justify-center"><FontAwesomeIcon icon={faBuilding} style={{color: buttonBackground}}className='h-9 w-9 mr-2 text-[#49111c]' />행사 예정 장소는 어디인가요?</motion.h4>

              <div className='flex flex-wrap justify-center'>
            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.06, ease: [0.25, 1, 0.5, 1]  }}
             className="flex items-center justify-center border  text-[#49111c] w-20 h-20 md:w-28 md:h-28 relative m-1 md:m-2 xl:m-4 rounded-lg   hover:bg-indigo-50 cursor-pointer ">
                  <input style={{ accentColor: buttonBackground }} type='radio' required name="event_place" value='실내' onChange={handleInputChange} />
                  <span className="pl-2 text-[14px] md:text-[17px]">실내</span>
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.04, ease: [0.25, 1, 0.5, 1]  }}
             className="flex items-center justify-center border  text-[#49111c] w-20 h-20 md:w-28 md:h-28 relative m-1 md:m-2 xl:m-4 rounded-lg   hover:bg-indigo-50 cursor-pointer ">
                <input style={{ accentColor: buttonBackground }} type='radio' required  name="event_place"  value='야외' onChange={handleInputChange}/>
                
                <span className="pl-2 text-[14px] md:text-[17px]">야외</span>
                
                
            </motion.label>

            <motion.label
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5,  delay:0.02 , ease: [0.25, 1, 0.5, 1]  }}
            className="flex items-center justify-center border  text-[#49111c] w-20 h-20 md:w-28 md:h-28 relative m-1 md:m-2 xl:m-4 rounded-lg   hover:bg-indigo-50 cursor-pointer ">
                <input style={{ accentColor: buttonBackground }} type='radio' required  name="event_place" value='체육관' onChange={handleInputChange} />
                <span className="pl-2 text-[14px] md:text-[17px]">체육관</span>
                
                
                
            </motion.label>

            <motion.label
             whileTap={checkboxAnimationsGeneral} 
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0, ease: [0.25, 1, 0.5, 1]  }}
            className="flex items-center justify-center border  text-[#49111c] w-20 h-20 md:w-28 md:h-28 relative m-1 md:m-2 xl:m-4 rounded-lg   hover:bg-indigo-50 cursor-pointer ">
                <input style={{ accentColor: buttonBackground }} type='radio' required  name="event_place" value='연회장' onChange={handleInputChange}/>
                <span className="pl-2 text-[14px] md:text-[17px]">연회장</span>
                
               
                
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.06, ease: [0.25, 1, 0.5, 1]  }}
             className="flex items-center justify-center border  text-[#49111c] w-20 h-20 md:w-28 md:h-28 relative m-1 md:m-2 xl:m-4 rounded-lg   hover:bg-indigo-50 cursor-pointer ">
                  <input style={{ accentColor: buttonBackground }} type='radio' required name="event_place" value='호텔' onChange={handleInputChange}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">호텔</span> 
                 
                  
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.04, ease: [0.25, 1, 0.5, 1]  }}
               className="flex items-center justify-center border  text-[#49111c] w-20 h-20 md:w-28 md:h-28 relative m-1 md:m-2 xl:m-4 rounded-lg   hover:bg-indigo-50 cursor-pointer ">
                  <input style={{ accentColor: buttonBackground }} type='radio' required name="event_place" value='미정' onChange={handleInputChange}/>
                  <span className="pl-2 text-[14px] md:text-[17px]">미정</span>
          
                  
              </motion.label>

             

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.02,  ease: [0.25, 1, 0.5, 1] }}
               className="flex items-center justify-center border  text-[#49111c] w-20 h-20 md:w-28 md:h-28 relative m-1 md:m-2 xl:m-4 rounded-lg   hover:bg-indigo-50 cursor-pointer">
            <input
              type='radio' required
              name="event_place"
              value="other"
              onChange={handleRadioChange}
              placeholder='직접 입력'
              style={{ accentColor: buttonBackground }}
            />
            <span className="pl-2 text-[14px] md:text-[17px]">기타</span>
          </motion.label>

          {showInput == 'true' && (
            <motion.div 
            initial={{ x: -100, opacity: 0}}
              whileInView={{ x: 0, opacity: 1}}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="mt-3 flex items-end justify-center">
              <input 
              type="text" className="block w-full h-10 mt-1 text-[#49111c] my-2 focus:outline-none  pb-0 text-[14px] md:text-[17px] border-b-[1px] border-slate-200 focus:border-[#49111c] ml-4" name='event_place' placeholder='명기해주세요' onChange={handleInputChange} />
            </motion.div>
          )}

        </div>


        <div className='flex items-center justify-center'>
   <motion.button
    type='button'
    className='w-[30%] md:w-[10%] h-[40px] text-md py-2 border text-[#49111c] hover:bg-[#6161ff]/10  tracking-wider rounded-lg  focus:outline-none focus:bg-blue mt-5 max-w-md  text-[14px] md:text-[16px] mr-2 border-slate-100'
    onClick={() => {setCurrentQuestion(currentQuestion - 1); setSliderBudgetNum(0); setSliderBudgetValStart(0)}}
  >
      <>
      <FontAwesomeIcon icon={faCaretLeft} />
      </> 
  </motion.button>


  <motion.button

 style={ eventVenue !== "" ? { background: buttonBackground, color: "#fff", border: '1px solid #fff' } : { background: '#F1F5F9', color: "#fff", border: '1px solid #fff' }}
 onClick={handleNext} 
 type='submit'
 disabled={eventVenue === "" ? true : false}
 className=' w-[40%] md:w-[15%] h-[42px] text-md py-2  tracking-wider rounded-lg border text-[#49111c] focus:outline-none focus:bg-blue mt-5 max-w-sm  text-[14px] md:text-[16px] bg-[#900C3F] font-semibold'
 draggable="false"
>
   <>
     다음 <FontAwesomeIcon icon={faCaretRight} />
   </>
</motion.button>
   </div>
  </div>


        )}

  


  {/* Event accessory */}

   {currentQuestion === 4 && (
  <div className=" w-full  mx-auto mb-0 md:m-0 ">
    <motion.h4 
     initial={{ x: -100, opacity: 0}}
     whileInView={{ x: 0, opacity: 1}}
     transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
     className="font-semibold font-kr text-lg lg:text-[22px] mb-5 flex items-center justify-center"><FontAwesomeIcon icon={faChair} style={{color: buttonBackground}} className='h-9 w-9 mr-2'/>필요한 품목을 고르세요</motion.h4>

              <div className='flex flex-wrap justify-center'>
            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
             className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16  md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointer ">
                  <input style={{ accentColor: buttonBackground }} type='checkbox' required name="tool" value='사각 테이블' onChange={handleCheckboxAccesories}/>
                  
                <span className="pl-1 text-[12px] md:text-[15px]">사각 테이블</span>
                
                
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.04, ease: [0.25, 1, 0.5, 1] }}
             className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16  md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointer ">
                <input style={{ accentColor: buttonBackground }} type='checkbox' required  name="tool" value='원탁테이블' onChange={handleCheckboxAccesories}/>
                
                <span className="pl-1 text-[12px] md:text-[15px]">원탁테이블</span>
                
                
                
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
             className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16  md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointer ">
                <input style={{ accentColor: buttonBackground }} type='checkbox' required  name="tool" value='스텐딩 테이블' onChange={handleCheckboxAccesories}/>
                
                <span className="pl-1 text-[12px] md:text-[15px]">스텐딩 <br />테이블</span>
                
               
                
            </motion.label>

            <motion.label
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0, ease: [0.25, 1, 0.5, 1] }}
             className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16  md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointer ">
                <input style={{ accentColor: buttonBackground }} type='checkbox' required  name="tool" value='의자' onChange={handleCheckboxAccesories}/>
                
                <span className="pl-1 text-[12px] md:text-[15px]">의자</span>
                
               
                
            </motion.label>

            <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
             className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16  md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointer ">
                  <input style={{ accentColor: buttonBackground }} type='checkbox' required name="tool" value='의자커버' onChange={handleCheckboxAccesories}/>
                  <span className="pl-1 text-[12px] md:text-[15px]">의자커버</span> 
                
              </motion.label>

              <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.04, ease: [0.25, 1, 0.5, 1] }}
             className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16  md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointerr ">
                  <input style={{ accentColor: buttonBackground }} type='checkbox' required name="tool" value='자바라 텐트 (3m * 6m)' onChange={handleCheckboxAccesories}/>
                  <span className="pl-1 text-[12px] md:text-[15px]">자바라 텐트 (3m * 6m)</span> 
                
              </motion.label>

              <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
             className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16  md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointer ">
                  <input style={{ accentColor: buttonBackground }} type='checkbox' required name="tool" value='몽골텐트 (5m * 5m)' onChange={handleCheckboxAccesories}/>
                  <span className="pl-1 text-[12px] md:text-[15px]">몽골텐트 (5m * 5m)</span> 
                
              </motion.label>

              <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0, ease: [0.25, 1, 0.5, 1] }}
             className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16 md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointer ">
                  <input style={{ accentColor: buttonBackground }} type='checkbox' required name="tool" value='단상' onChange={handleCheckboxAccesories}/>
                  <span className="pl-1 text-[12px] md:text-[15px]">단상</span> 
                
              </motion.label>

              <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
             className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16 md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointer  ">
                  <input style={{ accentColor: buttonBackground }} type='checkbox' required name="tool" value='기본음향' onChange={handleCheckboxAccesories}/>
                  <span className="pl-1 text-[12px] md:text-[15px]">기본음향</span> 
                
              </motion.label>

              <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
             className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16 md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointer  ">
                  <input style={{ accentColor: buttonBackground }} type='checkbox' required name="tool" value='무대' onChange={handleCheckboxAccesories}/>
                  <span className="pl-1 text-[12px] md:text-[15px]">무대</span> 
                
              </motion.label>


              <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
             className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16 md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointer  ">
                  <input style={{ accentColor: buttonBackground }} type='checkbox' required name="tool" value='진행' onChange={handleCheckboxAccesories}/>
                  <span className="pl-1 text-[12px] md:text-[15px]">진행</span> 
                
              </motion.label>

              <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
             className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16 md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointer  ">
                  <input style={{ accentColor: buttonBackground }} type='checkbox' required name="tool" value='마스터 밴드' onChange={handleCheckboxAccesories}/>
                  <span className="pl-1 text-[12px] md:text-[15px]">마스터 밴드</span> 
                
              </motion.label>

              <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
             className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16 md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointer  ">
                  <input style={{ accentColor: buttonBackground }} type='checkbox' required name="tool" value='플래카드' onChange={handleCheckboxAccesories}/>
                  <span className="pl-1 text-[12px] md:text-[15px]">플래카드</span> 
                
              </motion.label>

              <motion.label 
             whileTap={checkboxAnimationsGeneral}
             initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.06, ease: [0.25, 1, 0.5, 1] }}
             className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16 md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointer  ">
                  <input style={{ accentColor: buttonBackground }} type='checkbox' required name="tool" value='필요없는' onChange={handleCheckboxAccesories}/>
                  <span className="pl-1 text-[12px] md:text-[15px]">필요없는</span> 
                
              </motion.label>

              <motion.label 
               whileTap={checkboxAnimationsGeneral}
               initial={{ x: -100, opacity: 0}}
               whileInView={{ x: 0, opacity: 1}}
               transition={{ duration: 0.5, delay: 0.04, ease: [0.25, 1, 0.5, 1] }}
               className="flex items-center justify-start md:justify-center p-1 border  text-[#49111c] w-[85px] h-16 md:w-28 md:h-20 relative m-1 md:m-2 xl:m-3 rounded-lg   hover:bg-indigo-50 cursor-pointer">
            <input
              type='radio' required
              name="tool"
              value="other"
              onChange={handleRadioChange}
              placeholder='직접 입력'
              style={{ accentColor: buttonBackground }}
            />
            <span className="pl-1 text-[14px] md:text-[17px]">기타</span>
          </motion.label>

          {showInput == 'true' && (
            <div className="mt-3 flex items-end justify-center pb-2">
              <input type="text" className="block w-full h-10 mt-1 text-[#49111c] my-2 focus:outline-none  pb-0 text-[14px] md:text-[17px] border-b-[1px] border-slate-200 focus:border-[#49111c] ml-4"  placeholder='명기해주세요' name='tool' onChange={handleCheckboxAccesories}/>
            </div>
          )}

        </div>

        <div className='flex items-center justify-center'>
   <motion.button
    type='button'
    className='w-[30%] md:w-[10%] h-[40px] text-md py-2 border text-[#49111c] hover:bg-[#6161ff]/10  tracking-wider rounded-lg  focus:outline-none focus:bg-blue mt-5 max-w-md  text-[14px] md:text-[16px] mr-2 border-slate-100'
    onClick={() => {setCurrentQuestion(currentQuestion - 1); setEventVenue("")}}
  >
      <>
      <FontAwesomeIcon icon={faCaretLeft} />
      </> 
  </motion.button>


  <motion.button

 style={ selectedAccesories.length !== 0 ? { background: buttonBackground, color: "#fff", border: '1px solid #fff' } : { background: '#F1F5F9', color: "#fff", border: '1px solid #fff' }}
 onClick={handleNext} 
 type='submit'
 disabled={selectedAccesories.length === 0 ? true : false}
 className=' w-[40%] md:w-[15%] h-[42px] text-md py-2  tracking-wider rounded-lg border text-[#49111c] focus:outline-none focus:bg-blue mt-5 max-w-sm  text-[14px] md:text-[16px] bg-[#900C3F] font-semibold'
 draggable="false"
>
   <>
     다음 <FontAwesomeIcon icon={faCaretRight} />
   </>
</motion.button>
   </div>
  </div>


        )}





       {/* Event Date */}
       {currentQuestion === 5 && (
        <div className='mb-10 md:m-0'>
           <motion.h4 
            initial={{ x: -100, opacity: 0}}
            whileInView={{ x: 0, opacity: 1}}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="font-semibold font-kr text-lg lg:text-[22px]  flex items-center justify-center mb-5"><FontAwesomeIcon icon={faCalendarDays} style={{color: buttonBackground}} className='h-9 w-9 mr-2' />행사 예상 시간을 선택해주세요</motion.h4>
       <motion.div 
        initial={{ x: -100, opacity: 0}}
        whileInView={{ x: 0, opacity: 1}}
        transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
        className=" w-[90%] md:w-full  flex justify-between ">
    
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

      <div className='flex items-center justify-center'>
   <motion.button
    type='button'
    className='w-[30%] md:w-[10%] h-[40px] text-md py-2 border text-[#49111c] hover:bg-[#6161ff]/10  tracking-wider rounded-lg  focus:outline-none focus:bg-blue mt-5 max-w-md  text-[14px] md:text-[16px] mr-2 border-slate-100'
    onClick={() => {setCurrentQuestion(currentQuestion - 1); selectedAccesories.length = 0}}
  >
      <>
      <FontAwesomeIcon icon={faCaretLeft} />
      </> 
  </motion.button>


  <motion.button

 style={ eventDate !== currentDate ? { background: buttonBackground, color: "#fff", border: '1px solid #fff' } : { background: '#F1F5F9', color: "#fff", border: '1px solid #fff' }}
 onClick={handleNext} 
 type='submit'
 disabled={eventDate === currentDate ? true : false}
 className=' w-[40%] md:w-[15%] h-[41px] text-md py-2  tracking-wider rounded-lg border text-[#49111c] focus:outline-none focus:bg-blue mt-5 max-w-sm  text-[14px] md:text-[16px] bg-[#900C3F] font-semibold'
 draggable="false"
>
   <>
     다음 <FontAwesomeIcon icon={faCaretRight} />
   </>
</motion.button>
   </div>
      </div>
       )}


      {/* Address of the Event */}
{currentQuestion === 6 && (
  <>
<AddressFinder setEventAddress={setEventAddress} buttonBackground={buttonBackground} />
<div className='w-full flex items-center justify-center'>
   <motion.button
    type='button'
    className='w-[30%] md:w-[10%] h-[40px] text-md py-2 border text-[#49111c] hover:bg-[#6161ff]/10  tracking-wider rounded-lg  focus:outline-none focus:bg-blue mt-5 max-w-md  text-[14px] md:text-[16px] mr-2 border-slate-100'
    onClick={() => {setCurrentQuestion(currentQuestion - 1); setEventDate(currentDate)}}
  >
      <>
      <FontAwesomeIcon icon={faCaretLeft} />
      </> 
  </motion.button>


  <motion.button

 style={ eventAddress !== '' ? { background: buttonBackground, color: "#fff", border: '1px solid #fff' } : { background: '#F1F5F9', color: "#fff", border: '1px solid #fff' }}
 onClick={handleNext} 
 type='submit'
 disabled={eventAddress === '' ? true : false}
 className=' w-[40%] md:w-[15%] h-[42px] text-md py-2  tracking-wider rounded-lg border text-[#49111c] focus:outline-none focus:bg-blue mt-5 max-w-sm  text-[14px] md:text-[16px] bg-[#900C3F] font-semibold'
 draggable="false"
>
   <>
     다음 <FontAwesomeIcon icon={faCaretRight} />
   </>
</motion.button>
   </div>
  </>
      
      

)}

      {/* Name and Phone Number */}
      {currentQuestion === 7 && (
      <div className='w-full mx-auto flex flex-col items-center justify-center'>
              <motion.h1 
              initial={{ x: -100, opacity: 0}}
              whileInView={{ x: 0, opacity: 1}}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className='text-lg lg:text-[22px] font-semibold font-kr  mb-5 flex items-center justify-center'><FontAwesomeIcon icon={faFileContract} style={{color: buttonBackground}} className='h-9 w-9 mr-2'/>연락처 정보를 입력하십시오</motion.h1>
      

      {/* Name */}
      <motion.div
      initial={{ x: -100, opacity: 0}}
      whileInView={{ x: 0, opacity: 1}}
      transition={{ duration: 0.2, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
      className='mt-10 md:w-[70%] w-full'
      >
      {/* <label htmlFor="input2" className="block text-md font-medium text-[#49111c] ">이름</label> */}
      <input className="block w-full h-10  text-[#49111c]  focus:outline-none  pb-0 text-[14px] md:text-[15px] border-b-[1px] border-slate-200 focus:border-[#49111c]" placeholder="이름" type="text" id="name" name='name' onChange={handleInputChange}
      //value={name}
      //onChange={(e) => setName(e.target.value)}
      required/>
      </motion.div>
      

      {/* Phone number */}
       <motion.div 
       initial={{ x: -100, opacity: 0}}
       whileInView={{ x: 0, opacity: 1}}
       transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
       className="mt-10 mb-7 md:w-[70%] w-full">
              {/* <label htmlFor="input2" className="block text-md font-medium text-[#49111c]">
                전화번호
              </label> */}
              
              <input
                  type="tel"
                  id="input2"
                  name='phone_number'
                  required={true}
                  className={`phone_number_input block w-full h-10 pr-3 text-[13px] focus:outline-none md:text-[15px] text-[#49111c] border-b-[1px] border-slate-200 focus:border-[#49111c]`}
                  // placeholder="전화번호 - 숫자만 입력"
                  placeholder='전화번호: 010 1234 5678'
                  //style={{'--placeholder-font-size' : '10px'}}
                  onChange={handlePhoneNumberChange}
                  pattern="^[0-9]{9,11}$" // Regular expression for 9 to 11 digits
                />

                {phoneNumberError && <p className={`${phoneNumberError === '완벽해요!' ? 'text-green-900 mt-1 text-[12px]':'text-red-500 mt-1 text-[12px]'}`}>{phoneNumberError}</p>}
                
              
            </motion.div>

            <motion.div className='w-full md:w-[70%]'>
              <input type="text" className=" w-full h-10 mt-10 text-[#49111c] my-2  focus:outline-none text-[14px] md:text-[15px] border-b-[1px] border-slate-200 focus:border-[#49111c] " placeholder="요청 사항"  name='message' onChange={handleInputChange}></input>
            </motion.div>







            <div className='w-full flex items-center justify-center'>
   <motion.button
    type='button'
    className='w-[30%] md:w-[10%] h-[40px] text-md py-2 border text-[#49111c] hover:bg-[#6161ff]/10  tracking-wider rounded-lg  focus:outline-none focus:bg-blue mt-5 max-w-md  text-[14px] md:text-[16px] mr-2 border-slate-100'
    onClick={() => {setCurrentQuestion(currentQuestion - 1); setEventAddress('')}}
  >
      <>
      <FontAwesomeIcon icon={faCaretLeft} />
      </> 
  </motion.button>


  <motion.button

 style={ customerName !== '' && phoneNumber !== '' ? { background: buttonBackground, color: "#fff", border: '1px solid #fff' } : { background: '#F1F5F9', color: "#fff", border: '1px solid #fff' }}
 onClick={handleNext} 
 type='submit'
 disabled={customerName === '' && phoneNumber === '' ? true : false}
 className=' w-[40%] md:w-[15%] h-[41px] text-md py-2  tracking-wider rounded-lg border text-[#49111c] focus:outline-none focus:bg-blue mt-5 max-w-sm  text-[14px] md:text-[16px] bg-[#900C3F] font-semibold'
 draggable="false"
>
   <>
     다음 <FontAwesomeIcon icon={faCaretRight} />
   </>
</motion.button>
   </div>
        </div>
      )}


{currentQuestion === 8 && (
  <>
  <div className='hidden xl:block'>
    <motion.div
    initial={{ x: -100, opacity: 0}}
    whileInView={{ x: 0, opacity: 1}}
    transition={{ duration: 1, type: 'spring'}}>
      <h1 className=' flex items-center justify-center text-lg font-semibold'>이벤트 세부 정보를 확인하십시오 </h1>
    </motion.div>
     <Image src={'/images/female-chef.jpg'} alt='salt-bae' width={400} height={600} />
    
  </div>
 

<div className='xl:hidden flex flex-col items-center justify-center'>
  {/* <h1 className='text-[60px] mb-10 font-[500] font-kr'>Congratulation! </h1> */}
  

   <motion.p 
initial={{ x: -100, opacity: 0}}
whileInView={{ x: 0, opacity: 1}}
transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
className='m-1 md:m-5 mb-5 text-[20px] font-kr font-bold'>이벤트 계획이 준비되었습니다!</motion.p>
<h3 className='py-1 md:py-4 mb-2 text-slate-400 text-sm'>이벤트 세부 정보를 확인하십시오 </h3>
<motion.div 
initial={{ x: -100, opacity: 0}}
whileInView={{ x: 0, opacity: 1}}
transition={{ duration: 0.2, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
className='flex flex-col justify-center items-between  font-bold w-full border shadow-md p-7  rounded text-sm'>

<div className='flex items-start justify-between'><p>이벤트 유형: </p> <span className='font-light pl-1'>{formData.event_type}</span></div>
<div className='flex items-start justify-between'><p>출석인원: </p> <span className='font-light pl-1'>{formData.people_count} 명</span></div>
<div className='flex items-start justify-between'><p>식비: </p> <span className='font-light pl-1'>{formData.meal_cost} 원 || {formData.meal_cost * formData.people_count}</span> </div>
<div className='flex items-start justify-between'> <p>이벤트 날짜: </p><span className='font-light pl-1'>{formattedEventTime}</span></div>
<div className='flex items-start justify-between'> <p>장소: </p><span className='font-light pl-1'>{formData.event_place}</span></div>
<div className='flex items-start justify-between'> <p>Tools: </p><span className='font-light pl-1'>{formData.tool.join(', ')}</span></div>
<div className='flex items-start justify-between'> <p>주소: </p><span className='font-light pl-1'>{formData.address}</span></div>
<div className='flex items-start justify-between'> <p>이름: </p><span className='font-light pl-1'>{formData.name}</span></div>
<div className='flex items-start justify-between'> <p>전화번호: </p><span className='font-light pl-1'>{formData.phone_number}</span></div>
<div className='flex items-start justify-between'> <p>추가 참고 사항: </p><span className='font-light pl-1'>{formData.message}</span></div>


</motion.div>
</div>


<div className='w-full flex items-center justify-center'>
   <motion.button
    type='button'
    className='w-[30%] md:w-[10%] h-[40px] text-md py-2 border text-[#49111c] hover:bg-[#6161ff]/10  tracking-wider rounded-lg  focus:outline-none focus:bg-blue mt-5 max-w-md  text-[14px] md:text-[16px] mr-2'
    onClick={() => {setCurrentQuestion(currentQuestion - 1); setCustomerName(''), setPhoneNumber(''), setCustomerMessage('')}}
  >
      <>
      <FontAwesomeIcon icon={faCaretLeft} />
      </> 
  </motion.button>


  <motion.button

 style={  { background: buttonBackground, color: "#fff" }}
 onClick={handleNext} 
 type='submit'
 className=' w-[40%] md:w-[20%] h-[41px] text-md py-2  tracking-wider rounded-lg border text-[#49111c] focus:outline-none focus:bg-blue mt-5 max-w-sm  text-[14px] md:text-[16px] bg-[#900C3F] font-semibold'
 draggable="false"
>
   <>
   예약하기 <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
   </>
</motion.button>
   </div>
</>

)}
      {currentQuestion === 9 && (

<motion.div 
initial={{  scale: 0.8}}
whileInView={{ scale: [1.2, 1]}}
transition={{duration: 0.3, type: "spring", stiffness: 100}}
className='text-center text-[#49111c] mb-16 flex items-center justify-center flex-col absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2'>
  <div>{isExploding && <ConfettiExplosion force={0.6} duration={2000} particleCount={70} width={800} />}</div>
<h1 className='text-4xl md:text-6xl font-semibold font-kr mb-10 w-[406px]'>감사합니다!!!</h1>

<motion.div
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.5, duration: 0.2, type: "spring", stiffness: 100}}
className='w-[400px]'>
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

  <div className={`w-full flex flex-row items-center   ${currentQuestion < 1 ? 'justify-center' : 'justify-center'} ${currentQuestion > 8 ? 'hidden' : 'flex'}`}>


  {/* {currentQuestion > 0 && ( */}
  {/* <motion.button
  initial={{ x: -10}}
  whileInView={{ x: 0}}
  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
    type='button'
    className='w-[30%] md:w-[15%] h-[46px] text-md py-2 border text-[#49111c] hover:bg-[#6161ff]/10  tracking-wider rounded-lg   focus:outline-none focus:bg-blue mt-5 max-w-md  text-[14px] md:text-[16px] mr-2'
    onClick={handlePrevious}
  >
    {currentQuestion < totalQuestions - 1 ? (
      <>
      <FontAwesomeIcon icon={faCaretLeft} />
      </> ) : ( <>
      <FontAwesomeIcon icon={faCaretLeft} />
      </> )}
  </motion.button> */}
  {/* )} */}
 {/* <motion.button
 
    style={{ background: buttonBackground, color: "#fff" }}
    onClick={handleNext} 
    type='submit'
    className=' w-[40%] md:w-[20%] h-12 text-md py-2  tracking-wider rounded-lg  border text-[#49111c] focus:outline-none focus:bg-blue mt-5 max-w-sm  text-[14px] md:text-[16px] bg-[#900C3F] font-semibold'
    draggable="false"
  >
    {currentQuestion < totalQuestions - 1 ? (
      <>
        다음 <FontAwesomeIcon icon={faCaretRight} />
      </>
    ) : (
      <>
      예약하기 <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
      </>
    )}
  </motion.button> */}

  </div>

</form>

  </>)
}

export default Form














// <div className='relative mt-10'>
// <div 
//  id="tickmarks" style={iconPositionForBudget} className='absolute transform -translate-x-[25%]  text-center '>
//       <div className='flex items-end justify-center font-semibold text-[14px]'> {sliderBudgetVal}</div>
//   <FontAwesomeIcon style={{color: buttonBackground}} icon={faWonSign} className='w-5 h-5 ml-1' />
  
//   </div>
//   <motion.input 
//     style={{ accentColor: buttonBackground , }}
//     type="range" list="meal_budget_list" id="budget_num"  min="10000" max="100000"  step="5000" className=" bg-slate-200  w-full h-[1.5px] mt-16 mb-10 cursor-pointer   " value={sliderBudgetVal} required  name="meal_cost" onChange={handleInputChange}>
//     </motion.input>
//     <datalist id="meal_budget_list">
//       <option value="10000"></option>
//       <option value="15000"></option>
//       <option value="20000"></option>
//       <option value="25000"></option>
//       <option value="30000"></option>
//       <option value="35000"></option>
//       <option value="40000"></option>
//       <option value="45000"></option>
//       <option value="50000"></option>
//       <option value="55000"></option>
//       <option value="60000"></option>
//       <option value="65000"></option>
//       <option value="70000"></option>
//       <option value="75000"></option>
//       <option value="80000"></option>
//       <option value="85000"></option>
//       <option value="90000"></option>
//       <option value="95000"></option>
//       <option value="100000"></option>
//     </datalist>
// </div>








// <motion.p 
// initial={{ x: -100}}
// whileInView={{ x: 0}}
// transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
// className='m-5 font-light'>Your event plan is ready!</motion.p>

// <motion.div 
// initial={{ x: -100}}
// whileInView={{ x: 0}}
// transition={{ duration: 0.2, delay: 0.02, ease: [0.25, 1, 0.5, 1] }}
// className='flex flex-col justify-center items-start  font-bold w-full border p-10 rounded'>
// <h3 className='py-4'>Please confirm your event details: </h3>
//   <p>Address: <span className='font-light pl-1'>{formData.address}</span></p>
//   <p>Tools: <span className='font-light pl-1'>{formData.tool.join(', ')}</span></p>
//   <p>Event Type: <span className='font-light pl-1'>{formData.event_type}</span></p>

//   <p>Event Place: <span className='font-light pl-1'>{formData.event_place}</span></p>
//   <p>Meal Cost: <span className='font-light pl-1'>{formData.meal_cost} 원</span></p>
//   <p>People Count: <span className='font-light pl-1'>{formData.people_count} 명</span></p>
//   <p>Name: <span className='font-light pl-1'>{formData.name}</span></p>
//   <p>Phone Number: <span className='font-light pl-1'>{formData.phone_number}</span></p>

// </motion.div>
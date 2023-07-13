import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko"; 
import "react-datepicker/dist/react-datepicker.css";
import AddressFinder from './AddressFinder';
import { set } from 'date-fns';



const FormPageCopy = () => {
  
  const [showInput, setShowInput] = useState<boolean>(false);
  const router = useRouter();


  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [event, setEvent] = useState('');
  const [venue, setVenue] = useState('');
  const [eventDate, setEventDate] = useState<Date | null>(new Date());
  const [eventDuration, setEventDuration] = useState('');
  const [eventAttendees, setEventAttendees] = useState('');
  const [eventBudget, setEventBudget] = useState('');
  const [eventAccessories, setEventAccessories] = useState('');
  const [eventAddress, setEventAddress] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');




// other option handling
const handleRadioChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  stateMappings: Record<string, React.Dispatch<React.SetStateAction<string>>>,
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { name, value } = e.target;

  // Update the corresponding state variable
  if (stateMappings[name]) {
    stateMappings[name](value);
  }

  // Update the showInput state based on the radio option checked or unchecked
  if (value === 'other') {
    setShowInput(true);
  } else {
    setShowInput(false);
  }
};

  
const stateMappings = {
  event: setEvent,
  venue: setVenue,
  eventDuration: setEventDuration,
  eventAttendees: setEventAttendees,
  eventBudget: setEventBudget,
  eventAccessories: setEventAccessories,
  eventAddress: setEventAddress,
  showInput: setShowInput as React.Dispatch<React.SetStateAction<string | boolean>>,
  // Add more mappings for other variables if needed
};










  const totalQuestions = 9;

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
    switch (currentQuestion) {
      case 1:
        setEvent('');
        break;
      case 2:
        setEventAttendees('');
        break;
      case 3:
        setEventBudget('');
        break;
      case 4:
        setVenue('');
        break;
      case 5:
        setEventDuration('');
        break;
      case 6:
        setEventDate(null);
        break;
      case 7:
        setEventAddress('');
        break;
      case 8:
        setName('');
        setPhoneNumber('');
        break;
      default:
        break;
    }
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    const inputEvent = formData.get('event') as string;
    const inputVenue = formData.get('venue') as string;
    const inputAttendees = formData.get('attendees') as string;
    const inputDuration = formData.get('duration') as string;
    const inputAddress = formData.get('address') as string;
    const inputBudget = formData.get('budget') as string;
    const inputAccessory = formData.get('accessory') as string;
  
    const postData = {
      eventType: inputEvent,
      eventBudget: inputBudget,
      eventVenue: inputVenue,
      eventAccessories: inputAccessory,
      eventDate: eventDate,
      eventDuration: inputDuration,
      eventAttendees: inputAttendees,
      eventAddress: inputAddress,
    };
  
    try {
      // Perform your API request or any other necessary actions
      console.log(JSON.stringify(postData));
      if (currentQuestion === totalQuestions - 1) {
        // Last question, handle form submission or any other action
      } else {
        handleNext();
      }
    } catch (error) {
      console.error(error);
    }
  };




  // Left div scrolling 

  useEffect(() => {
    const handleScroll = () => {
      const leftDiv = document.getElementById('leftDiv');
      const rightDiv = document.getElementById('rightDiv');
      const scrollPosition = window.scrollY;

      if (leftDiv && rightDiv) {
        leftDiv.style.transform = `translateY(${scrollPosition}px)`;
        rightDiv.style.transform = `translateY(-${scrollPosition}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  // validate phone number 
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const validatePhoneNumber = () => {
    const phoneNumberRegex = /^010\d{8}$/; // Regex pattern for Korean phone number starting with 010 and followed by 8 numbers

    if (!phoneNumber.match(phoneNumberRegex)) {
      setPhoneNumberError('Please enter a valid Korean phone number starting with 010.');
    } else {
      setPhoneNumberError('');
    }
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setPhoneNumberError('');
  };


  return (
    <div className='flex '>
      <div className='w-full flex flex-col md:flex-row  overflow-hidden bg-[#fff] '>
        {/* Images Grid, and vertical Scroll */}

        
        <div id='leftDiv' className='hidden xl:flex absolute  w-screen h-full '> 
        
        {/* <h1 className='text-[80px] text-[#fff]/90 font-extrabold  h-[10%] w-[50%] absolute top-[43%] right-[5%] flex items-center justify-center opacity-40'>Our Recent Events</h1>
{/* Top container */}
    // <div className='top_image_wrapper  flex flex-row z-10 absolute  w-screen   '>
    //   {/* Container for small images in the top */}
    //   <div className='small_images_top flex flex-row absolute h-screen animate-bg-row1'>
    //   <div className='sm_image_container m-10  flex h-[90vh] items-start mx-20'>
    //     <img src='/images/optimized/reserveHero.jpeg' alt='africa' className='lg_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
    //   </div>
    //   <div className='sm_image_container m-10  flex h-[90vh] items-end mx-20'>
    //     <img src='/images/optimized/ciling.jpeg' alt='ciling' className='sm_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
    //   </div>
    //   <div className='sm_image_container m-10  flex h-[90vh] items-start mx-20'>
    //     <img src='/images/optimized/govea.jpeg' alt='bert-wedd' className='lg_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
    //   </div>
    //   <div className='sm_image_container m-10  flex h-[90vh] items-end mx-20'>
    //     <img src='/images/optimized/brett.jpeg ' alt='brett' className='sm_image w-[150px] h-[200px] p-1 shadow-xl border border-[#fff]' />
    //   </div>
    //   </div>

      {/* Container for medium images  */}
      //  <div className='medium_images_top flex flex-row absolute h-screen animate-bg-row2'>
      // <div className='md_image_container m-10  flex h-[90vh] items-end mx-20'>
      //   <img src='/images/optimized/reserveHero.jpeg' alt='africa' className='lg_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
      // </div>
      // <div className='md_image_container m-10 flex h-[90vh] items-start mx-20'>
      //   <img src='/images/optimized/ciling.jpeg' alt='ciling' className='sm_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
      // </div>
      // <div className='md_image_container m-10 flex h-[90vh] items-end mx-20'>
      //   <img src='/images/optimized/govea.jpeg' alt='bert-wedd' className='lg_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
      // </div>
      // <div className='md_image_container m-10 flex h-[90vh] items-start mx-20'>
      //   <img src='/images/optimized/brett.jpeg ' alt='brett' className='sm_image w-[250px] h-[300px] p-1 shadow-xl border border-[#fff]' />
      // </div>
      // </div>

      {/* Container for large images */}
    //    <div className='large_images_top flex felx-row absolute h-screen animate-bg-row3'>
    //   <div className='lg_image_container m-10  flex h-[90vh] items-start mx-10'>
    //     <img src='/images/optimized/reserveHero.jpeg' alt='africa' className='lg_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
    //   </div>
    //   <div className='lg_image_container m-10 flex h-[90vh] items-end mx-10'>
    //     <img src='/images/optimized/ciling.jpeg' alt='ciling' className='sm_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
    //   </div>
    //   <div className='lg_image_container m-10 flex h-[90vh] items-start mx-10'>
    //     <img src='/images/optimized/govea.jpeg' alt='bert-wedd' className='lg_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
    //   </div>
    //   <div className='lg_image_container m-10 flex h-[90vh] items-end mx-10'>
    //     <img src='/images/optimized/brett.jpeg ' alt='brett' className='sm_image w-[350px] h-[400px] p-1 shadow-xl border border-[#fff]' />
    //   </div>
    //   </div> 
    
    // </div> 


       

            
      </div>

        {/* Form Goes Here */}
        <div id='rightDiv' className=' h-screen  w-screen md:flex-shrink-0 flex items-center justify-start z-[100]'>
          <div className='h-[90vh] w-2 bg-[#6161FF] absolute left-0 bottom-0'></div>

          
        
        

          <form className='w-full max-w-[40rem] h-full bg-[#fff] bg-opacity-[0.98]  p-10 md:p-24 py-10 flex items-center justify-center flex-col overflow-y-scroll' onSubmit={handleSubmit}>

            {/* Type of Event */}
          {currentQuestion === 0 && (
           
            <div className=' mx-auto w-full '>
              <h4 className='text-xl lg:text-2xl text-[#49111c] font-semibold mb-5 flex items-center justify-center'>어떤 행사를 계획 중이신가요?</h4>
              <div>
                <label className='flex border   text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer'>
                  <input type='radio' required  name='event' />
                  <span className='pl-2 text-[14px] md:text-[17px]'>개인 행사</span>
                </label>

                <label className='flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer'>
                  <input type='radio' required  name='event' />
                  <div className='flex flex-col'>
                    <span className='pl-2 text-[14px] md:text-[17px]'>기업 행사</span>
                    <span className='text-sm text-[#49111c]/50 pl-2'>워크숍, 신년/송년회, 기념식 등</span>
                  </div>
                </label>

                <label className='flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer'>
                  <input type='radio' required  name='event' />
                  <div className='flex flex-col'>
                    <span className='pl-2 text-[14px] md:text-[17px]'>지역 행사</span>
                    <span className='text-sm text-[#49111c]/50 pl-2'>축제, 체험행사 등</span>
                  </div>
                </label>

                <label className='flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer'>
                  <input type='radio' required  name='event' />
                  <div className='flex flex-col'>
                    <span className='pl-2 text-[14px] md:text-[17px]'>홍보 행사</span>
                    <span className='text-sm text-[#49111c]/50 pl-2'>전시, 박람회, 쇼케이스 등</span>
                  </div>
                </label>

                <label className='flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer'>
                  <input type='radio' required name='event' />
                  <span className='pl-2 text-[14px] md:text-[17px]'>강연/간담회</span>
                </label>

                <label className='flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer'>
                  <input type='radio' required name='event' value='other' onChange={(e) => handleRadioChange(e, stateMappings, setShowInput)} title='직접 입력' />
                  <span className='pl-2 text-[14px] md:text-[17px]'>기타</span>
                </label>

                {showInput && (
                  <div className='mt-3 '>
                    <input
                      type='text'
                      className='ml-10 w-[90%] px-[15px] py-[14px]  rounded-lg text-[#49111c] border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    />
                  </div>
                )}
              </div>
            </div>
          )}



{/* Number of Attendees */}
{currentQuestion === 1 && (
                  <div className=" w-full mx-auto">
                    <h4 className="text-xl lg:text-2xl font-semibold text-[#49111c] mb-5 flex items-center justify-center">행사 참석 예상 인원을 선택해주세요</h4>

                    <div>
                        <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                              <input type='radio'  required name="attendies" />
                              <span className="pl-2 text-[14px] md:text-[17px]">30명 미만</span>
                        </label>

                        <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required  name="attendies" />
                            <span className="pl-2 text-[14px] md:text-[17px]">50명 미만</span>
                        </label>

                        <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required  name="attendies" />
                      
                            <span className="pl-2 text-[14px] md:text-[17px]">100명 미만</span>
                          
                            
                            
                        </label>

                        <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required  name="attendies" />
                            
                            <span className="pl-2 text-[14px] md:text-[17px]">200명 미만</span>
                            
                            
                        </label>

                        <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                              <input type='radio' required name="attendies" />
                              
                              <span className="pl-2 text-[14px] md:text-[17px]">300명 미만</span> 
                              
                          </label>

                          <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                              <input type='radio' required name="attendies" />
                              
                              <span className="pl-2 text-[14px] md:text-[17px]">400명 미만</span>
                              
                          </label>

                        

                          <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer">
                        <input
                          type='radio' required
                          name="attendies"
                          value="other"
                          onChange={(e) => handleRadioChange(e, stateMappings, setShowInput)}
                          placeholder='직접 입력'
                        />
                        <span className="pl-2 text-[14px] md:text-[17px]">기타</span>
                      </label>

                      {showInput && (
                        <div className="mt-3">
                          <input type="text" className="ml-10 w-[90%] px-[15px] py-[14px] text-[#49111c]  rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                      )}

                    </div>
                  </div>
             
            )}



          {/* Event Budget */}

          {currentQuestion === 2 && (
           
           <div className=' mx-auto w-full '>
             <h4 className='text-xl lg:text-2xl text-[#49111c] font-semibold mb-5 flex items-center justify-center'>식사 와청 건금액 / 일인당</h4>
             <div>
                        <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                              <input type='radio'  required name="budget" />
                              <span className="pl-2 text-[14px] md:text-[17px]">10.000 원 </span>
                        </label>

                        <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required  name="budget" />
                            <span className="pl-2 text-[14px] md:text-[17px]">15.000 원</span>
                        </label>

                        <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required  name="budget" />
                      
                            <span className="pl-2 text-[14px] md:text-[17px]">20.000 원</span>
                          
                            
                            
                        </label>

                        <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required  name="budget" />
                            
                            <span className="pl-2 text-[14px] md:text-[17px]">30.000 원</span>
                            
                            
                        </label>

                        <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                              <input type='radio' required name="budget" />
                              
                              <span className="pl-2 text-[14px] md:text-[17px]">40.000 원</span> 
                              
                          </label>

                          <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                              <input type='radio' required name="budget" />
                              
                              <span className="pl-2 text-[14px] md:text-[17px]">50.000 원</span>
                              
                          </label>

                        

                          <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer">
                        <input
                          type='radio' required
                          name="budget"
                          value="budget"
                          onChange={(e) => handleRadioChange(e, stateMappings, setShowInput)}
                          placeholder='직접 입력'
                        />
                        <span className="pl-2 text-[14px] md:text-[17px]">기타</span>
                      </label>

                      {showInput && (
                        <div className="mt-3">
                          <input type="text" className="ml-10 w-[90%] px-[15px] py-[14px] text-[#49111c]  rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                      )}

                    </div>
           </div>
         )}





                  {/* Event Venue */}
                  {currentQuestion === 3 && (
            <div className=" w-full mx-auto">
              <h4 className="text-xl lg:text-2xl font-semibold text-[#49111c] mb-5 flex items-center justify-center">행사 예정 장소는 어디인가요?</h4>

                        <div>
                      <label className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required name="venue" />
                            <span className="pl-2 text-[14px] md:text-[17px]">호텔</span>
                      </label>

                      <label className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                          <input type='radio' required  name="venue" />
                          <div className='flex flex-col'>
                          <span className="pl-2 text-[14px] md:text-[17px]">이벤트/컨벤션홀</span>
                          </div>
                          
                      </label>

                      <label className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                          <input type='radio' required  name="venue" />
                          <div className='flex flex-col'>
                          <span className="pl-2 text-[14px] md:text-[17px]">주거 공간</span>
                          <span className='text-sm text-[#49111c]/50 pl-2'>주택, 빌라 등</span>
                          </div>
                          
                      </label>

                      <label className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                          <input type='radio' required  name="venue" />
                          <div className='flex flex-col'>
                          <span className="pl-2 text-[14px] md:text-[17px]">사내 공간</span>
                          <span className='text-sm text-[#49111c]/50 pl-2'>강당, 사무실, 로비 등</span>
                          </div>
                          
                      </label>

                      <label className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required name="venue" />
                            <div className='flex flex-col'>
                            <span className="pl-2 text-[14px] md:text-[17px]">기타 실내</span> 
                            <span className='text-sm text-[#49111c]/50 pl-2'>극장, 공연장, 클럽 등</span>
                            </div>
                        </label>

                        <label className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required name="venue" />
                            <div className='flex flex-col'>
                            <span className="pl-2 text-[14px] md:text-[17px]">기타 야외</span>
                            <span className='text-sm text-[#49111c]/50 pl-2'>체육관, 공원, 캠핑장 등</span>
                            </div>
                        </label>

                        <label className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required name="venue" />
                            <span className="pl-2 text-[14px] md:text-[17px]">미정</span>
                            
                        </label>

                        <label className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer">
                      <input
                        type='radio' required
                        name="venue"
                        value="other"
                        onChange={(e) => handleRadioChange(e, stateMappings, setShowInput)}
                        placeholder='직접 입력'
                      />
                      <span className="pl-2 text-[14px] md:text-[17px]">기타</span>
                    </label>

                    {showInput && (
                      <div className="mt-3">
                        <input type="text" className="ml-10 w-[90%] px-[15px] py-[14px] text-[#49111c]  rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                    )}

                  </div>
            </div>


                  )}

            


            {/* Event accessory */}

             {currentQuestion === 4 && (
            <div className=" w-full mx-auto">
              <h4 className="text-xl lg:text-2xl font-semibold text-[#49111c] mb-5 flex items-center justify-center">Would you need ?</h4>

                        <div>
                      <label className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required name="accessory" />
                            <div className='flex flex-col'>
                          <span className="pl-2 text-[14px] md:text-[17px]">Chairs</span>
                          <span className="text-sm text-[#49111c]/50 pl-2">Plastic chairs with cover</span>
                          </div>
                      </label>

                      <label className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                          <input type='radio' required  name="accessory" />
                          <div className='flex flex-col'>
                          <span className="pl-2 text-[14px] md:text-[17px]">Table</span>
                          <span className="text-sm text-[#49111c]/50 pl-2">Circle or square wood tables with cover</span>
                          </div>
                          
                      </label>

                      <label className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                          <input type='radio' required  name="accessory" />
                          <div className='flex flex-col'>
                          <span className="pl-2 text-[14px] md:text-[17px]">Tent</span>
                          <span className='text-sm text-[#49111c]/50 pl-2'>One set 10 meters long</span>
                          </div>
                          
                      </label>

                      <label className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                          <input type='radio' required  name="accessory" />
                          <div className='flex flex-col'>
                          <span className="pl-2 text-[14px] md:text-[17px]">Music</span>
                          <span className='text-sm text-[#49111c]/50 pl-2'>Speakers, microphone</span>
                          </div>
                          
                      </label>

                      <label className="flex border  text-[#49111c] rounded-lg py-[4px] md:py-[8px] pl-5 my-3  hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required name="accessory" />
                            <div className='flex flex-col'>
                            <span className="pl-2 text-[14px] md:text-[17px]">Ceremony Accesosories </span> 
                            <span className='text-sm text-[#49111c]/50 pl-2'>Red carpet, ribbon, scissors</span>
                            </div>
                        </label>


                        <label className="flex border  text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3  hover:bg-indigo-50 cursor-pointer">
                      <input
                        type='radio' required
                        name="accessory"
                        value="accessory"
                        onChange={(e) => handleRadioChange(e, stateMappings, setShowInput)}
                        placeholder='직접 입력'
                      />
                      <span className="pl-2 text-[14px] md:text-[17px]">기타</span>
                    </label>

                    {showInput && (
                      <div className="mt-3">
                        <input type="text" className="ml-10 w-[90%] px-[15px] py-[14px] text-[#49111c]  rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                    )}

                  </div>
            </div>


                  )}




             {/* Event Duration */}
             {currentQuestion === 5 && (
             <div className="w-full mx-auto">
                    <h4 className="text-xl lg:text-2xl font-semibold text-[#49111c] flex items-center justify-center">행사 예상 소요 시간을 선택해주세요.</h4>

                    <div>
                        <label className="flex border text-[#49111c] rounded-lg  p-3 md:p-4 pl-5 my-3 hover:bg-indigo-50 cursor-pointer ">
                              <input type='radio' required name="duration" />
                              <span className="pl-2 text-[14px] md:text-[17px]">1시간</span>
                        </label>

                        <label className="flex border text-[#49111c] rounded-lg  p-3 md:p-4 pl-5 my-3 hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required  name="duration" />
                            <span className="pl-2 text-[14px] md:text-[17px]">2시간</span>
                        </label>

                        <label className="flex border text-[#49111c] rounded-lg  p-3 md:p-4 pl-5 my-3 hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required  name="duration" />
                      
                            <span className="pl-2 text-[14px] md:text-[17px]">3시간</span>
                          
                            
                            
                        </label>

                        <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3 hover:bg-indigo-50 cursor-pointer ">
                            <input type='radio' required  name="duration" />
                            
                            <span className="pl-2 text-[14px] md:text-[17px]">4시간</span>
                            
                            
                        </label>

                        <label className="flex border text-[#49111c] rounded-lg  p-3 md:p-4 pl-5 my-3 hover:bg-indigo-50 cursor-pointer ">
                              <input type='radio' required name="duration" />
                              
                              <span className="pl-2 text-[14px] md:text-[17px]">5시간</span> 
                              
                          </label>

                          

                          <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3 hover:bg-indigo-50 cursor-pointer">
                        <input
                          type='radio' required
                          name="duration"
                          value="other"
                          onChange={(e) => handleRadioChange(e, stateMappings, setShowInput)}
                          placeholder='직접 입력'
                        />
                        <span className="pl-2 text-[14px] md:text-[17px]">하루 이상</span>
                      </label>
                        

                          <label className="flex border text-[#49111c] rounded-lg p-3 md:p-4 pl-5 my-3 hover:bg-indigo-50 cursor-pointer">
                        <input
                          type='radio' required
                          name="duration"
                          value="other"
                          onChange={(e) => handleRadioChange(e, stateMappings, setShowInput)}
                          placeholder='직접 입력'
                        />
                        <span className="pl-2 text-[14px] md:text-[17px]">기타</span>
                      </label>

                      {showInput && (
                        <div className="mt-3">
                          <input type="text" className="ml-10 w-[90%] px-[15px] py-[14px] text-[#49111c]  rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                      )}

                    </div>
                  </div>
        
             )}

                 {/* Event Date */}
                 {currentQuestion === 6 && (
                 <div className=" w-full mx-auto flex items-center justify-center">
                 <DatePicker
                      showIcon
                      selected={eventDate}
                      onChange={(date) => setEventDate(date || new Date())}
                      minDate={new Date()}
                      inline
                      locale={ko} // Set the Korean locale
                      wrapperClassName="datePicker"
                      required
                      />
                </div>
                 )}


                {/* Address of the Event */}
 {currentQuestion === 7 && (
                <AddressFinder />

 )}

                {/* Name and Phone Number */}
                {currentQuestion === 8 && (
                <div className='w-full mx-auto'>
                        <h1 className='text-2xl text-center mb-5 p-2 rounded-lg flex items-center justify-center text-[#49111c]'>기본 정보를 입력하시면 딱 맞는 고수의 견적을 보내드립니다.</h1>
                

                {/* Name */}
                <div>
                <label htmlFor="input2" className="block text-sm font-medium text-[#49111c] ">이름</label>
                <input className="block w-full h-14 mt-1 text-[#49111c]  py-7 my-2 focus:outline-none rounded-lg pl-4 text-[14px] md:text-[17px] border" placeholder="" type="text" id="input1" 
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                            className={`block w-full h-14 pl-4 pr-3 py-7 mt-2 text-[14px] md:text-[17px] text-[#49111c] rounded-lg  border ${
                              phoneNumberError ? 'border-red-500' : ''
                            }`}
                            placeholder="010"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            onBlur={validatePhoneNumber}
                            required
                          />
                          {phoneNumberError && <p className="text-red-500 mt-1">{phoneNumberError}</p>}
                          
                        </div>
                      </div>
                  </div>
                )}

            <div className='flex flex-row items-center justify-between w-full'>
            {currentQuestion > 0 && (
            <button
              type='button'
              className='w-[20%] h-12 text-md py-2 border text-[#49111c] hover:bg-[#6161ff]/10  tracking-wider rounded-[5px]  focus:outline-none focus:bg-blue mt-5 max-w-md  text-[14px] md:text-[16px] mr-2'
              onClick={handlePrevious}
            >
              &lt;
            </button>
            )}
            <button
              type='submit'
              className='w-[100%] h-12 text-md py-2  tracking-wider rounded-[5px] bg-[#6161FF] hover:bg-[#6161FF]/80 text-[#fff] focus:outline-none focus:bg-blue mt-5 max-w-md  text-[14px] md:text-[16px]'
            >
              {currentQuestion < totalQuestions - 1 ? 'Next' : 'Submit'}
            </button>
            </div>
          
          </form>

          <div className=' h-full flex items-start justify-end'>
          <div className='h-[100vh] w-2 bg-[#49111c] '></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPageCopy;


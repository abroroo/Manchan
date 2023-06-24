import React, { useState } from 'react';

const MainForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };


  // for 키다 input
  const [showInput, setShowInput] = useState(false);
  

  const handleRadioChange = (event: any) => {
    setShowInput(event.target.value === 'other');
  };


  return (
    <div className="flex flex-col md:flex-row h-screen ">
      <div className="w-full md:flex-1 xl:felx-1 bg-gray-200">
        <form className='flex flex-col mt-20 p-3'>
          <h1 className='text-3xl text-center mb-5 '>Please tell us about yourself!</h1>
         

          {/* Name */}
          <div>
          <label htmlFor="input2" className="block text-sm font-medium text-gray-700 dark:text-gray-100">Name</label>
          <input className="block w-full h-10  text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500" placeholder="" type="text" id="input1" />
          </div>
          

          {/* Phone number */}
          <div className='mt-7'>
            <label htmlFor="input2" className="block text-sm font-medium text-gray-700 dark:text-gray-100">Phone</label>
            <div className="relative mt-1">
              <input type="email" id="input2" className="block w-full h-10 pl-8 pr-3 mt-1 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500" placeholder="010" />

              <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-blue-400 pointer-events-none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </span>
            </div>
          </div>

          {/* Event Type */}
          <div className='mt-7'>
         

          <div className="border bg-white border-slate-700 shadow-sm rounded-md p-4 w-full mx-auto max-w-2xl">
    <h4 className="text-xl lg:text-2xl font-semibold">
    어떤 행사를 계획 중이신가요?
    </h4>

    <div>
        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
             <input type="radio" name="Event" />
             <span className="pl-2">개인 행사</span>
        </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
            <input type="radio"  name="Event" />
            <div className='flex flex-col'>
            <span className="pl-2">기업 행사</span>
            <span className='text-sm text-gray-400 pl-2'>워크숍, 신년/송년회, 기념식 등</span>
            </div>
            
        </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
            <input type="radio"  name="Event" />
            <div className='flex flex-col'>
            <span className="pl-2">지역 행사</span>
            <span className='text-sm text-gray-400 pl-2'>축제, 체험행사 등</span>
            </div>
            
        </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
            <input type="radio"  name="Event" />
            <div className='flex flex-col'>
            <span className="pl-2">홍보 행사</span>
            <span className='text-sm text-gray-400 pl-2'>전시, 박람회, 쇼케이스 등</span>
            </div>
            
        </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
              <input type="radio" name="Event" />
              <span className="pl-2">강연/간담회</span>
         </label>

         <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer">
        <input
          type="radio"
          name="Event"
          value="other"
          onChange={handleRadioChange}
          title="직접 입력"
        />
        <span className="pl-2">기타</span>
      </label>

      {showInput && (
        <div className="mt-3">
          <input type="text" className="ml-10 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
      )}

    </div>
</div>
          </div>
          






      {/*  Event Venue Start */}

      <div className='mt-7'>
         

         <div className="border bg-white border-slate-700 shadow-sm rounded-md p-4 w-full mx-auto max-w-2xl">
   <h4 className="text-xl lg:text-2xl font-semibold">
   행사 예정 장소는 어디인가요?
   </h4>

   <div>
       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
            <input type="radio" name="Event" />
            <span className="pl-2">호텔</span>
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="Event" />
           <div className='flex flex-col'>
           <span className="pl-2">이벤트/컨벤션홀</span>
           </div>
           
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="Event" />
           <div className='flex flex-col'>
           <span className="pl-2">주거 공간</span>
           <span className='text-sm text-gray-400 pl-2'>주택, 빌라 등</span>
           </div>
           
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="Event" />
           <div className='flex flex-col'>
           <span className="pl-2">사내 공간</span>
           <span className='text-sm text-gray-400 pl-2'>강당, 사무실, 로비 등</span>
           </div>
           
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
             <input type="radio" name="Event" />
             <div className='flex flex-col'>
             <span className="pl-2">기타 실내</span> 
             <span className='text-sm text-gray-400 pl-2'>극장, 공연장, 클럽 등</span>
             </div>
        </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
             <input type="radio" name="Event" />
             <div className='flex flex-col'>
             <span className="pl-2">기타 야외</span>
             <span className='text-sm text-gray-400 pl-2'>체육관, 공원, 캠핑장 등</span>
             </div>
        </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
             <input type="radio" name="Event" />
             <span className="pl-2">미정</span>
             
        </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer">
       <input
         type="radio"
         name="Event"
         value="other"
         onChange={handleRadioChange}
         placeholder='직접 입력'
       />
       <span className="pl-2">기타</span>
     </label>

     {showInput && (
       <div className="mt-3">
         <input type="text" className="ml-10 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
       </div>
     )}

   </div>
</div>
         </div>

      {/*  Event Venue End */}





      {/* Number of Attendiees Start */}



      <div className='mt-7'>
         

         <div className="border bg-white border-slate-700 shadow-sm rounded-md p-4 w-full mx-auto max-w-2xl">
   <h4 className="text-xl lg:text-2xl font-semibold">
   행사 참석 예상 인원을 선택해주세요.
   </h4>

   <div>
       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
            <input type="radio" name="Event" />
            <span className="pl-2">30명 미만</span>
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="Event" />
           <span className="pl-2">50명 미만</span>
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="Event" />
    
           <span className="pl-2">100명 미만</span>
        
          
           
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="Event" />
          
           <span className="pl-2">200명 미만</span>
           
           
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
             <input type="radio" name="Event" />
            
             <span className="pl-2">300명 미만</span> 
             
        </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
             <input type="radio" name="Event" />
            
             <span className="pl-2">400명 미만</span>
             
        </label>

       

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer">
       <input
         type="radio"
         name="Event"
         value="other"
         onChange={handleRadioChange}
         placeholder='직접 입력'
       />
       <span className="pl-2">기타</span>
     </label>

     {showInput && (
       <div className="mt-3">
         <input type="text" className="ml-10 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
       </div>
     )}

   </div>
</div>
         </div>

       {/* Number of Attendiees End */}





      {/* Expected Duration of the Event Start */}


      <div className='mt-7'>
         

         <div className="border bg-white border-slate-700 shadow-sm rounded-md p-4 w-full mx-auto max-w-2xl">
   <h4 className="text-xl lg:text-2xl font-semibold">
   행사 예상 소요 시간을 선택해주세요.
   </h4>

   <div>
       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
            <input type="radio" name="Event" />
            <span className="pl-2">1시간</span>
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="Event" />
           <span className="pl-2">2시간</span>
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="Event" />
    
           <span className="pl-2">3시간</span>
        
          
           
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="Event" />
          
           <span className="pl-2">4시간</span>
           
           
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
             <input type="radio" name="Event" />
            
             <span className="pl-2">5시간</span> 
             
        </label>

        

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer">
       <input
         type="radio"
         name="Event"
         value="other"
         onChange={handleRadioChange}
         placeholder='직접 입력'
       />
       <span className="pl-2">하루 이상</span>
     </label>
       

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer">
       <input
         type="radio"
         name="Event"
         value="other"
         onChange={handleRadioChange}
         placeholder='직접 입력'
       />
       <span className="pl-2">기타</span>
     </label>

     {showInput && (
       <div className="mt-3">
         <input type="text" className="ml-10 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
       </div>
     )}

   </div>
</div>
         </div>

      {/* Expected Duration of the Event End */}










          <input type="date" id="input2" />

          <label htmlFor="input2">Event Time:</label>
          <input type="time" id="input2" />

          <label htmlFor="input3">Event Type:</label>
          <select id="input3" value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select an option</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="One Year Birthday">One Year Birthday</option>
            <option value="Social Event">Soial Event</option>
            <option value="Holiday Celebration">Holiday Celebration</option>
          </select>

          <label htmlFor="input2">Event Description:</label>
          <input type="text" id="input2" />

          <label htmlFor="input2">Input 2:</label>
          <input type="text" id="input2" />

          <label htmlFor="input2">Input 2:</label>
          <input type="text" id="input2" />
        </form>
      </div>

      <div className="w-full md:flex-[1_1_20%] xl:flex-[1_1_20%] bg-gray-300">
        <div className="p-4 h-screen flex items-center justify-center">
          {selectedOption ? (
            <div>
              <h3>Selected Option: {selectedOption}</h3>
              {/* Add content based on the selected option */}
            </div>
          ) : (
            <div>
              <h3>No option selected</h3>
              {/* Add default content */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainForm;










// import React from 'react';

// const MainForm: React.FC = () => {
//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       <div className="w-full md:flex-1 xl:felx-1 bg-gray-200">Left Container</div>
//       <div className="w-full md:flex-[1_1_40%] xl:flex-[1_1_40%] bg-gray-300">Right Container</div>
//     </div>
//   );
// };

// export default MainForm;

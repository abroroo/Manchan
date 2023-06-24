import React, {useState} from 'react'
import { useRouter } from 'next/router';
import { set } from 'date-fns';

interface Props {}

const Step3 = () => {

    const [venue, setVenue] = useState('');
   

  const router = useRouter();


 

  // for 키다 input
  const [showInput, setShowInput] = useState(false);
  

  const handleRadioChange = (event: any) => {
    setShowInput(event.target.value === 'other');
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    const inputValue = formData.get('venue');
    setVenue(inputValue as string);
  
    const postData = {
      event: venue,
    };
  
    try {
      // Perform your API request or any other necessary actions
  
      console.log(JSON.stringify(postData));
      router.push('/step4');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (<div>
    <div className="flex flex-col h-screen items-center justify-center ">
        <div className='flex items-center justify-center'>
            <form className="flex items-center justify-center flex-col" onSubmit={handleSubmit}>
          

                {/*  Event Venue Start */}

      <div className='mt-7 w-screen'>
         

         <div className="border bg-white border-slate-300 shadow-sm rounded-md p-4 w-full mx-auto max-w-md">
   <h4 className="text-xl lg:text-2xl font-semibold">
   행사 예정 장소는 어디인가요?
   </h4>

   <div>
       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
            <input type="radio" name="venue" />
            <span className="pl-2">호텔</span>
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="venue" />
           <div className='flex flex-col'>
           <span className="pl-2">이벤트/컨벤션홀</span>
           </div>
           
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="venue" />
           <div className='flex flex-col'>
           <span className="pl-2">주거 공간</span>
           <span className='text-sm text-gray-400 pl-2'>주택, 빌라 등</span>
           </div>
           
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="venue" />
           <div className='flex flex-col'>
           <span className="pl-2">사내 공간</span>
           <span className='text-sm text-gray-400 pl-2'>강당, 사무실, 로비 등</span>
           </div>
           
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
             <input type="radio" name="venue" />
             <div className='flex flex-col'>
             <span className="pl-2">기타 실내</span> 
             <span className='text-sm text-gray-400 pl-2'>극장, 공연장, 클럽 등</span>
             </div>
        </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
             <input type="radio" name="venue" />
             <div className='flex flex-col'>
             <span className="pl-2">기타 야외</span>
             <span className='text-sm text-gray-400 pl-2'>체육관, 공원, 캠핑장 등</span>
             </div>
        </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
             <input type="radio" name="venue" />
             <span className="pl-2">미정</span>
             
        </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer">
       <input
         type="radio"
         name="venue"
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



         <button
        type="submit"
        className="w-full max-w-md h-14 text-md py-2 text-white tracking-wider rounded-md bg-[#49111c] hover:bg-[#49111c]/90 focus:outline-none focus:bg-blue mt-10"
      >
       
        Next
        
      </button>
            </form>

        </div>
    </div>
  </div>)
}

export default Step3
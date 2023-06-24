import React, {useState} from 'react'
import { useRouter } from 'next/router';
import { set } from 'date-fns';

interface Props {}

const Step2 = () => {

    const [event, setEvent] = useState('');
   

  const router = useRouter();


 

  // for 키다 input
  const [showInput, setShowInput] = useState(false);
  

  const handleRadioChange = (event: any) => {
    setShowInput(event.target.value === 'other');
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    const inputValue = formData.get('event');
    setEvent(inputValue as string);
  
    const postData = {
      event: event,
    };
  
    try {
      // Perform your API request or any other necessary actions
  
      console.log(JSON.stringify(postData));
      router.push('/step3');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (<div>
    <div className="flex flex-col h-screen items-center justify-center ">
        <div className='flex items-center justify-center'>
            <form  className="flex items-center justify-center flex-col" onSubmit={handleSubmit}>
          

           {/* Event Type */}
           <div className='mt-7 w-screen'>
         

         <div className="border bg-white border-slate-300 shadow-sm rounded-md p-4 w-full mx-auto max-w-md">
   <h4 className="text-xl lg:text-2xl font-semibold">
   어떤 행사를 계획 중이신가요?
   </h4>

   <div>
       <label className="flex bg-[#49111c]/10 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
            <input type="radio" name="event" />
            <span className="pl-2">개인 행사</span>
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="event" />
           <div className='flex flex-col'>
           <span className="pl-2">기업 행사</span>
           <span className='text-sm text-gray-400 pl-2'>워크숍, 신년/송년회, 기념식 등</span>
           </div>
           
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="event" />
           <div className='flex flex-col'>
           <span className="pl-2">지역 행사</span>
           <span className='text-sm text-gray-400 pl-2'>축제, 체험행사 등</span>
           </div>
           
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
           <input type="radio"  name="event" />
           <div className='flex flex-col'>
           <span className="pl-2">홍보 행사</span>
           <span className='text-sm text-gray-400 pl-2'>전시, 박람회, 쇼케이스 등</span>
           </div>
           
       </label>

       <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
             <input type="radio" name="event" />
             <span className="pl-2">강연/간담회</span>
        </label>

        <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer">
       <input
         type="radio"
         name="event"
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

         <button
        type="submit"
        className="w-full h-14 text-md py-2 text-white tracking-wider rounded-md bg-[#49111c] hover:bg-[#49111c]/90 focus:outline-none focus:bg-blue mt-10 max-w-md"
      >
       
        Next
        
      </button>
            </form>

        </div>
    </div>
  </div>)
}

export default Step2
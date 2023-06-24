import React, {useState} from 'react'
import { useRouter } from 'next/router';

interface Props {}

const StartForm = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
  
    const postData = {
      name: name,
      phone_number: phoneNumber,
    };
  
    try {
    //   const response = await fetch('http://127.0.0.1:8000/api/new_customer', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(postData),
    //   });
      console.log(JSON.stringify(postData))
    //   if (!response.ok) {
    //     throw new Error('Failed to submit registration form.');
    //   }
    //   const json = await response.json();
      router.push('/choose-date');
    } catch (error) {
      console.error(error);
    }
  };

  return (<div>
    <div className="flex flex-col h-screen items-center justify-center ">
        <div className='flex items-center justify-center'>
            <form onSubmit={handleSubmit}>
            <h1 className='text-3xl text-center mb-5 '>Please tell us about yourself!</h1>
         

         {/* Name */}
         <div>
         <label htmlFor="input2" className="block text-sm font-medium text-gray-500 dark:text-gray-100">Name</label>
         <input className="block w-full h-14 mt-1 text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500 pl-8 text-[18px]" placeholder="" type="text" id="input1" 
         value={name}
         onChange={(e) => setName(e.target.value)}
         required/>
         </div>
         

         {/* Phone number */}
         <div className='mt-7'>
           <label htmlFor="input2" className="block text-sm font-medium text-gray-500 dark:text-gray-100">Phone</label>
           <div className="relative mt-1">
             <input type="number" id="input2" className="block w-full h-14 pl-8 pr-3 mt-1 text-[18px] text-gray-700 border focus:outline-none rounded shadow-sm focus:border-blue-500" placeholder="010" 
             value={phoneNumber}
             onChange={(e) => setPhoneNumber(e.target.value)}
             required/>

             <span className="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-blue-400 pointer-events-none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
             </span>
           </div>
         </div>

         <button
        type="submit"
        className="w-full h-14 text-md py-2 text-white tracking-wider rounded-md bg-[#49111c] hover:bg-[#49111c]/90 focus:outline-none focus:bg-blue mt-10"
      >
       
        Next
        
      </button>
            </form>

        </div>
    </div>
  </div>)
}

export default StartForm
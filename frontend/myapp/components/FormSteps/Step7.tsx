import React, {useState} from 'react'
import { useRouter } from 'next/router';
import { set } from 'date-fns';
import AddressFinder from '../AddressFinder';

interface Props {}

const Step6 = () => {

    const [eventDuration, setEventDuration] = useState('');
   

  const router = useRouter();


 

  // for 키다 input
  const [showInput, setShowInput] = useState(false);
  

  const handleRadioChange = (event: any) => {
    setShowInput(event.target.value === 'other');
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
    const inputValue = formData.get('duration');
    setEventDuration(inputValue as string);
  
    const postData = {
      event: eventDuration,
    };
  
    try {
      // Perform your API request or any other necessary actions
  
      console.log(JSON.stringify(postData));
      router.push('/step7');
    } catch (error) {
      console.error(error);
    }
  };
  

  return (<div>
    <div className="flex flex-col h-screen items-center justify-center ">
        <div className='flex items-center justify-center'>
            <form className="flex items-center justify-center flex-col" onSubmit={handleSubmit}>
          


{/* Address Finder Start */}
            <AddressFinder />

{/* Address Finder End */}



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

export default Step6
import React, {useState} from 'react'
import { useRouter } from 'next/router';
import DatePicker from "react-datepicker";
import { addMonths } from 'date-fns'; 
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko"; 





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
  




// Date Picker 
const [startDate, setStartDate] = useState<Date | null>(new Date());

const [endDate, setEndDate] = useState(null);




  return (<div>
    <div className="flex flex-col h-screen items-center justify-center ">
        <div className='flex items-center justify-center'>
            <form className="flex items-center justify-center flex-col " onSubmit={handleSubmit}>
          


{/* Date Pick Start */}





<DatePicker
  showIcon
  selected={startDate}
  onChange={(date) => setStartDate(date || new Date())}
  minDate={new Date()}
  inline
  locale={ko} // Set the Korean locale

/>

{/* Date Pick End */}



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
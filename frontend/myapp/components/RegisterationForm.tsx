import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { motion, useAnimation, transform } from "framer-motion";


const RegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [event, setEvent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const postData = {
      name: name,
      phone_number: phoneNumber,
    };
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/new_customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      console.log(JSON.stringify(postData))
      if (!response.ok) {
        throw new Error('Failed to submit registration form.');
       
      }
      const json = await response.json();
      
      
      router.push('/choose-date');
      console.log('Registration form submitted');
      console.log('Name:', name);
      console.log('Phone Number:', phoneNumber);
      console.log('Email:', event);
      console.log('Ticket number: ', json.ticket_number)
    } catch (error) {
      console.error(error);
    }
  };
  
  


  const maxLength = 11;
  const mapRemainingToColor = transform([-1, 0, 12], ["#ff008c", "#54B435", "#ccc" ]);
  const mapRemainingToSpringVelocity = transform([0, 5], [50, 0]);
  
  const charactersRemaining = maxLength - phoneNumber.length;
  const controls = useAnimation();
  
  useEffect(() => {
    if (charactersRemaining > maxLength) return;
  
    controls.start({
      scale: 1,
      transition: {
        type: "spring",
        velocity: mapRemainingToSpringVelocity(charactersRemaining),
        stiffness: 700,
        damping: 80
      }
    });
  }, [phoneNumber.length]);
  




  return (
    <div>

    
    <form className="max-w-3xl w-96 mx-auto font-monts" onSubmit={handleSubmit}>
    <h1 className='text-3xl font-outfit font-semibold mb-10'>Please tell us your name, phone number and event type!</h1>
      <div className="mb-4">
        <label htmlFor="name" className="text-sm block mb-1 font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full h-16 px-3  text-lg py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="text-sm block mb-1 font-medium">
          Phone Number
        </label>
        <div className='flex flex-row'>
        <input
          id="phoneNumber"
          type="number"
          className="w-full h-16 px-3 text-lg py-2 border border-gray-300 rounded-md focus:outline-none  focus:border-black"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          placeholder='010 '
        />
       
        <motion.span
          animate={controls}
          style={{ color: mapRemainingToColor(charactersRemaining) }}
          className='text-lg pt-[18px] pl-2 '
        >
          {charactersRemaining}
        </motion.span>
        </div>       
      </div>
      <div className="mb-4">
        <label htmlFor="event" className="text-sm block mb-1 font-medium">
          Event
        </label>
        <input
          id="event"
          type="text"
          className="w-full h-16 px-3  text-lg py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          value={event}
          onChange={(e) => setEvent(e.target.value)}        
        />
      </div>

      <button
        type="submit"
        className="w-full h-16 text-md py-2 text-white tracking-wider bg-[#000]/90 rounded-md hover:bg-[#000]"
      >
       
        Next
        
      </button>
     
    </form>
    </div>
  );
};

export default RegistrationForm;

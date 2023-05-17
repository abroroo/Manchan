import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

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
  
      if (!response.ok) {
        throw new Error('Failed to submit registration form.');
       
      }
      const router = useRouter();
      router.push('/choose-date');
      console.log('Registration form submitted');
      console.log('Name:', name);
      console.log('Phone Number:', phoneNumber);
      console.log('Email:', email);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1 font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block mb-1 font-medium">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          type="tel"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
       
        Register
        
      </button>
     
    </form>
  );
};

export default RegistrationForm;

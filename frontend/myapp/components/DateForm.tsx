import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  date: string;
  address: string;
}

export default function DateForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data.date)
    const response = await fetch(`http://localhost:8000/api/check_date/?datetime=${data.date}&ticket_number=32165488`);
    const json = await response.json();
    if (json.date_available) {
      console.log(JSON.stringify(json))
      alert('Yes, date is available');
    } else {
      alert('Sorry, that date is already booked.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="p-1" htmlFor="date">Date</label>
      <input
      className='mr-10 p-1 '
        type="date"
        id="date"
        {...register("date", { required: true })}
      />
      {errors.date && <span>Please choose the date</span>}

      <label className="p-1" htmlFor="address">Address</label>
      <input
      className='mr-10 p-1 w-96'
        type="text"
        id="address"
        {...register("address", { required: false })}
      />
      {errors.address && <span>Please fill out the address</span>}

      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'  type="submit">Check Availability</button>
    </form>
  );
}

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  date: string;
  address: string;
}

export default function DateForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const response = await fetch(`/api/checkAvailability?date=${data.date}`);
    const json = await response.json();
    if (json.available) {
      // TODO: Submit the form data to the backend
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
      className='mr-10 p-1'
        type="text"
        id="address"
        {...register("address", { required: false })}
      />
      {errors.address && <span>Please fill out the address</span>}

      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'  type="submit">Check Availability</button>
    </form>
  );
}

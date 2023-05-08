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
      <label className="p-2" htmlFor="date">Date</label>
      <input
      className='mr-10'
        type="date"
        id="date"
        {...register("date", { required: true })}
      />
      {errors.date && <span>This field is required</span>}

      <label className="p-2" htmlFor="address">Address</label>
      <input
      className='mr-10'
        type="text"
        id="address"
        {...register("address", { required: true })}
      />
      {errors.address && <span>This field is required</span>}

      <button  type="submit">Submit</button>
    </form>
  );
}

import React, {useState} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// import Datepicker from "tailwind-datepicker-react"

interface FormData {
  date: string;
  address: string;
}

const options = {
	title: "Demo Title",
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-white",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "bg-slay-100",
		input: "",
		inputIcon: "",
		selected: "",
	},
	
	datepickerClassNames: "top-12 w-96 h-40 left-56",
	defaultDate: new Date("2022-01-01"),
	language: "en",
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



  const [show, setShow] = useState(false);

	const handleChange = (selectedDate: Date) => {
		console.log(selectedDate)
	}
	const handleClose = (state: boolean) => {
		setShow(state)
	}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="p-1" htmlFor="date">Date</label>
      <input
      className='mr-10 p-1 '
        type="datetime-local"
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


// <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
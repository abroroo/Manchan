 const onSubmit = async (data: any) => {
    const response = await fetch(`/api/checkAvailability?date=${data.date}`);
    const json = await response.json();
    if (json.available) {
      // TODO: Submit the form data to the backend
    } else {
      alert('Sorry, that date is already booked.');
    }
  };
  
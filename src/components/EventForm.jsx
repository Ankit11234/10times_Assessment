import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventForm = ({ onAddEvent }) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleAddEvent = () => {
    if (eventName && eventDate) {
      onAddEvent({ name: eventName, date: eventDate });
      toast.success('Event Added Successfully', 
           {position: toast.POSITION.TOP_CENTER})
      setEventName("");
      setEventDate("");
    } else {
      toast.warning('Please fill out all fields', 
           {position: toast.POSITION.TOP_CENTER})
    }
  };

  return (
    <div>
        <ToastContainer/>
      <h3 className="text-2xl font-sans font-semibold text-center p-2 text-blue-500">
        Create Event
      </h3>
      <div className="flex-col flex  my-2 items-center gap-1 justify-center m-auto ">
        <span className="">
          Event Name
        </span>
          <input
            className=" mx-2 w-[50%] border-2 p-1 rounded-md focus:outline-none border-grey"
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
      </div>
      <div className="flex-col flex  my-2 items-center gap-1 justify-center m-auto ">
      <span className="">
          Event Date
        </span>
          <input
            className=" mx-2 w-[50%] border-2 p-1 rounded-md focus:outline-none border-grey"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
      </div>
      <button
        className=" bg-green-500 p-2 gap-1 my-3 w-[50%] rounded-md text-white flex m-auto justify-center items-center"
        onClick={handleAddEvent}
      >
        Add Event
      </button>
    </div>
  );
};

export default EventForm;

import React from 'react';

const EventList = ({ events }) => {
  return (
    <div className="flex border-2 border-white p-2 mx-20  flex-col justify-center items-center m-auto my-2">
      <h2 className="bg-cyan-600 w-full text-center text-white p-2 rounded-md font-bold">Event List</h2>

      {events.length===0 && <h2 className='my-2'>No events</h2>}
     {events && 
      <ul>
        {events.map((event, index) => (
          <li className='p-2 m-2 bg-gray-700 rounded-md w-full' key={index}>
        {index+1})  {event.name} -- {event.date}
          </li>
        ))}
      </ul>
     }
    </div>
  );
};

export default EventList;

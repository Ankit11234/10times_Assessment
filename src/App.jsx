import React, { useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [events,setEvents] = useState([]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };
  console.log(events);

  return (
    <div>
      <nav className="flex justify-between items-center bg-black text-white px-3 p-2 w-screen ">
        <span className="hover:border-b-2 hover:border-white">
          <Link to="/">Create Event</Link>
        </span>
        <span className="hover:border-b-2 hover:border-white">
          <Link to="/events">Event List</Link>
        </span>
      </nav>
      <Routes>
        <Route path="/" element={<EventForm onAddEvent={handleAddEvent} />} />
        <Route path="/events" element={<EventList events={events} />} />
        {/* <EventList events={events} /> */}
      </Routes>
    </div>
  );
};

export default App;

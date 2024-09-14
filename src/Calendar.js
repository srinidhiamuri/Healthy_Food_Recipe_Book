import React, { useState } from 'react';
import './Calendar.css';
import Popup from './Popup'; // Import the new Popup component

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null); // Track selected day
  const [showPopup, setShowPopup] = useState(false); // Track popup visibility

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowPopup(false); // Close popup when month changes
  };

  const handleDayClick = (day) => {
    setSelectedDay(day); // Set the selected day
    setShowPopup(true); // Show the popup
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const renderCalendar = () => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDay = new Date(year, month).getDay();

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 1 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
      daysInMonth[1] = 29;
    }

    const calendar = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(null);
        } else if (day > daysInMonth[month]) {
          week.push(null);
        } else {
          week.push(day);
          day++;
        }
      }
      calendar.push(week);
    }

    return calendar.map((week, index) => (
      <div key={index} className="calendar-week">
        {week.map((day, index) => (
          <div
            key={index}
            className="calendar-day"
            onClick={() => day && handleDayClick(day)} // Add click event to day
          >
            {day}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h2>{new Date(date).toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => handleDateChange(new Date(date.getFullYear(), date.getMonth() - 1))}>Previous</button>
        <button onClick={() => handleDateChange(new Date(date.getFullYear(), date.getMonth() + 1))}>Next</button>
      </div>
      <div className="calendar-grid">
        {renderCalendar()}
      </div>

      {showPopup && <Popup selectedDay={selectedDay} closePopup={closePopup} />}
    </div>
  );
}

export default Calendar;

import React from 'react';
import './Popup.css';

const Popup = ({ selectedDay, closePopup }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Selected Day: {selectedDay}</h3>
        <h2>Item: </h2>
        <h2>Cal:{selectedDay} </h2>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default Popup;

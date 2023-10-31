// RechargePlan.js

import React, { useState } from 'react';

const ChoosePlan = () => {
  const [duration, setDuration] = useState('monthly');
  const [netSpeed, setNetSpeed] = useState('4G');
  
  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };
  
  const handleNetSpeedChange = (e) => {
    setNetSpeed(e.target.value);
  };

  return (
    <div>
      <h2>Phone Recharge Plans</h2>

      <div>
        <label>Select Duration:</label>
        <select value={duration} onChange={handleDurationChange}>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div>
        <label>Select Net Speed:</label>
        <select value={netSpeed} onChange={handleNetSpeedChange}>
          <option value="4G">4G</option>
          <option value="5G">5G</option>
        </select>
      </div>

      <div>
        <h3>Available Recharge Plans:</h3>
        <ul>
          {duration === 'monthly' && netSpeed === '4G' && (
            <li>Monthly 4G Plan: $20</li>
          )}
          {duration === 'monthly' && netSpeed === '5G' && (
            <li>Monthly 5G Plan: $30</li>
          )}
          {duration === 'yearly' && netSpeed === '4G' && (
            <li>Yearly 4G Plan: $200</li>
          )}
          {duration === 'yearly' && netSpeed === '5G' && (
            <li>Yearly 5G Plan: $300</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ChoosePlan;

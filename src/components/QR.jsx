import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './QR.css';

function QR() {
  const [inputValue, setInputValue] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowQRCode(false);
  };

  const generateQRCode = () => {
    setShowQRCode(true);
  };

  return (
    <div className="app-container">
      <div className="container">
        <div className="content">
          <h1>Enter Your text or URL</h1>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter text or URL"
          /> <br/><br/>
          <button onClick={generateQRCode}>Generate QR Code</button>
          {showQRCode && <QRCode value={inputValue} size={128} />}
        </div>
      </div>
    </div>
  );
}

export default QR;

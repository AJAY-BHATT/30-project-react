import React, { useState } from 'react'

const Nine = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const handleClick = ()=>{
    const newColor = backgroundColor === 'white' ? 'yellow' : 'white';
    setBackgroundColor(newColor)
  }
  return (
    <div  onClick={handleClick} style={{
      backgroundColor,
      width: '100px',
      height: '100px',
      cursor: 'pointer'
    }}>
      click me to change color......
    </div>
  )
}

export default Nine
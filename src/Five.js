import React, { useState } from 'react'

const Five = () => {
    const [isToggled, setIsToggoled] = useState(false);
    const hadleToggle = ()=>{
        setIsToggoled(!isToggled);
    }
  return (
    <div>
        <label>
            <input type='checkbox' onChange={hadleToggle}/>
            
        </label>
        <p>{isToggled ? "ON" : "Off"}</p>
    </div>
  )
}

export default Five;
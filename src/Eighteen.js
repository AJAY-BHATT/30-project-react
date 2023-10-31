import React from 'react'
import { useTheme } from './ThemeContext'

export default function Eighteen() {
    const{isDarkMode, toggleTheme} = useTheme();
  return (
    <div>
        <label>
            <input type='checkbox' checked={isDarkMode} onChange={toggleTheme}/>
            Dark Mood
        </label>
    </div>
  )
}

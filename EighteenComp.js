import React from 'react'
import { useTheme } from './ThemeContext'
import './styles/Eighteen.css';

export default function EighteenComp() {
    const {isDarkMode} = useTheme();
    const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';
  return (
    <div className={`container ${themeClass}`}>
    <p> this component uses selected theme</p>

    
    </div>
  )
}

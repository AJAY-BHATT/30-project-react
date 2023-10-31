import React, { useState } from 'react'
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import { Eight } from './Eight';
import Nine from './Nine';
import Ten from './Ten';
import Eleven from './Eleven';
import Twelve from './Twelve';
import Thirteen from './Thirteen';
import Fourteen from './Fourteen';
import Fifteen from './Fifteen';
import { Sixteen } from './Sixteen';
import { Seventeen } from './Seventeen';
import Eighteen from './Eighteen';
import EighteenComp from './EighteenComp';
import { ThemeProvider } from './ThemeContext';
import ToggleButton from './ToggleButton';
const darkModeStyles = {
  backgroundColor: 'black',
  color: 'white',
};

const lightModeStyles = {
  backgroundColor: 'white',
  color: 'black',
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  //const items = ['Item 1', 'Item 2', 'Item 3 ', 'Another Item', 'Another Item 2'];
  return (
    
    <div>
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <ToggleButton />
      {/* ... other components */}
    </div>
    <hr/>
    <p>Counter button</p>
    <Two/>
    <hr/>
    <p> user input</p>
    <Three/>
    <hr/>
    <p>Build a list component to display a list of items</p>
    <Four/>
    <hr/>
    <p>Implement a basic toggle switch component.</p>
    <Five/>

    <hr/>
    <p> Create a component that fetches data from an API and  display It.</p>
    <Six/>
    <hr/>
    <p> Build a timer that counts down from a specified time.</p>
    <Seven/>
    <hr/>
    <p> Implement a simple to-do list application with add and remove functionality</p>
    <Eight/>
    <hr/>
    <p> Create a component that changes its background color when clicked</p>
    <Nine/>
    <hr/>
    <p>Basic Routing</p>
    <Ten/>
    <hr/>
    <p>Create a component that display a randam quote each time it is rendered.</p>
    <Eleven/>
    <hr/>
    <p> Build a file uploader component that allows users to upload images.</p>
    <Twelve/>
    <hr/>
    <h4>13</h4>
    <p> Implement a basic authentication from with login and registration</p>
    <Thirteen/>
    <hr/>
    <h4>14</h4>
    <p> Develop a weather app that fetches and display weather infomation based on a user's location</p>
    <Fourteen/>
    <hr/>
    <h4>15</h4>
    <p>Build a search bar that filters a list of items based on user input</p>
    <Fifteen />
    <hr/>
    <h4>16</h4>
    <p> Build a color picker that allows users to select a color</p>
    <Sixteen/>
    <hr/>
    <h4>17</h4>
    <p>Implement a responsive navigation menu with a hamburger icon.</p>
    <Seventeen/>
    <hr/>
    <p> light dark</p>
    <ThemeProvider>
    <div className='App'>

      <Eighteen/>
      <EighteenComp/>
      </div>
    </ThemeProvider>
    


    
    
    </div>
  )
}

export default App;
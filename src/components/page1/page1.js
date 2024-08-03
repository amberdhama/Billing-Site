import React, { useState } from 'react';
import Card from '../card/Card';
import './page1.css';
import { NavLink } from 'react-router-dom';
const Page1 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`page1 ${darkMode ? 'dark' : 'light'}`}>
      <div className='background'></div>
      <div className='curve'></div>
      <img src="/images/logo.png" alt="Logo" className='logo' />
      <h1 className='choose'>Where will you be eating today?</h1>
      
      <div className='dinetake'>
        <NavLink to="/DineIn/menu">  <Card 
          img="/images/DineIn.png" 
          content="Dine In" 
        /></NavLink>
        <NavLink to="/DineIn/menu"><Card 
          img="/images/TakeAway.png" 
          content="Take Away" 
        /></NavLink>
      </div>
      <div className={`toggle-container ${darkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
        <div className={`toggle-ball ${darkMode ? 'dark' : 'light'}`}></div>
      </div>
    </div>
  );
};
export default Page1;
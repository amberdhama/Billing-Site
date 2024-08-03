import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './components/page1/page1';
// import Menu from './components/menu/Menu'; // Make sure this path is correct

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Navbar/Footer/Footer';


const MainLayouts = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default MainLayouts;
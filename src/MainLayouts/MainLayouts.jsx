import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Navbar/Footer/Footer';
import ScrollTop from '../ScrollTop/ScrollTop';


const MainLayouts = () => {
  return (
    <div>
      <ScrollTop/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default MainLayouts;
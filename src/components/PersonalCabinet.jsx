// PersonalCabinet.js
import React from 'react';
import Profile from './forCabinet/Profile';
import ScheduleTable from './forCabinet/ScheduleTable';
import Header from './Header';
import Footer from './Footer';

const PersonalCabinet = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <Profile />
      <Footer/>
    </div>
  );
};
  export default PersonalCabinet;

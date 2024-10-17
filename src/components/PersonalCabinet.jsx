// PersonalCabinet.js
import React from 'react';
import Profile from './Profile';
import ScheduleTable from './ScheduleTable';

const PersonalCabinet = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Profile />
      <ScheduleTable />
    </div>
  );
};
  export default PersonalCabinet;

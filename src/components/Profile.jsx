// Profile.js
import React from 'react';

const Profile = () => {
  return (
    <div className="p-8 text-center bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      <img
        src="profile_photo_url"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h3 className="text-2xl font-semibold mb-2">Алексеев Вячеслав Владиславович</h3>
      <p className="text-gray-700">Табельный номер: 5744</p>
      <p className="text-gray-700">Должность: водитель</p>
      <p className="text-gray-700">Категории: B, C</p>
    </div>
  );
};

export default Profile;

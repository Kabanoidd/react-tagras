// Profile.js
import React from 'react';
import prof from '@/images/prof.png';
import tag from '@/images/TagTrans.png';
import ScheduleTable from './ScheduleTable';
import YandexMap from './map';


const Profile = () => {
  return (
    <div className='bg-[url(./images/bg_cab.png)] bg-cover'> 
      <div className='max-w-[1600px] w-full m-auto pt-[40px]'>
        <h2 className='text-2xl font-semibold'>Личный Кабинет</h2>
        <div className='flex justify-between'>
          <div className=' pt-[40px] text-[20px] flex flex-col '>
            <div className='flex gap-[30px]'>
              <img src={prof} alt="Фото профиля" className=' rounded-full w-[128px] h-[128px]' />
              <div>
                <h3 className=' font-semibold'>Алексеев Вячеслав Владиславович</h3>
                <p className=' text-[#009AA2]'>Табельный номер:  5744</p>
                <p className=' text-[#009AA2]'>Должность: водитель </p>
                <p className=' text-[#009AA2]'>Категории: В, С </p>
              </div>
            </div>
            <ScheduleTable />
          </div>
          <div className='flex flex-col'>
            <img src={tag} alt="Таграс" className='mb-[100px]' />
            <YandexMap />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Profile;

// MainContent.js
import React from 'react';
import main_2 from '../images/main_2.png';
import MainCards from './forMain/cardsMain';
import TopSectionMain from './forMain/topSectionMain';
import MainSectionMain from './forMain/MainSectionMain';

const MainContent = () => {
  return (
    <section className="p-0">
      <TopSectionMain />
      <div className='bg-[url(./images/bg.png)] max-h-full'>
        <MainSectionMain />
        < MainCards />
      </div>
    </section>
  );
}
export default MainContent;

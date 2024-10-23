// Header.js
import React from 'react';
import logo from '../images/logo.png';
import auto from '../images/auto.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-[#B6D4F0]">
      <div className="container flex items-center justify-between ml-auto mr-auto">
        <div className="logo">
          <img src={logo} alt="Таграс Логотип" className="max-h-89px max-w-82px" />
        </div>
        <nav className="space-x-[100px]">
          <a href="/" className="text-[#005C62] hover:underline text-xl">Главная</a>
          <a href="/news" className="text-[#005C62] hover:underline text-xl">Новости</a>
        </nav>
        <a href="/login" className="text-[#005C62] hover:underline flex items-center gap-3 text-xl"><img src={auto} alt="Вход" className='max-w-[40px] max-h-[40px]' />Вход</a>
      </div>
    </header>
  );
}
export default Header;
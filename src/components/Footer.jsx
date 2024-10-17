// Footer.js
import React from 'react';
import mail from '../images/mail.svg';
import phone from '../images/phone.svg';
const Footer = () => {
  return (
    <footer className="bg-blue-100 p-4 text-center flex justify-between w-full h-[130px] items-center">
      <nav className="flex gap-3">
        <a href="/" className="text-[#005C62] hover:underline text-xl">Главная</a>
        <a href="/news" className="text-[#005C62] hover:underline text-xl">Новости</a>
      </nav>
      <div className="flex justify-center items-center space-x-4">
        <a href="mailto:priem_tts@tgrsts.ru" className="text-[#005C62] flex gap-1 hover:underline cursor-pointer"><img src={mail} alt="#" />priem_tts@tgrsts.ru</a>
        <span className="text-[#005C62] flex gap-1 hover:underline cursor-pointer"><img src={phone} alt="#" />8 (8553) 37-16-64</span>
      </div>
    </footer>
  );
}
export default Footer;

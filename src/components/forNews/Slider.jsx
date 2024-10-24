import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import slide1 from '../../images/slide1.png'

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className='py-[100px]'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='bg-[url(./images/slide1.png)] bg-cover h-[524px] w-[1102px] m-auto text-white '>
            <h2>Всемирный день охраны труда в “ТаграС-ТрансСервис” </h2>
            <p>— Мы должны ценить и уважать своих сотрудников, создавать им условия  для безопасной работы. Ежегодно на эти цели выделяются денежные  средства, проводятся различные мероприятия. Будем и  дальше продолжать эту работу, улучшать ее, совершенствоваться.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[url(./images/slide2.png)] bg-cover h-[524px] w-[1102px] m-auto text-white'>
            <h2>Эксперты “ТаграС-ТрансСервис” поделились своими знаниями и опытом на форуме ”Smart Oil & Gas 2024” </h2>
            <p>Smart  Oil & Gas – уникальная независимая площадка для обсуждения и обмена  опытом по ключевым вопросам и актуальным проблемам цифровой  трансформации, развития ИТ-систем и промышленной автоматизации в  нефтегазовой отрасли РФ.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-[url(./images/slide3.png)] bg-cover h-[524px] w-[1102px] m-auto text-white'>
            <h2>“ТаграС-ТрансСервис” пополнил парк спецтехники</h2>
            <p>–  Приобретение новой техники позволяет уменьшать долю транспорта,  используемого посредством субподряда, тем самым, увеличивая  эффективность и производительность, а также обновлять существующий парк  техники. Так, в прошлом году на обновление подвижного состава компания  инвестировала 1,7 млрд рублей, что выше уровня 2022 года на 143%.  Закуплено 386 единиц новой техники и прицепов, – говорит директор  «ТаграС-ТрансСервис» Владимир Чернышев.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
const MainCards = () => {
  return (
    <div className="flex flex-col md:flex-row pt-10 pb-12 justify-between max-w-[1250px] m-auto gap-3">
      <div className="p-3 bg-[#B6E5F0] md:w-80 shadow-mdrounded-lg">
        <h3 className="text-xl font-bold mb-2 text-[#00474B]">Миссия</h3>
        <p>На стыке технологии и опыта находить эффективные решения в обеспечении  полного комплекса сервисных услуг</p>
      </div>
      <div className="p-3  bg-[#B6E5F0] md:w-80">
        <h3 className="text-xl font-bold mb-2 text-[#00474B]">Принципы</h3>
        <ul className='pl-0'>
          <li>Мы изучаем потребности клиентов и предлагаем лучшие решения.</li>
          <li>Мы бережем ресурсы </li>
          <li>Мы приветствуем новые идеи и инициативу.</li>
          <li>Мы работаем на результат.</li>
        </ul>
      </div>
      <div className="p-3 bg-[#B6E5F0] md:w-80">
        <h3 className="text-xl font-bold mb-2 text-[#00474B]">Ценности</h3>
        <ul>
          <li>Коллектив</li>
          <li>Ответственность</li>
          <li>Безопасность</li>
          <li>Инновационность</li>
          <li>Эффективность</li>
        </ul>
      </div>
    </div>
  )
};
export default MainCards;


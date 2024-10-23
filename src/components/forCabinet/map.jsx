import React, { useEffect } from 'react';

const YandexMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    script.async = true;
    script.onload = () => {
      const ymaps = window.ymaps;
      ymaps.ready(init);
    };
    document.body.appendChild(script);

    function init() {
      const myMap = new window.ymaps.Map("map", {
        center: [54.900560, 52.275402],
        zoom: 16,
      });

      const myPlacemark = new window.ymaps.Placemark([55.751574, 37.573856], {
        balloonContent: 'Альметьевск',
      });

      myMap.geoObjects.add(myPlacemark);
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: '600px', height: '400px', marginBottom: '100px',}} />;
};




export default YandexMap;

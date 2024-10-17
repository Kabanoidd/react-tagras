// ScheduleTable.js
import React from 'react';

const ScheduleTable = () => {
  return (
    <div className="overflow-x-auto p-8">
      <table className="table-auto w-full bg-white rounded-lg shadow-lg">
        <thead className="bg-blue-200">
          <tr>
            <th className="p-2">Дата</th>
            <th className="p-2">Наименование цеха</th>
            <th className="p-2">Номер автомобиля</th>
            <th className="p-2">Время выезда</th>
            <th className="p-2">Время заезда</th>
            <th className="p-2">Фактическое время заезда</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-2">10.10.2024</td>
            <td className="p-2">Цех №1</td>
            <td className="p-2">А123БВ</td>
            <td className="p-2">08:00</td>
            <td className="p-2">12:00</td>
            <td className="p-2">12:15</td>
          </tr>
          {/* Добавьте больше строк, если необходимо */}
        </tbody>
      </table>
    </div>
  );
}
export default ScheduleTable;

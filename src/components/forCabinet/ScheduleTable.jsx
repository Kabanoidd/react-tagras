// ScheduleTable.js
import React from 'react';
import {Table, TableCaption, TableHeader, TableRow, TableBody, TableCell, TableHead} from '@/components/ui/table'

const ScheduleTable = () => {
  return (
    <div>
          <div className="overflow-x-auto py-8 w-[730px] ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Дата</TableHead>
            <TableHead>Наименование цеха</TableHead>
            <TableHead>Номер автомобиля</TableHead>
            <TableHead className="text-right">Время выезда</TableHead>
            <TableHead className="text-right">Время заезда</TableHead>
            <TableHead className="text-right">Фактическое время заезда</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">null</TableCell>
            <TableCell>null</TableCell>
            <TableCell>null</TableCell>
            <TableCell className="text-right">null</TableCell>
            <TableCell className="text-right">null</TableCell>
            <TableCell className="text-right">null</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    </div>

  );
}
export default ScheduleTable;

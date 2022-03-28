import React, { useState, FC } from 'react';
import moment from 'moment';
import { CalendarWrapper } from './Calendar.styled';
import { MonthView } from './MonthView/MonthView';
import { DateGrid } from './DateGrid/DateGrid';

const Calendar: FC = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const prevMonthHandler = () => {
    setCurrentDate((date) => date.clone().subtract(1, 'month'));
  };

  const nextMonthHandler = () => {
    setCurrentDate((date) => date.clone().add(1, 'month'));
  };

  const todayMonthHandler = () => {
    setCurrentDate(moment());
  };

  return (
    <CalendarWrapper>
      <MonthView
        currentDate={currentDate}
        nextMonthHandler={nextMonthHandler}
        prevMonthHandler={prevMonthHandler}
        todayMonthHandler={todayMonthHandler}
      />
      <DateGrid currentDate={currentDate} />
    </CalendarWrapper>
  );
};

export { Calendar };

import React, { useState } from 'react';
import moment from 'moment';
import { CalendarWrapper } from './Calendar.styled';
import { AppBar } from './AppBar/AppBar';
import { DateGrid } from './DateGrid/DateGrid';

const Calendar = () => {
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
      <AppBar
        currentDate={currentDate}
        prevMonthHandler={prevMonthHandler}
        nextMonthHandler={nextMonthHandler}
        todayMonthHandler={todayMonthHandler}
      />
      <DateGrid currentDate={currentDate} />
    </CalendarWrapper>
  );
};

export { Calendar };

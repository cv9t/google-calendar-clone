import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { CalendarWrapper } from './Calendar.styled';
import { AppBar } from './AppBar/AppBar';
import { DateGrid } from './DateGrid/DateGrid';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks';

const Calendar = observer(() => {
  const { weatherStore } = useStore();
  const [currentDate, setCurrentDate] = useState(moment());
  const [transitionDirection, setTransitionDirection] = useState<'right' | 'left'>('right');

  useEffect(() => {
    weatherStore.loadWeather();
  }, []);

  const prevMonthHandler = () => {
    setTransitionDirection('left');
    setCurrentDate((date) => date.clone().subtract(1, 'month'));
  };

  const nextMonthHandler = () => {
    setTransitionDirection('right');
    setCurrentDate((date) => date.clone().add(1, 'month'));
  };

  const todayMonthHandler = () => {
    setTransitionDirection(moment().diff(currentDate) < 0 ? 'left' : 'right');
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
      <DateGrid currentDate={currentDate} transitionDirection={transitionDirection} />
    </CalendarWrapper>
  );
});

export { Calendar };

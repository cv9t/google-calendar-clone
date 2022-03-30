import React, { FC } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import moment, { Moment } from 'moment';
import { useDateGrid, useStore } from '../../../hooks/.';
import { DateGridWrapper, Weekday, WeekdayList, GridWrapper } from './DateGrid.styled';
import { DateRow } from '../DateRow/DateRow';

interface IDateGridProps {
  currentDate: Moment;
}

const DateGrid: FC<IDateGridProps> = observer(({ currentDate }) => {
  const { eventStore } = useStore();
  const { dateGrid, currentWeekday } = useDateGrid(currentDate, [...eventStore.events]);

  return (
    <DateGridWrapper>
      <WeekdayList>
        {moment.weekdaysShort().map((weekday, idx) => (
          <Weekday key={weekday} className={cn({ current: idx === currentWeekday })}>
            {weekday}
          </Weekday>
        ))}
      </WeekdayList>
      <GridWrapper>
        {dateGrid.map((row, idx) => (
          <DateRow key={idx} row={row} currentDate={currentDate} />
        ))}
      </GridWrapper>
    </DateGridWrapper>
  );
});

export { DateGrid };

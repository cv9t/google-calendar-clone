import React, { FC, useEffect, memo } from 'react';
import { Typography } from '@mui/material';
import moment, { Moment } from 'moment';
import { CalendarTypes } from '../../../types';
import { DateCellWrapper, DateWrapper } from './DateCell.styled';
import cn from 'classnames';
import { WeatherDisplay } from '../WeatherDisplay/WeatherDisplay';

interface IDateCellProps {
  currentDate: Moment;
  cell: CalendarTypes.Cell;
}

const DateCell: FC<IDateCellProps> = ({ currentDate, cell }) => {
  useEffect(() => {
    console.log('DateCell render');
  });

  const weatherAvailable = () => {
    const diff = cell.date.diff(moment(), 'days');
    return diff >= 0 && diff < 7;
  };

  return (
    <DateCellWrapper>
      <DateWrapper
        className={cn({
          'another-month': !cell.date.isSame(currentDate, 'month'),
          today: cell.date.isSame(moment(), 'date'),
        })}
      >
        <Typography component="span" m={0.5} pb={0.25}>
          {cell.date.format('D')}
        </Typography>
        {weatherAvailable() && (
          <WeatherDisplay date={cell.date} hasEvents={cell.events.length > 0} />
        )}
      </DateWrapper>
    </DateCellWrapper>
  );
};

const MemoizedDateCell = memo(DateCell);

export { MemoizedDateCell as DateCell };

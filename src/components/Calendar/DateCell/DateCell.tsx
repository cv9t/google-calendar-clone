import React, { FC } from 'react';
import { Typography } from '@mui/material';
import moment, { Moment } from 'moment';
import { calendarTypes } from '../../../types';
import { DateCellWrapper, DateWrapper } from './DateCell.styled';
import cn from 'classnames';

interface IDateCellProps {
  currentDate: Moment;
  cell: calendarTypes.ICell;
}

const DateCell: FC<IDateCellProps> = ({ currentDate, cell }) => {
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
      </DateWrapper>
    </DateCellWrapper>
  );
};

export { DateCell };

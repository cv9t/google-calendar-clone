import React, { FC } from 'react';
import { Moment } from 'moment';
import { calendarTypes } from '../../../types';
import { DateRowWrapper } from './DateRow.styled';
import { Box } from '@mui/material';
import { DateCell } from '../DateCell/DateCell';

interface IDateRowProps {
  currentDate: Moment;
  row: calendarTypes.ICell[];
}

const DateRow: FC<IDateRowProps> = ({ currentDate, row }) => {
  return (
    <DateRowWrapper>
      <Box sx={{ display: 'flex', flex: 1 }}>
        {row.map((cell) => (
          <DateCell key={cell.id} currentDate={currentDate} cell={cell} />
        ))}
      </Box>
    </DateRowWrapper>
  );
};

export { DateRow };

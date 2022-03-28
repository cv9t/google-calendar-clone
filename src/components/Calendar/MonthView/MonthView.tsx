import React, { FC } from 'react';
import { Moment } from 'moment';
import { Grid, Tooltip, IconButton, Button, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MonthViewWrapper } from './MonthView.styled';

interface IMonthViewProps {
  currentDate: Moment;
  nextMonthHandler: () => void;
  prevMonthHandler: () => void;
  todayMonthHandler: () => void;
}

const MonthView: FC<IMonthViewProps> = ({
  currentDate,
  nextMonthHandler,
  prevMonthHandler,
  todayMonthHandler,
}) => {
  return (
    <MonthViewWrapper>
      <Grid container alignItems={'center'} spacing={2}>
        <Grid item xs="auto">
          <Tooltip title="Previous month">
            <IconButton onClick={prevMonthHandler} sx={{ marginRight: 0.5 }}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Next month">
            <IconButton onClick={nextMonthHandler}>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid container item xs="auto" alignItems="center" spacing={3.5}>
          <Grid item>
            <Button variant="contained" onClick={todayMonthHandler}>
              Today
            </Button>
          </Grid>
          <Grid item>
            <Typography fontSize="20px">{currentDate.format('MMMM YYYY')}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </MonthViewWrapper>
  );
};

export { MonthView };

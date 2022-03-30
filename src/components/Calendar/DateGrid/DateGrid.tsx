import React, { FC } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import moment, { Moment } from 'moment';
import { useDateGrid, useStore } from '../../../hooks/.';
import { DateGridWrapper, Weekday, WeekdayList, GridWrapper } from './DateGrid.styled';
import { DateRow } from '../DateRow/DateRow';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

interface IDateGridProps {
  currentDate: Moment;
  transitionDirection: 'right' | 'left';
}

const DateGrid: FC<IDateGridProps> = observer(({ currentDate, transitionDirection }) => {
  const { eventStore } = useStore();
  const { dateGrid, currentWeekday } = useDateGrid(currentDate, [...eventStore.events]);

  return (
    <DateGridWrapper transitionDirection={transitionDirection}>
      <WeekdayList>
        {moment.weekdaysShort().map((weekday, idx) => (
          <Weekday key={weekday} className={cn({ current: idx === currentWeekday })}>
            {weekday}
          </Weekday>
        ))}
      </WeekdayList>
      <SwitchTransition>
        <CSSTransition key={currentDate.month()} timeout={200} classNames="slide">
          <GridWrapper>
            {dateGrid.map((row, idx) => (
              <DateRow key={idx} row={row} currentDate={currentDate} />
            ))}
          </GridWrapper>
        </CSSTransition>
      </SwitchTransition>
    </DateGridWrapper>
  );
});

export { DateGrid };

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { grey } from '@mui/material/colors';

interface IDateGridWrapperProps {
  transitionDirection: 'left' | 'right';
}

export const DateGridWrapper = styled.div<IDateGridWrapperProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  overflow: hidden;

  ${({ transitionDirection }) =>
    css`
      .slide-enter {
        opacity: 0;
        transform: ${transitionDirection === 'right' ? 'translateX(5%)' : 'translateX(-5%)'};
      }
      .slide-enter-active,
      .slide-exit {
        opacity: 1;
        transform: translateX(0);
      }
      .slide-exit-active {
        opacity: 0;
        transform: ${transitionDirection === 'right' ? 'translateX(-5%)' : 'translateX(5%)'};
      }
      .slide-enter-active,
      .slide-exit-active {
        transition: opacity 0.2s linear, transform 0.2s linear;
      }
    `}
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-top: 1px solid ${grey[300]};
  border-left: 1px solid ${grey[300]};
`;

export const WeekdayList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Weekday = styled.div`
  flex: 1;
  padding-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  &.current {
    font-weight: 500;
  }
`;

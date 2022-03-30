import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { grey } from '@mui/material/colors';

export const WeatherIcon = styled.div`
  width: 40%;
  height: 64px;
  svg > path {
    fill: ${grey[500]};
  }
`;

export const WeatherTemp = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  color: ${grey[500]};
  z-index: 0;

  &.moved {
    top: 6px;
    right: 5px;
    transform: translate(0);
  }
`;

interface IWeatherDisplayProps {
  transitionDirection: 'up' | 'down';
}

export const WeatherDisplayWrapper = styled.div<IWeatherDisplayProps>`
  ${({ transitionDirection }) =>
    transitionDirection &&
    css`
      .move-enter,
      .move-exit {
        top: ${transitionDirection === 'up' ? '6px' : '50%'};
        right: ${transitionDirection === 'up' ? '5px' : '50%'};
        transform: ${transitionDirection === 'up' ? 'translate(0)' : 'translate(50%, -50%)'};
      }

      .move-enter,
      .move-exit {
        transition: top 1s ease-in, right 1s ease-in, transform 1s ease-in;
      }
    `}
`;

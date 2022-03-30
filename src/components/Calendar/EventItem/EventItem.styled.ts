import styled from '@emotion/styled';
import { css, Paper, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export const EventItemHeight = 30;

export const Container = styled(Paper)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100% - 4px);
  color: #fff;
  background-color: #4786ff;
  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background-color: #1871cc;
  }
`;

interface IEventItemWrapperProps {
  top: number;
  length: number;
  isEnd?: boolean;
  blank?: boolean;
  arrowRight?: boolean;
  arrowLeft?: boolean;
}

export const EventItemWrapper = styled.div<IEventItemWrapperProps>`
  position: absolute;
  top: ${({ top }) => `${top * EventItemHeight}px`};
  left: 0;
  z-index: 10;
  width: ${({ length }) => `calc(${length} * 100%)`};
  height: ${EventItemHeight}px;
  padding-right: ${({ isEnd }) => (isEnd ? '8px' : '0px')};

  ${({ blank }) =>
    blank &&
    css`
      z-index: -1;
    `}

  ${({ arrowRight }) =>
    arrowRight &&
    css`
      padding-right: 26px;

      ${Container} {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;

        &:hover::after {
          border-left-color: #1871cc;
          background-color: ${grey[300]};
        }

        &::after {
          content: '';
          position: absolute;
          right: -26px;
          border: 13px solid transparent;
          border-left: 13px solid #4786ff;
          transition: border-color 0.1s, background-color 0.1s;
        }
      }
    `}

  ${({ arrowLeft }) =>
    arrowLeft &&
    css`
      padding-left: 26px;
      ${Container} {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;

        &:hover::after {
          border-right-color: #1871cc;
          background-color: ${grey[300]};
        }

        &::after {
          content: '';
          position: absolute;
          left: -26px;
          border: 13px solid transparent;
          border-right: 13px solid #4786ff;
          transition: border-color 0.1s, background-color 0.1s;
        }
      }
    `}
`;

export const Title = styled(Typography)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

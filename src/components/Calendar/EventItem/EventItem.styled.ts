import styled from '@emotion/styled';
import { css, Paper, Typography } from '@mui/material';

export const EventItemHeight = 30;

interface IEventItemWrapperProps {
  top: number;
  length: number;
  isEnd?: boolean;
  isBlank?: boolean;
}

export const EventItemWrapper = styled.div<IEventItemWrapperProps>`
  position: absolute;
  top: ${({ top }) => `${top * EventItemHeight}px`};
  left: 0;
  z-index: 10;
  width: ${({ length }) => `calc(${length} * 100%)`};
  height: ${EventItemHeight}px;
  padding-right: ${({ isEnd }) => (isEnd ? '8px' : '0px')};

  ${({ isBlank }) =>
    isBlank &&
    css`
      z-index: -1;
    `}
`;

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

export const Title = styled(Typography)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

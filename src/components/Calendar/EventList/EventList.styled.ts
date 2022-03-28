import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { EventItemHeight } from '../EventItem/EventItem.styled';

export const EventListWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

interface IStyledButtonWrapperProps {
  top: number;
}

export const StyledButtonWrapper = styled.div<IStyledButtonWrapperProps>`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: 0;
  width: 100%;
  height: ${EventItemHeight}px;
  padding-right: 8px;
`;

export const StyledButton = styled(Button)`
  height: calc(100% - 4px);
  color: inherit;
  text-transform: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

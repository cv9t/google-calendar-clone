import styled from '@emotion/styled';
import { grey } from '@mui/material/colors';

export const DateCellWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  border-bottom: 1px solid ${grey[200]};
  border-right: 1px solid ${grey[200]};
`;

export const DateWrapper = styled.div`
  flex: 1;
  & > span {
    position: relative;
    display: flex;
    justify-content: center;
    width: 25px;
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: transparent;
      content: '';
    }
  }
  &.another-month > span {
    color: rgba(0, 0, 0, 0.3);
  }
  &.today > span {
    color: #1871cc;
    font-weight: 500;
    &::after {
      background-color: #1871cc;
    }
  }
`;

import styled from '@emotion/styled';
import { grey } from '@mui/material/colors';

export const DateGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  overflow: hidden;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-top: 1px solid ${grey[200]};
  border-left: 1px solid ${grey[200]};
`;

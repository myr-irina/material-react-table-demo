import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

function LayoutIncomeCostByProject({ children }) {
  const StyledTableWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  });

  return <StyledTableWrapper>{children}</StyledTableWrapper>;
}

export default LayoutIncomeCostByProject;

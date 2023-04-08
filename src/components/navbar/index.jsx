import * as React from 'react';
import { Link as RouterLink, Outlet } from 'react-router-dom';

import { Box } from '@mui/system';
import Link from '@mui/material/Link';

function NavBar() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          typography: 'body1',
          my: '20px',
        }}
      >
        <Link mr={2} component={RouterLink} to='/employees-plan'>
          Employees general plan
        </Link>
        <br />
        <Link component={RouterLink} to='/employees-fact'>
          Employees fact
        </Link>
        <br />
      </Box>
      <Outlet />
    </>
  );
}
export default NavBar;

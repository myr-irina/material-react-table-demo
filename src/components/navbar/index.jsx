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
          Сотрудники общий план
        </Link>
        <br />
        <Link mr={2} component={RouterLink} to='/employees-fact'>
          Сотрудники общий факт
        </Link>
        <br />
        <Link mr={2} component={RouterLink} to='/employees-project-plan'>
          Сотрудники по проектам план
        </Link>
        <br />
        <Link mr={2} component={RouterLink} to='/employees-project-fact'>
          Сотрудники по проектам факт
        </Link>
        <br />
      </Box>
      <Outlet />
    </>
  );
}
export default NavBar;

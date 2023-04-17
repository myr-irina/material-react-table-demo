import * as React from 'react';
import { Link as RouterLink, Outlet } from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { bottom } from '@popperjs/core';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: '100%', margin: '0 auto' }}>
      <Button
        sx={{ margin: '10px auto 20px' }}
        id='demo-positioned-button'
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Таблицы рабочего времени
      </Button>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MenuItem onClick={handleClose} component={RouterLink} to={'/'}>
          Сотрудники общий план
        </MenuItem>
        <MenuItem component={RouterLink} to={'/employees-fact'}>
          Сотрудники общий факт
        </MenuItem>
        <MenuItem component={RouterLink} to={'/employees-project-plan'}>
          Сотрудники по проектам план
        </MenuItem>
        <MenuItem component={RouterLink} to={'/employees-project-fact'}>
          Сотрудники по проектам факт
        </MenuItem>
        <MenuItem component={RouterLink} to={'/employees'}>
          Сотрудники план (тестовое)
        </MenuItem>
      </Menu>
      <Outlet />
    </Box>
  );
}

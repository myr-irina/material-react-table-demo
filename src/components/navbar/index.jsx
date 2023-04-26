import * as React from 'react';
import { Link as RouterLink, Outlet } from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import AppBar from '@mui/material/AppBar';

export default function NavBar() {
  const [anchorElEmployees, setAnchorElEmployees] = React.useState(null);
  const open = Boolean(anchorElEmployees);
  const handleClick = (event) => {
    setAnchorElEmployees(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElEmployees(null);
  };

  return (
    <>
      <AppBar
        position='static'
        sx={{ backgroundColor: 'grey', margin: '0.5rem auto 1rem' }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            sx={{
              margin: '10px auto 10px',
              color: 'white',
              fontSize: '1.2rem',
            }}
            id='demo-positioned-button'
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Сотрудники
          </Button>
          <Button
            sx={{
              margin: '10px auto 10px',
              color: 'white',
              fontSize: '1.2rem',
            }}
            id='demo-positioned-button'
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Бюджет доходов и расходов
          </Button>
          <Button
            sx={{
              margin: '10px auto 10px',
              color: 'white',
              fontSize: '1.2rem',
            }}
            id='demo-positioned-button'
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Движение денежных средств
          </Button>
          <Menu
            id='demo-positioned-menu'
            aria-labelledby='demo-positioned-button'
            anchorEl={anchorElEmployees}
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

            <MenuItem component={RouterLink} to={'/bdr-plan'}>
              БДР План
            </MenuItem>
            <MenuItem component={RouterLink} to={'/bdr-fact'}>
              БДР Факт
            </MenuItem>

            <MenuItem component={RouterLink} to={'/bdr-plan-general'}>
              БДР - общие данные
            </MenuItem>

            <MenuItem component={RouterLink} to={'/dds-plan'}>
              ДДС План
            </MenuItem>
            <MenuItem component={RouterLink} to={'/dds-fact'}>
              ДДС Факт
            </MenuItem>
          </Menu>
        </Box>
      </AppBar>
      <Outlet />
    </>
  );
}

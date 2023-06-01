import React, { forwardRef } from 'react';
import {
  Link as RouterLink,
  Outlet,
  NavLink as CustomNavLink,
} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/system';
import { Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function NavBar() {
  const [anchorElEmployees, setAnchorElEmployees] = React.useState(null);
  const [anchorBDR, setAnchorBDR] = React.useState(null);
  const [anchorDDS, setAnchorDDS] = React.useState(null);
  const [anchorElAccount, setAnchorElAccount] = React.useState(null);

  const openEmployees = Boolean(anchorElEmployees);
  const openBDR = Boolean(anchorBDR);
  const openDDS = Boolean(anchorDDS);

  const handleOpenEmployees = (event) => {
    setAnchorElEmployees(event.currentTarget);
  };
  const handleCloseEmployees = () => {
    setAnchorElEmployees(null);
  };

  const handleOpenBDR = (event) => {
    setAnchorBDR(event.currentTarget);
  };
  const handleCloseBDR = () => {
    setAnchorBDR(null);
  };

  const handleOpenDDS = (event) => {
    setAnchorDDS(event.currentTarget);
  };
  const handleCloseDDS = () => {
    setAnchorDDS(null);
  };

  const handleAccountMenu = (event) => {
    setAnchorElAccount(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAnchorElAccount(null);
  };

  return (
    <>
      <AppBar
        position='static'
        sx={{ backgroundColor: 'grey', margin: '0.5rem auto 1rem' }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            padding: 0,
          }}
        >
          <Grid item xs={11} sx={{ padding: 0 }}>
            <Button
              sx={{
                margin: '10px 10px 10px',
                color: 'white',
                fontSize: '1.2rem',
                border: 'none',
                outline: 'none',
                '&.MuiToggleButton-root.Mui-selected': {
                  backgroundColor: 'transparent',
                  color: 'white',
                  borderBottom: '2px solid white',
                },
              }}
              id='demo-positioned-button1'
              aria-controls={
                openEmployees ? 'demo-positioned-menu1' : undefined
              }
              aria-haspopup='true'
              aria-expanded={openEmployees ? 'true' : undefined}
              onClick={handleOpenEmployees}
              value='left'
              aria-label='left aligned'
            >
              Сотрудники
            </Button>
            <Button
              sx={{
                margin: '10px 10px 10px',
                color: 'white',
                fontSize: '1.2rem',
                border: 'none',
                outline: 'none',
                '&.MuiToggleButton-root.Mui-selected': {
                  backgroundColor: 'transparent',
                  color: 'white',
                  borderBottom: '2px solid white',
                },
              }}
              id='demo-positioned-button2'
              aria-controls={openBDR ? 'demo-positioned-menu2' : undefined}
              aria-haspopup='true'
              aria-expanded={openBDR ? 'true' : undefined}
              onClick={handleOpenBDR}
              value='center'
              aria-label='centered'
            >
              Бюджет доходов и расходов
            </Button>
            <Button
              sx={{
                margin: '10px 10px 10px',
                color: 'white',
                fontSize: '1.2rem',
                border: 'none',
                outline: 'none',
                '&.MuiToggleButton-root.Mui-selected': {
                  backgroundColor: 'transparent',
                  color: 'white',
                  borderBottom: '2px solid white',
                },
              }}
              id='demo-positioned-button3'
              aria-controls={openDDS ? 'demo-positioned-menu3' : undefined}
              aria-haspopup='true'
              aria-expanded={openDDS ? 'true' : undefined}
              onClick={handleOpenDDS}
              value='right'
              aria-label='right aligned'
            >
              Движение денежных средств
            </Button>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{ padding: 0, display: 'flex', justifyContent: 'center' }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleAccountMenu}
              color='inherit'
              edge='end'
            >
              <AccountCircle sx={{ fontSize: 35 }} />
            </IconButton>
            <Menu
              sx={{ mt: '30px' }}
              id='menu-appbar'
              anchorEl={anchorElAccount}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElAccount)}
              onClose={handleAccountClose}
            >
              <MenuItem onClick={handleAccountClose}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Grid>

        <Menu
          id='demo-positioned-menu1'
          aria-labelledby='demo-positioned-button1'
          anchorEl={anchorElEmployees}
          open={openEmployees}
          onClick={handleCloseEmployees}
          onClose={handleCloseEmployees}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MenuItem
            onClick={handleCloseEmployees}
            component={CustomNavLink}
            to={'/'}
            sx={{
              '&.active': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Таблица рабочего времени (Общий план)
          </MenuItem>
          <MenuItem
            component={CustomNavLink}
            to={'/employees-fact'}
            sx={{
              '&.active': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Таблица рабочего времени (Общий факт)
          </MenuItem>

          <MenuItem
            component={CustomNavLink}
            to={'/employees-project-plan'}
            sx={{
              '&.active': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Таблица рабочего времени план
          </MenuItem>
          <MenuItem
            component={CustomNavLink}
            to={'/employees-project-fact'}
            sx={{
              '&.active': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Таблица рабочего времени факт
          </MenuItem>
        </Menu>

        <Menu
          id='demo-positioned-menu2'
          aria-labelledby='demo-positioned-button2'
          anchorEl={anchorBDR}
          open={openBDR}
          onClick={handleCloseBDR}
          onClose={handleCloseBDR}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MenuItem
            component={CustomNavLink}
            to={'/bdr-totals-plan-split'}
            sx={{
              '&.active': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Таблица БДР (План)
          </MenuItem>
          <MenuItem
            component={CustomNavLink}
            to={'/bdr-totals-fact-split'}
            sx={{
              '&.active': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Таблица БДР (Факт)
          </MenuItem>
          <MenuItem
            component={CustomNavLink}
            to={'/bdr-plan-by-project'}
            sx={{
              '&.active': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Таблица БДР (План по проектам)
          </MenuItem>
          <MenuItem
            component={CustomNavLink}
            to={'/bdr-fact-by-project'}
            sx={{
              '&.active': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Таблица БДР (Факт по проектам)
          </MenuItem>
        </Menu>
        <Menu
          id='demo-positioned-menu3'
          aria-labelledby='demo-positioned-button3'
          anchorEl={anchorDDS}
          open={openDDS}
          onClick={handleCloseDDS}
          onClose={handleCloseDDS}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MenuItem
            component={CustomNavLink}
            to={'/dds-totals-plan-split'}
            sx={{
              '&.active': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Таблица ДДС (План)
          </MenuItem>
          <MenuItem
            component={CustomNavLink}
            to={'/dds-totals-fact-split'}
            sx={{
              '&.active': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Таблица ДДС (Факт)
          </MenuItem>
          <MenuItem
            component={CustomNavLink}
            to={'/dds-plan-by-project'}
            sx={{
              '&.active': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Таблица ДДС (План по проектам)
          </MenuItem>
          <MenuItem
            component={CustomNavLink}
            to={'/dds-fact-by-project'}
            sx={{
              '&.active': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Таблица ДДС (Факт по проектам)
          </MenuItem>
        </Menu>
      </AppBar>
      <Outlet />
    </>
  );
}

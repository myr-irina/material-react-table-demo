import React, { useState } from 'react';
import { Link as RouterLink, Outlet } from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';

export default function NavBar() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };

  const [anchorElEmployees, setAnchorElEmployees] = React.useState(null);
  const [anchorBDR, setAnchorBDR] = React.useState(null);
  const [anchorDDS, setAnchorDDS] = React.useState(null);

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
          <Tabs
            TabIndicatorProps={{
              sx: { backgroundColor: 'white' },
            }}
            value={currentTabIndex}
            onChange={handleTabChange}
            aria-label='nav tabs'
            textColor='primary'
            indicatorColor='secondary'
            variant='fullWidth'
            sx={{
              '& button': {
                color: 'white',
              },
              '& button:active': {
                color: 'white',
              },
              '& button.Mui-selected': {
                color: 'white',
              },
            }}
          >
            <Tab
              label='Сотрудники'
              id='demo-positioned-button1'
              aria-controls={
                openEmployees ? 'demo-positioned-menu1' : undefined
              }
              aria-haspopup='true'
              aria-expanded={openEmployees ? 'true' : undefined}
              onClick={handleOpenEmployees}
            />
            <Tab
              label='Бюджет доходов и расходов'
              id='demo-positioned-button2'
              aria-controls={openBDR ? 'demo-positioned-menu2' : undefined}
              aria-haspopup='true'
              aria-expanded={openBDR ? 'true' : undefined}
              onClick={handleOpenBDR}
            />
            <Tab
              label=' Движение денежных средств'
              id='demo-positioned-button3'
              aria-controls={openDDS ? 'demo-positioned-menu3' : undefined}
              aria-haspopup='true'
              aria-expanded={openDDS ? 'true' : undefined}
              onClick={handleOpenDDS}
            />
          </Tabs>
        </Box>

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
            component={RouterLink}
            to={'/'}
          >
            Таблица рабочего времени (Общий план)
          </MenuItem>
          <MenuItem component={RouterLink} to={'/employees-fact'}>
            Таблица рабочего времени (Общий факт)
          </MenuItem>

          <MenuItem component={RouterLink} to={'/employees-project-plan-test'}>
            Таблица рабочего времени план
          </MenuItem>
          <MenuItem component={RouterLink} to={'/employees-project-fact-test'}>
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
          <MenuItem component={RouterLink} to={'/bdr-totals-plan-split-test'}>
            Таблица БДР (План)
          </MenuItem>
          <MenuItem component={RouterLink} to={'/bdr-totals-fact-split-test'}>
            Таблица БДР (Факт)
          </MenuItem>
          <MenuItem component={RouterLink} to={'/bdr-plan-by-project-test'}>
            Таблица БДР (План по проектам)
          </MenuItem>
          <MenuItem component={RouterLink} to={'/bdr-fact-by-project-test'}>
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
          <MenuItem component={RouterLink} to={'/dds-totals-plan-split-test'}>
            Таблица ДДС (План)
          </MenuItem>
          <MenuItem component={RouterLink} to={'/dds-totals-fact-split-test'}>
            Таблица ДДС (Факт)
          </MenuItem>
          <MenuItem component={RouterLink} to={'/dds-plan-by-project-test'}>
            Таблица ДДС (План по проектам)
          </MenuItem>
          <MenuItem component={RouterLink} to={'/dds-fact-by-project-test'}>
            Таблица ДДС (Факт по проектам)
          </MenuItem>
        </Menu>
      </AppBar>
      <Outlet />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { Link as RouterLink, Outlet, Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';

export default function NavBar() {
  const [currentTabIndex, setCurrentTabIndex] = useState(1);
  let navigate = useNavigate();

  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };

  useEffect(() => {
    setCurrentTabIndex(currentTabIndex);
  }, [currentTabIndex, navigate]);

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

  const tabs = [
    {
      label: 'Сотрудники',
      value: 1,
      route: '/',
      onClick: handleOpenEmployees,
    },
    {
      label: 'Бюджет доходов и расходов',
      value: 2,
      route: '/bdr-totals-plan-split',
      onClick: handleOpenBDR,
    },
    {
      label: 'Движение денежных средств',
      value: 3,
      route: '/dds-totals-plan-split',
      onClick: handleOpenDDS,
    },
  ];

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
            centered
            sx={{
              width: '90%',
            }}
          >
            {tabs.map((tab) => {
              return (
                <Tab
                  component={Link}
                  to={tab.route}
                  sx={{
                    color: 'white',
                    '& button:active': {
                      color: 'white',
                    },
                    '&.Mui-selected': {
                      color: 'white',
                    },
                  }}
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                  icon={tab.icon}
                  onClick={tab.onClick}
                />
              );
            })}
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

          <MenuItem component={RouterLink} to={'/employees-project-plan'}>
            Таблица рабочего времени план
          </MenuItem>
          <MenuItem component={RouterLink} to={'/employees-project-fact'}>
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
          <MenuItem component={RouterLink} to={'/bdr-totals-plan-split'}>
            Таблица БДР (План)
          </MenuItem>
          <MenuItem component={RouterLink} to={'/bdr-totals-fact-split'}>
            Таблица БДР (Факт)
          </MenuItem>
          <MenuItem component={RouterLink} to={'/bdr-plan-by-project'}>
            Таблица БДР (План по проектам)
          </MenuItem>
          <MenuItem component={RouterLink} to={'/bdr-fact-by-project'}>
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
          <MenuItem component={RouterLink} to={'/dds-totals-plan-split'}>
            Таблица ДДС (План)
          </MenuItem>
          <MenuItem component={RouterLink} to={'/dds-totals-fact-split'}>
            Таблица ДДС (Факт)
          </MenuItem>
          <MenuItem component={RouterLink} to={'/dds-plan-by-project'}>
            Таблица ДДС (План по проектам)
          </MenuItem>
          <MenuItem component={RouterLink} to={'/dds-fact-by-project'}>
            Таблица ДДС (Факт по проектам)
          </MenuItem>
        </Menu>
      </AppBar>
      <Outlet />
    </>
  );
}

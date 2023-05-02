import * as React from 'react';
import { Link as RouterLink, Outlet } from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import AppBar from '@mui/material/AppBar';

export default function NavBar() {
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
          <Button
            sx={{
              margin: '10px auto 10px',
              color: 'white',
              fontSize: '1.2rem',
            }}
            id='demo-positioned-button1'
            aria-controls={openEmployees ? 'demo-positioned-menu1' : undefined}
            aria-haspopup='true'
            aria-expanded={openEmployees ? 'true' : undefined}
            onClick={handleOpenEmployees}
          >
            Сотрудники
          </Button>
          <Button
            sx={{
              margin: '10px auto 10px',
              color: 'white',
              fontSize: '1.2rem',
            }}
            id='demo-positioned-button2'
            aria-controls={openBDR ? 'demo-positioned-menu2' : undefined}
            aria-haspopup='true'
            aria-expanded={openBDR ? 'true' : undefined}
            onClick={handleOpenBDR}
          >
            Бюджет доходов и расходов
          </Button>
          <Button
            sx={{
              margin: '10px auto 10px',
              color: 'white',
              fontSize: '1.2rem',
            }}
            id='demo-positioned-button3'
            aria-controls={openDDS ? 'demo-positioned-menu3' : undefined}
            aria-haspopup='true'
            aria-expanded={openDDS ? 'true' : undefined}
            onClick={handleOpenDDS}
          >
            Движение денежных средств
          </Button>
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
            <MenuItem component={RouterLink} to={'/bdr-totals-plan'}>
              БДР План - общий
            </MenuItem>
            <MenuItem component={RouterLink} to={'/bdr-totals-plan-split'}>
              БДР План детальный
            </MenuItem>
            <MenuItem component={RouterLink} to={'/bdr-totals-fact-split'}>
              БДР Факт детальный
            </MenuItem>
            <MenuItem component={RouterLink} to={'/bdr-plan-by-project'}>
              БДР План по проектам
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
            <MenuItem component={RouterLink} to={'/dds-totals-plan'}>
              ДДС План - общий
            </MenuItem>
            <MenuItem component={RouterLink} to={'/dds-totals-plan-split'}>
              ДДС План детальный
            </MenuItem>
            <MenuItem component={RouterLink} to={'/dds-totals-fact-split'}>
              ДДС Факт детальный
            </MenuItem>
          </Menu>
        </Box>
      </AppBar>
      <Outlet />
    </>
  );
}

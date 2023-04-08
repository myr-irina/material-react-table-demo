import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar';
import EmployeesGeneralPlan from './components/employees/employees-general-plan';
import EmployeesGeneralFact from './components/employees/employees-general-fact';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='1280px'>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route path='/employees-plan' element={<EmployeesGeneralPlan />} />
            <Route path='/employees-fact' element={<EmployeesGeneralFact />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

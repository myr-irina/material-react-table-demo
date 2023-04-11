import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar';
import EmployeesGeneralPlan from './components/employees/employees-general-plan';
import EmployeesGeneralFact from './components/employees/employees-general-fact';
import EmployeesByProjectPlan from './components/employees/employees-by-project-plan';
import EmployeesByProjectFact from './components/employees/employees-by-project-fact';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='1280px'>
        <Routes>
          <Route element={<NavBar />}>
            <Route path='/employees-plan' element={<EmployeesGeneralPlan />} />
            <Route path='/employees-fact' element={<EmployeesGeneralFact />} />
            <Route
              path='/employees-project-plan'
              element={<EmployeesByProjectPlan />}
            />
            <Route
              path='/employees-project-fact'
              element={<EmployeesByProjectFact />}
            />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

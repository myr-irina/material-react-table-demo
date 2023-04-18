import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar';
// import EmployeesGeneralPlan from './components/employees/employees-general/employees-general-plan';
// import EmployeesGeneralFact from './components/employees/employees-general/employees-general-fact';
// import EmployeesByProjectPlan from './components/employees/employees-by-project-plan';
// import BasicTable from './components/employees/employees-plan/employees-plan';

import EmployeesGeneralPlan from './components/employees/employees-general/employees-general-plan';
import EmployeesGeneralFact from './components/employees/employees-general/employees-general-fact';

import EmployeesByProjectPlan from './components/employees/employees-by-project/employees-by-project-plan';
import EmployeesByprojectFact from './components/employees/employees-by-project/employees-by-project-fact';

import IncomeCostPlan from './components/income-cost-plan';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='1280px'>
        <Routes>
          <Route element={<NavBar />}>
            <Route path='/' element={<EmployeesGeneralPlan />} />

            <Route path='/employees-fact' element={<EmployeesGeneralFact />} />
            <Route
              path='/employees-project-plan'
              element={<EmployeesByProjectPlan />}
            />
            <Route
              path='/employees-project-fact'
              element={<EmployeesByprojectFact />}
            />
            <Route path='/bdr-plan' element={<IncomeCostPlan />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

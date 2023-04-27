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

import IncomeCostPlanGeneral from './components/income-cost/income-cost-plan-general';
import IncomeCostPlan from './components/cash-flow/cash-flow-plan';
import IncomeCostFact from './components/income-cost/income-cost-fact';
import CashFlowPlan from './components/cash-flow/cash-flow-plan';
import CashFlowFact from './components/cash-flow/cash-flow-fact';
import CashFlowTotalsPlan from './components/cash-flow/cash-flow-totals-plan';

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
            <Route path='/bdr-fact' element={<IncomeCostFact />} />
            <Route
              path='/bdr-plan-general'
              element={<IncomeCostPlanGeneral />}
            />

            <Route path='/dds-plan' element={<CashFlowPlan />} />
            <Route path='/dds-fact' element={<CashFlowFact />} />
            <Route path='/dds-totals-plan' element={<CashFlowTotalsPlan />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

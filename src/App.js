import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar';

import EmployeesGeneralPlan from './components/employees/employees-general/employees-general-plan';
import EmployeesGeneralFact from './components/employees/employees-general/employees-general-fact';

import EmployeesByProjectPlan from './components/employees/employees-by-project/employees-by-project-plan';
import EmployeesByprojectFact from './components/employees/employees-by-project/employees-by-project-fact';

import IncomeCostByProjectPlanPage from './pages/income-cost-totals-plan';
import IncomeCostByProjectFactPage from './pages/income-cost-totals-fact';
import IncomeCostTotalsPlanSplit from './components/income-cost/income-cost-totals-plan-split';
import IncomeCostTotalsFactSplit from './components/income-cost/income-cost-totals-fact-split';
import IncomeCostPlanByProject from './components/income-cost/income-cost-plan-by-project';

import CashFlowTotalsPlan from './components/cash-flow/cash-flow-plan/cash-flow-totals-plan';
import CashFlowTotalsPlanSplit from './components/cash-flow/cash-flow-plan/cash-flow-totals-plan-split';
import CashFlowTotalsFactSplit from './components/cash-flow/cash-flow-fact/cash-flow-totals-fact-split';

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

            <Route
              path='/bdr-totals-plan'
              element={<IncomeCostByProjectPlanPage />}
            />
            <Route
              path='/bdr-totals-fact'
              element={<IncomeCostByProjectFactPage />}
            />
            <Route
              path='/bdr-totals-plan-split'
              element={<IncomeCostTotalsPlanSplit />}
            />
            <Route
              path='/bdr-totals-fact-split'
              element={<IncomeCostTotalsFactSplit />}
            />
            <Route
              path='/bdr-plan-by-project'
              element={<IncomeCostPlanByProject />}
            />

            <Route path='/dds-totals-plan' element={<CashFlowTotalsPlan />} />
            <Route
              path='/dds-totals-plan-split'
              element={<CashFlowTotalsPlanSplit />}
            />
            <Route
              path='/dds-totals-fact-split'
              element={<CashFlowTotalsFactSplit />}
            />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

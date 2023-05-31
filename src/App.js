import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar';

import EmployeesGeneralPlan from './components/employees/employees-general/employees-general-plan';
import EmployeesGeneralFact from './components/employees/employees-general/employees-general-fact';

import EmployeesByProjectPlan from './components/employees/employees-by-project/employees-by-project-plan-test';
import EmployeesByProjectFact from './components/employees/employees-by-project/employees-by-project-fact-test';

import IncomeCostTotalsPlanSplit2 from './components/income-cost/income-cost-totals-plan-split-test';
import IncomeCostTotalsFactSplit2 from './components/income-cost/income-cost-totals-fact-split-test';
import IncomeCostPlanByProject2 from './components/income-cost/income-cost-plan-by-project-test';
import IncomeCostFactByProject2 from './components/income-cost/income-cost-fact-by-project-test';

import EmployeesByProjectPlanTest from './components/employees/employees-by-project/employees-by-project-plan-test-copy';

import CashFlowTotalsPlanSplit2 from './components/cash-flow/cash-flow-plan/cash-flow-totals-plan-split-test';
import CashFlowTotalsFactSplit2 from './components/cash-flow/cash-flow-fact/cash-flow-totals-fact-split-test';
import CashFlowPlanByProject2 from './components/cash-flow/cash-flow-plan-by-project-test';
import CashFlowFactByProject2 from './components/cash-flow/cash-flow-fact-by-project-test';
import SignIn from './pages/login';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='1280px'>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route element={<NavBar />}>
            <Route path='/' element={<EmployeesGeneralPlan />} />
            <Route path='/employees-fact' element={<EmployeesGeneralFact />} />

            <Route
              path='/employees-project-plan'
              element={<EmployeesByProjectPlan />}
            />
            <Route
              path='/employees-project-fact'
              element={<EmployeesByProjectFact />}
            />

            <Route
              path='/bdr-totals-plan-split'
              element={<IncomeCostTotalsPlanSplit2 />}
            />
            <Route
              path='/bdr-totals-fact-split'
              element={<IncomeCostTotalsFactSplit2 />}
            />
            <Route
              path='/bdr-plan-by-project'
              element={<IncomeCostPlanByProject2 />}
            />
            <Route
              path='/bdr-fact-by-project'
              element={<IncomeCostFactByProject2 />}
            />

            <Route
              path='/dds-totals-plan-split'
              element={<CashFlowTotalsPlanSplit2 />}
            />
            <Route
              path='/dds-totals-fact-split'
              element={<CashFlowTotalsFactSplit2 />}
            />
            <Route
              path='/dds-plan-by-project'
              element={<CashFlowPlanByProject2 />}
            />
            <Route
              path='/dds-fact-by-project'
              element={<CashFlowFactByProject2 />}
            />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

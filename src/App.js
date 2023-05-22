import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar';

import EmployeesGeneralPlan from './components/employees/employees-general/employees-general-plan';
import EmployeesGeneralFact from './components/employees/employees-general/employees-general-fact';

import EmployeesByProjectPlan from './components/employees/employees-by-project/employees-by-project-plan';
import EmployeesByprojectFact from './components/employees/employees-by-project/employees-by-project-fact';
import EmployeesByProjectPlan2 from './components/employees/employees-by-project/employees-by-project-plan-test';
import EmployeesByProjectFact2 from './components/employees/employees-by-project/employees-by-project-fact-test';

import IncomeCostByProjectPlanPage from './pages/income-cost-totals-plan';
import IncomeCostByProjectFactPage from './pages/income-cost-totals-fact';
import IncomeCostTotalsPlanSplit from './components/income-cost/income-cost-totals-plan-split';
import IncomeCostTotalsFactSplit from './components/income-cost/income-cost-totals-fact-split';
import IncomeCostPlanByProject from './components/income-cost/income-cost-plan-by-project';
import IncomeCostFactByProject from './components/income-cost/income-cost-fact-by-project';
import IncomeCostTotalsPlanSplit2 from './components/income-cost/income-cost-totals-plan-split-test';
import IncomeCostTotalsFactSplit2 from './components/income-cost/income-cost-totals-fact-split-test';
import IncomeCostPlanByProject2 from './components/income-cost/income-cost-plan-by-project-test';
import IncomeCostFactByProject2 from './components/income-cost/income-cost-fact-by-project-test';

import CashFlowByProjectPlanPage from './pages/cash-flow-totals-plan';
import CashFlowTotalsPlanSplit from './components/cash-flow/cash-flow-plan/cash-flow-totals-plan-split';
import CashFlowTotalsFactSplit from './components/cash-flow/cash-flow-fact/cash-flow-totals-fact-split';
import CashFlowByProjectFactPage from './pages/cash-flow-totals-fact/index';
import CashFlowPlanByProject from './components/cash-flow/cash-flow-plan-by-project';
import CashFlowFactByProject from './components/cash-flow/cash-flow-fact-by-project';

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
              path='/employees-project-plan-test'
              element={<EmployeesByProjectPlan2 />}
            />
            <Route
              path='/employees-project-fact-test'
              element={<EmployeesByProjectFact2 />}
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
            <Route
              path='/bdr-fact-by-project'
              element={<IncomeCostFactByProject />}
            />
            <Route
              path='/bdr-totals-plan-split-test'
              element={<IncomeCostTotalsPlanSplit2 />}
            />
            <Route
              path='/bdr-totals-fact-split-test'
              element={<IncomeCostTotalsFactSplit2 />}
            />
            <Route
              path='/bdr-plan-by-project-test'
              element={<IncomeCostPlanByProject2 />}
            />
            <Route
              path='/bdr-fact-by-project-test'
              element={<IncomeCostFactByProject2 />}
            />

            <Route
              path='/dds-totals-plan'
              element={<CashFlowByProjectPlanPage />}
            />
            <Route
              path='/dds-totals-fact'
              element={<CashFlowByProjectFactPage />}
            />
            <Route
              path='/dds-plan-by-project'
              element={<CashFlowPlanByProject />}
            />
            <Route
              path='/dds-fact-by-project'
              element={<CashFlowFactByProject />}
            />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

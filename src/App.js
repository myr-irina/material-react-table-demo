import React, { useEffect, useState, useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar';

import EmployeesGeneralPlan from './components/employees/employees-general/employees-general-plan';
import EmployeesGeneralFact from './components/employees/employees-general/employees-general-fact';

import EmployeesByProjectPlan from './components/employees/employees-by-project/employees-by-project-plan';
import EmployeesByProjectFact from './components/employees/employees-by-project/employees-by-project-fact';

import IncomeCostTotalsPlanSplit from './components/income-cost/income-cost-totals-plan-split';
import IncomeCostTotalsFactSplit from './components/income-cost/income-cost-totals-fact-split';
import IncomeCostPlanByProject from './components/income-cost/income-cost-plan-by-project';
import IncomeCostFactByProject from './components/income-cost/income-cost-fact-by-project';

import CashFlowTotalsPlanSplit from './components/cash-flow/cash-flow-plan/cash-flow-totals-plan-split';
import CashFlowTotalsFactSplit from './components/cash-flow/cash-flow-fact/cash-flow-totals-fact-split';
import CashFlowPlanByProject from './components/cash-flow/cash-flow-plan-by-project';
import CashFlowFactByProject from './components/cash-flow/cash-flow-fact-by-project';
import { UserContext, UserProvider } from './services';
import ProtectedRoute from './components/protected-route';

import SignIn from './pages/signin';
import { getUser } from './utils/auth';

export default function App() {
  return (
    <>
      {/* <UserProvider> */}
        <CssBaseline />
        <Container maxWidth='1280px'>
          <Routes>
            <Route path='/signin' element={<SignIn />} />
            <Route element={<NavBar />}>
              <Route path='/' element={<EmployeesGeneralPlan />} />
              <Route
                path='/employees-fact'
                element={<EmployeesGeneralFact />}
              />

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
                element={
                  <ProtectedRoute>
                    <IncomeCostTotalsPlanSplit />
                  </ProtectedRoute>
                }
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
                path='/dds-totals-plan-split'
                element={<CashFlowTotalsPlanSplit />}
              />
              <Route
                path='/dds-totals-fact-split'
                element={<CashFlowTotalsFactSplit />}
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
      {/* </UserProvider> */}
    </>
  );
}

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
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
import NotFound from './pages/not-found';
import ProtectedRoute from './components/protected-route';
import SignIn from './pages/signin';
import { useAuth } from './contexts/auth-provider';

export default function App() {
  const { token } = useAuth();

  return (
    <>
      <CssBaseline />
      <Container maxWidth='1280px'>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route
            element={
              <ProtectedRoute token={token}>
                <NavBar />
              </ProtectedRoute>
            }
          >
            <Route
              path='/'
              element={
                <ProtectedRoute token={token}>
                  <EmployeesGeneralPlan />
                </ProtectedRoute>
              }
            />
            <Route
              path='/employees-fact'
              element={
                <ProtectedRoute token={token}>
                  <EmployeesGeneralFact />
                </ProtectedRoute>
              }
            />

            <Route
              path='/employees-project-plan'
              element={
                <ProtectedRoute token={token}>
                  <EmployeesByProjectPlan />
                </ProtectedRoute>
              }
            />
            <Route
              path='/employees-project-fact'
              element={
                <ProtectedRoute token={token}>
                  <EmployeesByProjectFact />
                </ProtectedRoute>
              }
            />

            <Route
              path='/bdr-totals-plan-split'
              element={
                <ProtectedRoute token={token}>
                  <IncomeCostTotalsPlanSplit />
                </ProtectedRoute>
              }
            />
            <Route
              path='/bdr-totals-fact-split'
              element={
                <ProtectedRoute token={token}>
                  <IncomeCostTotalsFactSplit />
                </ProtectedRoute>
              }
            />
            <Route
              path='/bdr-plan-by-project'
              element={
                <ProtectedRoute token={token}>
                  <IncomeCostPlanByProject />
                </ProtectedRoute>
              }
            />
            <Route
              path='/bdr-fact-by-project'
              element={
                <ProtectedRoute token={token}>
                  <IncomeCostFactByProject />
                </ProtectedRoute>
              }
            />

            <Route
              path='/dds-totals-plan-split'
              element={
                <ProtectedRoute token={token}>
                  <CashFlowTotalsPlanSplit />
                </ProtectedRoute>
              }
            />
            <Route
              path='/dds-totals-fact-split'
              element={
                <ProtectedRoute token={token}>
                  <CashFlowTotalsFactSplit />
                </ProtectedRoute>
              }
            />
            <Route
              path='/dds-plan-by-project'
              element={
                <ProtectedRoute token={token}>
                  <CashFlowPlanByProject />
                </ProtectedRoute>
              }
            />
            <Route
              path='/dds-fact-by-project'
              element={
                <ProtectedRoute token={token}>
                  <CashFlowFactByProject />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

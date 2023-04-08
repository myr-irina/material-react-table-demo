import React from 'react';
import EmployeePlan from './components/table';
import TableFact from './components/table-fact/table-fact';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='1280px'>
        <Routes>
          <Route path='/' element={<EmployeePlan />} />
          {/* <Route path='/fact' element={<TableFact />} /> */}
        </Routes>
      </Container>
    </>
  );
}

import React from 'react';
import Table from './components/table';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Table />
      </Container>
    </>
  );
}

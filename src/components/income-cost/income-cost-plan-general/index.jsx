import React, { useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import MuiTableCell from '@mui/material/TableCell';
import { TableContainer } from '@mui/material';
import { Typography } from '@mui/material';

import {
  parseTableData2,
  numberWithSpaces,
  getColumnNames,
  getColumnNames2,
  findProjectByName,
  findProjectByName2,
} from '../../../utils/utils';

import data from '../../../json/income-cost-general-fact.json';
// console.log(getColumnNames(data));

function IncomeCostPlanGeneral() {
  const columnNames = (data) => {
    return Object.entries(data).map(([category, rowData]) => {
      if (!rowData) return;

      return Object.entries(rowData).map(([project, monthData]) => ({
        category,
        project,
        monthData,
      }));
    });
  };

  const parseTableData = (data) => {
    return Object.entries(data).map(([category, rowData]) => {
      if (!rowData) return;

      return Object.entries(rowData)
        .map(([project, monthData]) => ({
          category,
          project,
          monthData,
        }))
        .filter((element) => element.project === 'amounts')
        .map((data) => Object.values(data))
        .map(([project, category, monthData]) => ({
          project,
          category,
          ...monthData,
        }));
    });
  };

  const parsedColumns = columnNames(data);

  const parsedData = parseTableData(data);
  console.log(parsedData, 'parsed data');

  return (
    <TableContainer
      sx={{
        width: '100%',
        margin: '0 auto',
        overflowX: 'initial',
      }}
    >
      <Table
        stickyHeader
        sx={{
          tableLayout: 'fixed',
          margin: '0 auto',
          width: '100%',
          '& .MuiTableCell-root:first-of-type': {
            width: '170px',
          },
        }}
        size='small'
      >
        <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <TableRow>
            <TableCell component='th'>
              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: '14px',
                  overflowX: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                Название
              </Typography>
            </TableCell>
            {Object.keys(parsedColumns[1][1].monthData).map((item) => (
              <TableCell>{item}</TableCell>
            ))}
            {/* {getColumnNames2(parsedData).map((cell) => (
              <TableCell component='th'>
                <Typography
                  sx={{
                    fontWeight: '700',
                    fontSize: '14px',
                    overflowX: 'hidden',
                    whiteSpace: 'nowrap',
                    color: 'black',
                  }}
                >
                  {console.log(cell)}
                  {cell}
                </Typography>
              </TableCell>
            ))} */}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {/* <TableCell
                  
                    >
                      {rowProject[0].author}
                    </TableCell>

                    {getColumnNames(row.original).map((columnName) => {
                      const project = findProjectByName(columnName, rowProject);

                      return (
                        <TableCell
                          sx={{
                            maxWidth: '60px',
                          }}
                          key={columnName}
                        >
                         
                        </TableCell>
                      );
                    })} */}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default IncomeCostPlanGeneral;

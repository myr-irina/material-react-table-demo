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
  // getColumnNames2,
  findProjectByName,
  findProjectByName2,
} from '../../../utils/utils';

import data from '../../../json/income-cost-general-fact.json';

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

      return Object.entries(rowData).map(([project, monthData]) =>
        Object.entries(monthData).map(([month, value]) => ({
          project,
          month,
          ...value,
        }))
      );
      // .filter((element) => element.project === 'amounts');
      // .map(([project, category, monthData]) => ({
      //   project,
      //   category,
      //   ...monthData,
      // }));
    });
  };

  const filteredData = parseTableData2(data).map((projectType) =>
    projectType.filter((item) =>
      Object.values(item).some((item) => item.projectName === 'amounts')
    )
  );

  console.log({ filteredData });

  const getColumnNames2 = (data) => {
    const result = [];

    data[0].forEach((row) => {
      const columns = row.reduce((acc, item) => {
        acc.push(item.month);
        return acc;
      }, []);
      result.push(...columns);
    });

    const headers = [...new Set(result)];
    return headers;
  };

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

            {getColumnNames2(filteredData).map((cell) => (
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
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((rowProject) => {
            return (
              <>
                <TableRow>
                  <TableCell
                    sx={{
                      maxWidth: '60px',
                    }}
                  >
                    {filteredData[0].projectName}
                  </TableCell>
                  {getColumnNames2(filteredData).map((columnName) => {
                    console.log({ rowProject });
                    const project = findProjectByName2(columnName, rowProject);

                    return (
                      <TableCell
                        sx={{
                          maxWidth: '60px',
                        }}
                      >
                        {console.log({ project })}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default IncomeCostPlanGeneral;

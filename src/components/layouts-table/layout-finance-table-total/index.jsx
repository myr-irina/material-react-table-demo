import React, { useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { TableContainer } from '@mui/material';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import {
  numberWithSpaces,
  findProjectByName2,
  parseTableData3,
} from '../../../utils/utils';

import {
  StyledTableCellTotalTable,
  StyledTableRowTotalTable,
} from '../../../utils/styles';

function LayoutFinanceTableTotal({ data, isLoading, title }) {
  const filteredData = parseTableData3(data).map((projectType) =>
    projectType.filter((item) =>
      Object.values(item).some(
        (item) =>
          item.projectName === 'Итого' ||
          item.projectName === 'Доходы до уплаты налогов'
      )
    )
  );

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

  return isLoading ? (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size={24} color='inherit' />
    </Box>
  ) : (
    <>
      <Typography variant='h5' gutterBottom mb={4}>
        {title}
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          width: '100%',
          margin: '2rem auto',
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
              width: '250px',
            },
          }}
          size='small'
        >
          <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <TableRow>
              <StyledTableCellTotalTable component='th'>
                <Typography
                  sx={{
                    fontWeight: '700',
                    fontSize: '12px',
                    overflowX: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Название
                </Typography>
              </StyledTableCellTotalTable>

              {getColumnNames2(filteredData).map((cell) => (
                <StyledTableCellTotalTable component='th'>
                  {cell}
                </StyledTableCellTotalTable>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((rowProject) => {
              return (
                <>
                  <StyledTableRowTotalTable hover>
                    <StyledTableCellTotalTable
                      sx={{
                        '&:first-of-type': {
                          textAlign: 'right',
                        },
                      }}
                    >
                      {rowProject[0][0].projectType}
                    </StyledTableCellTotalTable>
                    {getColumnNames2(filteredData).map((columnName) => {
                      const project = findProjectByName2(
                        columnName,
                        rowProject[0]
                      );

                      return (
                        <StyledTableCellTotalTable>
                          {project && project.value !== null
                            ? `${numberWithSpaces(project?.value)} р.`
                            : ''}
                        </StyledTableCellTotalTable>
                      );
                    })}
                  </StyledTableRowTotalTable>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default LayoutFinanceTableTotal;

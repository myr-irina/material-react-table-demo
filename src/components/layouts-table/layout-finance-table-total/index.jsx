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
  StyledTableRowTotalTableDDS,
} from '../../../utils/styles';
import ErrorMessage from '../../error';

function LayoutFinanceTableTotal({
  data,
  isLoading,
  title,
  tableVariant,
  error,
  message,
}) {
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

  return (
    <>
      <Typography variant='h5' gutterBottom mb={4}>
        {title}
      </Typography>

      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress size={50} color='inherit' />
        </Box>
      ) : null}

      {error ? <ErrorMessage message={message} /> : null}

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
                  {tableVariant === 'dds' ? (
                    <StyledTableRowTotalTableDDS hover>
                      <StyledTableCellTotalTable>
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
                    </StyledTableRowTotalTableDDS>
                  ) : (
                    <StyledTableRowTotalTable hover>
                      <StyledTableCellTotalTable>
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
                  )}
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

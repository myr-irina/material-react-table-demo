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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:last-child td': {
    backgroundColor: 'lightGrey',
    fontWeight: 600,
  },
}));

function LayoutFinanceTableTotal({ data, isLoading }) {
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
            <StyledTableCell component='th'>
              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: '14px',
                  overflowX: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                Название
              </Typography>
            </StyledTableCell>

            {getColumnNames2(filteredData).map((cell) => (
              <StyledTableCell component='th'>
                <Typography
                  sx={{
                    fontWeight: '700',
                    fontSize: '14px',
                    overflowX: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cell}
                </Typography>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((rowProject) => {
            return (
              <>
                <StyledTableRow hover>
                  <StyledTableCell
                    sx={{
                      '&:first-of-type': {
                        textAlign: 'right',
                      },
                    }}
                  >
                    {rowProject[0][0].projectType}
                  </StyledTableCell>
                  {getColumnNames2(filteredData).map((columnName) => {
                    const project = findProjectByName2(
                      columnName,
                      rowProject[0]
                    );

                    return (
                      <StyledTableCell
                        sx={{
                          maxWidth: '60px',
                        }}
                      >
                        {project && project.value !== null
                          ? `${numberWithSpaces(project?.value)} р.`
                          : ''}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LayoutFinanceTableTotal;

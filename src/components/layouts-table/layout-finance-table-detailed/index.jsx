import React, { useMemo } from 'react';
import { Typography, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CustomSelect from '../../custom-select';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

import employeesByProjectPlanData from '../../../json/employees-by-project-plan.json';
import {
  parseTableData3,
  getColumnNames2,
  findProjectByName2,
  numberWithSpaces,
} from '../../../utils/utils';

import { categories } from '../../../utils/constants';
import { StyledTableRow3 } from '../../../utils/constants';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
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

export default function LayoutFinanceTableDetailed(data) {
  const TABLE_DATA = useMemo(() => parseTableData3(data.data), [data]);

  const [category, setCategory] = React.useState('incomes');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        <CustomSelect
          values={categories}
          value={category}
          handleChange={handleCategoryChange}
          inputLabel='Категория'
        />
      </Box>

      {TABLE_DATA.filter((value) => {
        return value[0][0].projectName === category;
      }).map((rowEntry) => (
        <Paper elevation={2}>
          <TableContainer
            sx={{
              width: '100%',
              margin: '0 auto',
              overflowX: 'initial',
              marginBottom: '50px',
              tableLayout: 'fixed',
              '& .MuiTableCell-root:first-of-type': {
                width: '250px',
              },
            }}
          >
            <Table
              stickyHeader
              sx={{
                tableLayout: 'fixed',
                margin: '0 auto',
                width: '100%',
              }}
              // size='small'
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
                        textOverflow: 'ellipsis',
                      }}
                    >
                      Название
                    </Typography>
                  </TableCell>

                  {getColumnNames2(rowEntry).map((cell) => (
                    <TableCell component='th' key={cell}>
                      <Typography
                        sx={{
                          fontWeight: '700',
                          fontSize: '14px',
                          overflowX: 'hidden',
                          whiteSpace: 'nowrap',
                          color: 'black',
                        }}
                      >
                        {cell}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rowEntry.map((rowProject) => {
                  return (
                    <>
                      <StyledTableRow>
                        <StyledTableCell
                          key={rowProject[0].projectName}
                          sx={{
                            '&:first-of-type': {
                              textAlign: 'right',
                            },
                          }}
                        >
                          {rowProject[0].projectName}
                        </StyledTableCell>
                        {getColumnNames2(rowEntry).map((columnName) => {
                          const project = findProjectByName2(
                            columnName,
                            rowProject
                          );

                          return (
                            <StyledTableCell key={columnName}>
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
        </Paper>
      ))}
    </>
  );
}

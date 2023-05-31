import React from 'react';
import { Typography, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';

import CustomSelect from '../../custom-select';
import employeesByProjectPlanData from '../../../json/employees-by-project-plan.json';
import {
  parseTableData,
  getColumnNames,
  findProjectByName,
} from '../../../utils/utils';
import { months } from '../../../utils/constants';
import { StyledTableRow3 } from '../../../utils/styles';
import {
  StyledTableCellTableDetailedHeader,
  StyledTableCellTableDetailed,
} from '../../../utils/styles.js';
import ErrorMessage from '../../error';

export default function LayoutEmployeesByProject(props) {
  const { data, title, error, isLoading, message } = props;

  const TABLE_DATA = parseTableData(data);

  const date = new Date();
  const currentMonthIndex = date.getMonth();

  const years = [{ value: '2023', label: '2023 г.' }];

  const currentMonth = months[currentMonthIndex];

  const [month, setMonth] = React.useState(currentMonth.value);
  const [year, setYear] = React.useState('2023');

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <>
      <Typography mb={4} variant='h5' gutterBottom>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <CustomSelect
          values={months}
          value={month}
          handleChange={handleMonthChange}
          inputLabel='Месяц'
        />
        <CustomSelect
          values={years}
          value={year}
          handleChange={handleYearChange}
          inputLabel='Год'
        />
      </Box>

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

      {TABLE_DATA.filter((value) => {
        return value[0]?.[0]?.month === month;
      }).map((rowEntry) => (
        <TableContainer
          sx={{
            width: '100%',
            margin: '0 auto',
            overflowX: 'initial',
            marginBottom: '10px',
          }}
        >
          <Table
            stickyHeader
            sx={{
              tableLayout: 'fixed',
              margin: '0 auto',
              width: '100%',
              '& .MuiTableCell-root': {
                padding: '5px',
              },
              '& .MuiTableCell-root:first-of-type': {
                width: '250px',
              },
            }}
          >
            <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
              <TableRow>
                <StyledTableCellTableDetailedHeader component='th'>
                  Сотрудники
                </StyledTableCellTableDetailedHeader>
                {getColumnNames(rowEntry).map((cell, ind) => (
                  <StyledTableCellTableDetailedHeader component='th' key={ind}>
                    {cell}
                  </StyledTableCellTableDetailedHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowEntry.map((rowProject) => {
                return (
                  <>
                    <StyledTableRow3 key={rowProject}>
                      <StyledTableCellTableDetailed key={rowProject}>
                        {rowProject[0].author}
                      </StyledTableCellTableDetailed>
                      {getColumnNames(rowEntry).map((columnName, index) => {
                        const project = findProjectByName(
                          columnName,
                          rowProject
                        );

                        return (
                          <TableCell key={index}>
                            {project ? (
                              <Typography
                                sx={{
                                  fontSize: '11px',
                                  '&:last-of-type': {
                                    fontWeight: 600,
                                    fontSize: 12,
                                  },
                                }}
                              >{`${project?.hours}ч. `}</Typography>
                            ) : (
                              ''
                            )}

                            {project && project?.percent !== null ? (
                              <Typography
                                sx={{ fontSize: '11px' }}
                              >{`(${project?.percent}%.)`}</Typography>
                            ) : (
                              ''
                            )}
                          </TableCell>
                        );
                      })}
                    </StyledTableRow3>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </>
  );
}

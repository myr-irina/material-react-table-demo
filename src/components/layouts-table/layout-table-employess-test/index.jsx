import React from 'react';
import { Typography, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CustomSelect from '../../custom-select';

import employeesByProjectPlanData from '../../../json/employees-by-project-plan.json';
import {
  parseTableData,
  getColumnNames,
  findProjectByName,
} from '../../../utils/utils';

import { months } from '../../../utils/constants';

export default function LayoutEmployeesByProjectTest(props) {
  const { data } = props;

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

  // const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   '&:nth-of-type(even)': {
  //     backgroundColor: '#e3e2e2',
  //   },
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: 'lightgrey',
  //   },
  //   // hide last border
  //   '&:last-child': {
  //     borderBottom: '5px solid black',
  //   },
  //   '&:first-child': {
  //     borderTop: '5px solid black',
  //   },
  // }));

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
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

      {TABLE_DATA.filter((value) => {
        return value[0][0].month === month;
      }).map((rowEntry) => (
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
          >
            <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
              <TableRow>
                <TableCell sx={{ border: 'none' }}>
                  {rowEntry[0]?.[0]?.month}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    '&:first-of-type': {
                      textAlign: 'right',
                    },
                  }}
                  component='th'
                >
                  <Typography
                    sx={{
                      fontWeight: '700',
                      fontSize: '14px',
                      overflowX: 'hidden',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Сотрудники
                  </Typography>
                </TableCell>
                {getColumnNames(rowEntry).map((cell, ind) => (
                  <TableCell component='th' key={ind}>
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
                    <TableRow>
                      <TableCell
                        sx={{
                          '&:first-of-type': {
                            textAlign: 'right',
                          },
                        }}
                      >
                        {rowProject[0].author}
                      </TableCell>
                      {getColumnNames(rowEntry).map((columnName) => {
                        const project = findProjectByName(
                          columnName,
                          rowProject
                        );
                        return (
                          <TableCell>
                            {project
                              ? `${project?.hours}ч. ${
                                  project?.percent !== null
                                    ? `(${project?.percent}%)`
                                    : ''
                                }`
                              : ''}
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
      ))}
    </>
  );
}

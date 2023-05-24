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
  parseTableData5,
  getColumnNames2,
  findProjectByName2,
  numberWithSpaces,
} from '../../../utils/utils';

import {
  StyledTableCellTableDetailed,
  StyledTableRowTableDetailed,
} from '../../../utils/styles';

export default function LayoutFinanceTableDetailed(props) {
  const { data, categories } = props;
  console.log({ data });

  const TABLE_DATA = useMemo(() => parseTableData5(data), [data]);

  console.log({ TABLE_DATA });

  const [category, setCategory] = React.useState('Доходы');

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
        return value[0][0].projectType === category;
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
                        fontSize: '12px',
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
                          fontSize: '12px',
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
                      <StyledTableRowTableDetailed>
                        <StyledTableCellTableDetailed
                          key={rowProject[0].projectName}
                          sx={{
                            '&:first-of-type': {
                              textAlign: 'right',
                            },
                          }}
                        >
                          {rowProject[0].projectName}
                        </StyledTableCellTableDetailed>
                        {getColumnNames2(rowEntry).map((columnName) => {
                          const project = findProjectByName2(
                            columnName,
                            rowProject
                          );

                          return (
                            <StyledTableCellTableDetailed key={columnName}>
                              {project && project.value !== null
                                ? `${numberWithSpaces(project?.value)} р.`
                                : ''}
                            </StyledTableCellTableDetailed>
                          );
                        })}
                      </StyledTableRowTableDetailed>
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

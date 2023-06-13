import React, { useMemo } from 'react';
import { Typography, Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { v4 as uuidv4 } from 'uuid';

import CustomSelect from '../../custom-select';
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
import ErrorMessage from '../../error';

export default function LayoutFinanceTableDetailed(props) {
  const { data, categories, message, error, isLoading } = props;

  const TABLE_DATA = useMemo(() => parseTableData5(data), [data]);

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
            key={uuidv4()}
          >
            <Table
              stickyHeader
              sx={{
                tableLayout: 'fixed',
                margin: '0 auto',
                width: '100%',
              }}
            >
              <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
                <TableRow key={uuidv4()}>
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
                    <TableCell component='th' key={uuidv4()}>
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
                      <StyledTableRowTableDetailed key={uuidv4()}>
                        <StyledTableCellTableDetailed
                          key={rowProject[0].projectName}
                        >
                          {rowProject[0].projectName}
                        </StyledTableCellTableDetailed>
                        {getColumnNames2(rowEntry).map((columnName) => {
                          const project = findProjectByName2(
                            columnName,
                            rowProject
                          );

                          return (
                            <StyledTableCellTableDetailed key={uuidv4()}>
                              {project && project.value !== null
                                ? `${numberWithSpaces(project?.value)} р.`
                                : null}
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

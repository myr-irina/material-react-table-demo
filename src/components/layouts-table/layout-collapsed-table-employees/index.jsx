import React, { useState, useMemo, useEffect, useRef } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import MuiTableCell from '@mui/material/TableCell';
import { StyledTableRow } from '../../../utils/constants';

import {
  parseTableData,
  getColumnNames,
  findProjectByName,
  getColumnNames2,
} from '../../../utils/utils';

export default function LayoutCollapsedTableEmployees(data) {
  // const [projectPlanHours, setProjectPlanHours] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   getProjectPlanHours()
  //     .then((data) => {
  //       setProjectPlanHours(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const TABLE_DATA = useMemo(() => parseTableData(data.data), [data.data]);

  const columns = [
    {
      header: data.header,
      id: 'header1',
      accessorFn: (data) => {
        return data[0][0].month;
      },
      size: 100,
    },
    {
      header: ' ',
      id: 'header2',
      size: 50,
    },
    {
      header: ' ',
      id: 'header3',
      size: 50,
    },
    {
      header: ' ',
      id: 'header4',
      size: 50,
    },
    {
      header: ' ',
      id: 'header5',
      size: 50,
    },
    {
      header: ' ',
      id: 'header6',
      size: 50,
    },
    {
      header: ' ',
      size: 50,
      id: 'header7',
    },
    {
      header: ' ',
      size: 50,
      id: 'header8',
    },
    {
      header: ' ',
      size: 30,
      id: 'header9',
    },
    {
      header: ' ',
      size: 50,
      id: 'header10',
    },
    {
      header: ' ',
      size: 50,
      id: 'header11',
    },
    {
      header: ' ',
      size: 50,
      id: 'header12',
    },
    {
      header: ' ',
      size: 50,
      id: 'header13',
    },
    {
      header: ' ',
      size: 50,
      id: 'header14',
    },
    {
      header: ' ',
      size: 50,
      id: 'header15',
    },
    {
      header: ' ',
      size: 50,
      id: 'header16',
    },
    {
      header: ' ',
      size: 50,
      id: 'header17',
    },
    {
      header: ' ',
      size: 50,
      id: 'header18',
    },
    {
      header: ' ',
      size: 50,
      id: 'header19',
    },
    {
      header: ' ',
      size: 50,
      id: 'header20',
    },
    {
      header: ' ',
      size: 50,
      id: 'header21',
    },
    {
      header: ' ',
      size: 50,
      id: 'header22',
    },
  ];

  return (
    <MaterialReactTable
      columns={columns}
      data={TABLE_DATA}
      enableStickyHeader
      enableColumnFilters={false}
      enableHiding={false}
      enableDensityToggle={false}
      enableColumnActions={false}
      muiTableProps={{
        sx: {
          tableLayout: 'fixed',
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          width: '50px',
        },
      }}
      initialState={{
        density: 'compact',
        sorting: [{ id: 'name', desc: false }],
        pagination: { pageSize: 25, pageIndex: 0 },
      }}
      muiTablePaginationProps={{
        rowsPerPageOptions: [5, 10, 20, 25],
        labelRowsPerPage: 'Количество видимых строк',
      }}
      renderTopToolbarCustomActions={() => {
        return (
          <Typography variant='h5' mb='15px'>
            Таблица рабочего времени (план по проектам)
          </Typography>
        );
      }}
      renderDetailPanel={({ row }) => (
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
              <StyledTableRow>
                <TableCell
                  // sx={{
                  //   minWidth: '60px',
                  // }}
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
                {getColumnNames(row.original).map((cell) => (
                  <TableCell
                    // sx={{
                    //   maxWidth: '60px',
                    // }}
                    component='th'
                    key={cell}
                  >
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
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {row.original.map((rowProject) => {
                return (
                  <StyledTableRow key={rowProject[0].author}>
                    <TableCell
                      // sx={{
                      //   maxWidth: '60px',
                      // }}
                      key={rowProject[0].author}
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
                          {project
                            ? `${project?.hours}ч. ${
                                project?.percent !== null
                                  ? `${project?.percent}%`
                                  : ''
                              }`
                            : ''}
                        </TableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
}

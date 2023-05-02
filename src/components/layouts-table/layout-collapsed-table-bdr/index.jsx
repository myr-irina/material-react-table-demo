import React, { useState, useMemo, useEffect, useRef } from 'react';
import MaterialReactTable from 'material-react-table';

import { TableContainer } from '@mui/material';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import MuiTableCell from '@mui/material/TableCell';

import { numberWithSpaces, parseTableData2 } from '../../../utils/utils';

import {
  parseTableData3,
  getColumnNames2,
  findProjectByName2,
} from '../../../utils/utils';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
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

function LayoutCollapsedTableBdr(data) {
  const TABLE_DATA = useMemo(() => parseTableData3(data.data), [data]);

  const columns = useMemo(
    () => [
      {
        accessorFn: (data) => {
          return data[0][0].projectType;
        },
        id: 'costType',
        header: 'Название',
      },
      {
        header: ' ',
        size: 50,
        id: 'costType1',
      },
      {
        header: ' ',
        size: 50,
        id: 'costType2',
      },
      {
        header: ' ',
        size: 50,
        id: 'costType3',
      },
      {
        header: ' ',
        size: 50,
        id: 'costType4',
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={TABLE_DATA}
      enableStickyHeader
      initialState={{
        expanded: true,
      }}
      enableExpanding
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

                {getColumnNames2(row.original).map((cell) => (
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
              {row.original.map((rowProject) => {
                return (
                  <>
                    <StyledTableRow>
                      <StyledTableCell key={rowProject[0].projectName}>
                        {rowProject[0].projectName}
                      </StyledTableCell>
                      {getColumnNames2(row.original).map((columnName) => {
                        const project = findProjectByName2(
                          columnName,
                          rowProject
                        );

                        return (
                          <StyledTableCell
                            sx={{
                              maxWidth: '60px',
                            }}
                            key={columnName}
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
      )}
    />
  );
}

export default LayoutCollapsedTableBdr;

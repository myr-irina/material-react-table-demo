import React, { useState, useMemo, useEffect, useRef } from 'react';
import MaterialReactTable from 'material-react-table';
import data from '../../../json/income-cost-general-plan.json';
import { TableContainer } from '@mui/material';
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import MuiTableCell from '@mui/material/TableCell';

import { numberWithSpaces } from '../../../utils/utils';
import { StyledTableRow } from '../../../utils/constants';

import {
  parseTableData2,
  getColumnNames2,
  findProjectByName2,
} from '../../../utils/utils';

function IncomeCostPlan() {
  const TABLE_DATA = useMemo(() => parseTableData2(data), []);

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
                <TableCell component='th'>
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
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {row.original.map((rowProject) => {
                return (
                  <StyledTableRow>
                    <TableCell key={rowProject[0].projectName}>
                      {rowProject[0].projectName}
                    </TableCell>
                    {getColumnNames2(row.original).map((columnName) => {
                      const project = findProjectByName2(
                        columnName,
                        rowProject
                      );

                      return (
                        <TableCell
                          sx={{
                            maxWidth: '60px',
                          }}
                          key={columnName}
                        >
                          {project && project.value !== null
                            ? numberWithSpaces(project?.value)
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

export default IncomeCostPlan;

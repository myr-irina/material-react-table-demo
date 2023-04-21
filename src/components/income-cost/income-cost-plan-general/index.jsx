import React, { useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import MuiTableCell from '@mui/material/TableCell';
import { TableContainer } from '@mui/material';
import { Typography } from '@mui/material';

import {
  parseTableData2,
  getColumnNames,
  getColumnNames2,
  findProjectByName,
  findProjectByName2,
} from '../../../utils/utils';

import data from '../../../json/income-cost-general-plan.json';

function IncomeCostPlanGeneral() {
  const TABLE_DATA = useMemo(() => parseTableData2(data), []);
  console.log({ TABLE_DATA });

  const months = TABLE_DATA.map((projectType) =>
    projectType.map((item) => Object.values(item)[0])
  );

  console.log(months);

  return (
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
                Сотрудники
              </Typography>
            </TableCell>

            {getColumnNames2(TABLE_DATA).map((cell) => (
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
                  {console.log(cell, 'cell')}
                  {cell}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {TABLE_DATA.map((rowProject) => {
            return (
              <>
                <TableRow>
                  {/* <TableCell key={rowProject[0].projectName}>
                    {rowProject[0].projectName}
                  </TableCell>
                  {getColumnNames2(data.original).map((columnName) => {
                    const project = findProjectByName2(columnName, rowProject);

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
                  })} */}
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default IncomeCostPlanGeneral;

import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Tab, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';

import { parseTableData4 } from '../../../utils/utils';

import AmountsTable from './amounts-table';
import PersonalTable from './personal-table';
import { numberWithSpaces, MONTHS, HEADER_MONTHS } from '../../../utils/utils';

function LayoutCollapsedTableProject({ data, title, isLoading, columns }) {
  const TABLE_DATA = useMemo(() => parseTableData4(data), [data]);

  return (
    <MaterialReactTable
      columns={columns}
      data={TABLE_DATA ?? []}
      state={{ isLoading }}
      enableStickyHeader
      enableExpanding
      initialState={{
        expanded: {
          1: true,
        },
      }}
      // displayColumnDefOptions={{
      //   'mrt-row-expand': {
      //     muiTableHeadCellProps: {
      //       align: 'left',
      //       fontSize: '18px',
      //     },
      //     muiTableBodyCellProps: {
      //       align: 'left',
      //     },
      //   },
      // }}
      renderDetailPanel={({ row }) => (
        <TableContainer
          sx={{
            width: '100%',
            margin: '0 auto',
            overflowX: 'initial',
          }}
          // muiTableHeadCellProps={{
          //   sx: {
          //     '& .Mui-TableHeadCell-Content-Labels': {
          //       padding: '0px',
          //       fontSize: '18px',
          //     },
          //     '& .MuiBox-root': {
          //       padding: '0px',
          //       fontSize: '18px',
          //     },
          //     '& .Mui-TableHeadCell-Content-Wrapper': {
          //       fontSize: '18px',
          //     },
          //     fontWeight: 'bold',
          //     fontSize: '18px',
          //   },
          // }}
        >
          {row.original.map((row) => {
            const amountsRow = row?.find(({ month }) => month === 'amounts');

            if (!row) return;
            if (row[0]?.projectName === 'personal')
              return <PersonalTable data={row} />;
            if (row[0]?.projectName === 'amounts')
              return <AmountsTable data={row} />;

            return (
              <Table
                stickyHeader
                size='medium'
                sx={{
                  tableLayout: 'fixed',
                  width: '100%',
                  margin: '0 auto',
                  '& .MuiTableCell-root:first-of-type': {
                    width: '250px',
                  },
                }}
              >
                <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  <TableRow>
                    <TableCell></TableCell>
                    {HEADER_MONTHS.map((month) => (
                      <TableCell key={month}>
                        <Typography
                          sx={{
                            fontWeight: '700',
                            fontSize: '18px',
                            overflowX: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {month}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell key={row[0]?.projectName}>
                      <Typography
                        sx={{
                          fontWeight: '700',
                          fontSize: '16px',
                          overflowX: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {row[0]?.projectName}
                      </Typography>
                    </TableCell>

                    {MONTHS.map((cell) => (
                      <TableCell component='th' key={cell}>
                        <Typography
                          sx={{
                            fontWeight: '700',
                            fontSize: '16px',
                            overflowX: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            color: 'transparent',
                          }}
                        >
                          {cell}
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.map((tableRow) => {
                    if (tableRow.month === 'amounts') return;
                    return (
                      <TableRow>
                        <TableCell
                          key={tableRow.month}
                          sx={{
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {tableRow.month}
                        </TableCell>

                        {MONTHS.map((month) => {
                          const val = tableRow.value[month];
                          return (
                            <TableCell key={month}>
                              {val ? `${numberWithSpaces(val)} р.` : ''}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}

                  <TableRow>
                    <TableCell></TableCell>
                    {MONTHS.map((month) => {
                      const val = amountsRow?.value[month];

                      if (!val) return <TableCell></TableCell>;
                      return (
                        <TableCell key={month}>
                          <Typography
                            sx={{ fontWeight: 'bold', fontSize: '14px' }}
                          >
                            {val && val !== null
                              ? `${numberWithSpaces(Math.trunc(val))} р.`
                              : ''}
                          </Typography>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableBody>
              </Table>
            );
          })}
        </TableContainer>
      )}
    />
  );
}

export default LayoutCollapsedTableProject;

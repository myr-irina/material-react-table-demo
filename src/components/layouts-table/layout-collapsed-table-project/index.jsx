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

  // const columns = useMemo(
  //   () => [
  //     {
  //       accessorFn: (data) => {
  //         return data?.[3]?.[0]?.projectType;
  //       },
  //       id: 'costType',
  //       header: title,
  //       muiTableHeadCellProps: {
  //         align: 'left',
  //       },
  //     },
  //   ],
  //   []
  // );

  return (
    <MaterialReactTable
      columns={columns}
      data={TABLE_DATA ?? []}
      state={{ isLoading }}
      // state={{ showProgressBars: true }}
      // enableStickyHeader
      enableExpanding
      initialState={{
        expanded: {
          0: true,
        },
      }}
      renderDetailPanel={({ row }) => (
        <TableContainer
          sx={{
            width: '100%',
            margin: '0 auto',
            overflowX: 'initial',
          }}
          // muiTableHeadCellProps={{
          //   sx: {
          //     alignItems: 'center',
          //     '& .Mui-TableHeadCell-Content-Labels': {
          //       padding: '0px',
          //     },
          //     '& .MuiBox-root': {
          //       padding: '0px',
          //     },
          //     backgroundColor: 'white',
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
                sx={{
                  tableLayout: 'fixed',
                  margin: '0 auto',
                  width: '100%',
                  '& .MuiTableCell-root:first-of-type': {
                    width: '250px',
                  },
                }}
              >
                <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  <TableRow>
                    <TableCell></TableCell>
                    {HEADER_MONTHS.map((month) => (
                      <TableCell>
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
                    <TableCell>
                      <Typography
                        sx={{
                          fontWeight: '700',
                          fontSize: '18px',
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
                            fontSize: '14px',
                            overflowX: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {/* {cell} */}
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
                        <TableCell>{tableRow.month}</TableCell>

                        {MONTHS.map((month) => {
                          const val = tableRow.value[month];
                          return (
                            <TableCell>
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
                        <TableCell>
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

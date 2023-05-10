import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { parseTableData4 } from '../../../utils/utils';

import AmountsTable from './amounts-table';
import PersonalTable from './personal-table';
import { numberWithSpaces, MONTHS } from '../../../utils/utils';

function LayoutCollapsedTableProject({ data, title }) {
  const TABLE_DATA = useMemo(() => parseTableData4(data), [data]);

  const columns = useMemo(
    () => [
      {
        accessorFn: (data) => {
          return data?.[3]?.[0].projectType;
        },
        id: 'costType',
        header: title,
        muiTableHeadCellProps: {
          align: 'left',
        },
      },
      // {
      //   header: ' ',
      //   size: 50,
      //   id: 'costType1',
      // },
      // {
      //   header: ' ',
      //   size: 50,
      //   id: 'costType2',
      // },
      // {
      //   header: ' ',
      //   size: 50,
      //   id: 'costType3',
      // },
      // {
      //   header: ' ',
      //   size: 50,
      //   id: 'costType4',
      // },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={TABLE_DATA}
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
            // '&.MuiTable-root': {
            //   width: 0,
            // },
          }}
          muiTableHeadCellProps={{
            sx: {
              alignItems: 'center',
              '& .Mui-TableHeadCell-Content-Labels': {
                padding: '0px',
              },
              '& .MuiBox-root': {
                padding: '0px',
              },
              backgroundColor: 'white',
            },
          }}
        >
          {row.original.map((row) => {
            if (!row) return;

            if (row[0].projectName === 'personal')
              return <PersonalTable data={row} />;
            if (row[0].projectName === 'amounts')
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
                // size='small'
              >
                <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  <TableRow>
                    <TableCell>
                      <Typography
                        sx={{
                          fontWeight: '700',
                          fontSize: '14px',
                          overflowX: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {row[0].projectName}
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
                  {row.map((tableRow) => {
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

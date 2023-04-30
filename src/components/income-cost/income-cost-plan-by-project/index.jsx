import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { parseTableData2 } from '../../../utils/utils';

import data from '../../../json/bdr-by-project-plan.json';

function IncomeCostPlanByProject() {
  const TABLE_DATA = useMemo(() => parseTableData2(data), []);
  // console.log({ TABLE_DATA });

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
          {row.original.map((row) => {
            if (row[0].projectName === 'amounts') return;
            return (
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
                    <TableCell>
                      <Typography
                        sx={{
                          fontWeight: '700',
                          fontSize: '14px',
                          overflowX: 'hidden',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {row[0].projectName}
                      </Typography>
                    </TableCell>
                    {Object.keys(row[0].value).map((cell) => (
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
                        {Object.values(tableRow.value).map((val) => (
                          <TableCell>{val}</TableCell>
                        ))}
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

export default IncomeCostPlanByProject;

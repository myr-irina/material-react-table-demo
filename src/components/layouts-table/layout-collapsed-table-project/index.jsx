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

import data from '../../../json/bdr-by-project-plan copy.json';
import AmountsTable from './amounts-table';
import PersonalTable from './personal-table';
import { numberWithSpaces } from '../../../utils/utils';

function LayoutCollapsedTableProject({ data }) {
  const TABLE_DATA = useMemo(() => parseTableData4(data), [data]);

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
      enableExpanding
      initialState={{
        expanded: true,
      }}
      renderDetailPanel={({ row }) => (
        <TableContainer
          sx={{
            width: '100%',
            margin: '0 auto',
            overflowX: 'initial',
          }}
        >
          {row.original.map((row) => {
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
                          <TableCell>
                            {val ? `${numberWithSpaces(val)} р.` : ''}
                          </TableCell>
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

export default LayoutCollapsedTableProject;

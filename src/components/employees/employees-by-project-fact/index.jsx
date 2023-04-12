import React, { useMemo, useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import { employeesByProjectFactData } from './../../../json/employees-by-project-fact';

import { getProjectFactHours } from '../../../utils/api-requests';

const TABLE_HEAD = [
  'Сотрудник',
  'AUK INT',
  'LIA',
  '33D',
  'INT',
  'PSB-17',
  'TEH',
  'SRP',
  'GOR',
  'Domex 3D',
  'OSL',
  'BRK',
  'HYD2.1',
  'Отпуск',
  'REN-3',
  'REN-2',
  'PSB-6 Фасады ЦОД',
  'VOL',
  'NEG',
  'TNK',
  'PSB-16',
  'Сумма',
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function EmployeesByProjectFact() {
  const [projectFactHours, setProjectFactHours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProjectFactHours()
      .then((data) => {
        setProjectFactHours(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const preparedData = [];

  for (let key in employeesByProjectFactData) {
    for (let key2 in employeesByProjectFactData[key]) {
      preparedData.push({ [key2]: employeesByProjectFactData[key][key2] });
    }
  }

  const preparedData2 = [];
  for (let key in projectFactHours) {
    preparedData2.push({ [key]: projectFactHours[key] });
  }

  const columns = [
    {
      header: 'Month',
      accessorFn: (row) => Object.keys(row),
    },
    {
      header: 'AUK INT',
    },
    {
      header: 'LIA',
    },
    {
      header: '33D',
    },
    {
      header: 'INT',
    },
    {
      header: 'PSB-17',
    },
    {
      header: 'TEH',
    },
    {
      header: 'SRP',
    },
    {
      header: 'GOR',
    },
    {
      header: 'Domex 3D',
    },
    {
      header: 'OSL',
    },
    {
      header: 'BRK',
    },
    {
      header: 'HYD2.1',
    },
    {
      header: 'Отпуск',
    },
    {
      header: 'REN-3',
    },
    {
      header: 'REN-2',
    },
    {
      header: 'PSB-6 Фасады ЦОД',
    },
    {
      header: 'VOL',
    },
    {
      header: 'NEG',
    },
    {
      header: 'TNK',
    },
    {
      header: 'PSB-16',
    },
    {
      header: 'Сумма',
    },
  ];

  return (
    <MaterialReactTable
      columns={columns}
      data={preparedData2}
      enableStickyHeader
      enableColumnFilters={false}
      enableHiding={false}
      enableDensityToggle={false}
      renderTopToolbarCustomActions={() => {
        return (
          <Typography variant='h5' mb='15px'>
            Таблица рабочего времени (факт по проектам)
          </Typography>
        );
      }}
      renderDetailPanel={({ row }) => (
        // <Box sx={{ width: '100%' }}>
        <Table sx={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              {TABLE_HEAD.map((cell, ind) => (
                <TableCell key={ind}>
                  <Typography sx={{ fontWeight: '700', fontSize: '14px' }}>
                    {cell}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(row.original).map((data) => {
              if (data === null) return;

              const keys = Object.keys(data);
              const values = Object.values(data);

              let dataResult = [
                ...Array(values.length).fill([
                  ...Array(TABLE_HEAD.length - 2).fill(''),
                ]),
              ];

              dataResult = dataResult.map((row, i) => [keys[i], ...row]);

              values.forEach((projects, ind) => {
                Object.entries(projects).forEach(([name, val]) => {
                  const index = TABLE_HEAD.indexOf(name);
                  if (index !== -1) {
                    dataResult[ind].splice(index, 1, val);
                  }

                  if (name === 'amount_values') {
                    dataResult[ind].push(val);
                  }
                });
              });

              function showProps(obj) {
                let result = '';
                for (let key in obj) {
                  if (obj.hasOwnProperty(key)) {
                    result = `${obj['hours']}ч. (${obj['percent']}%)`;
                  }
                }
                return result;
              }

              return dataResult.map((row, ind) => (
                <StyledTableRow key={ind}>
                  <TableCell>{row[0]}</TableCell>
                  {row
                    .splice(1)
                    .map(
                      (cell, ind) =>
                        cell !== null && (
                          <TableCell key={ind}>{showProps(cell)}</TableCell>
                        )
                    )}
                  <TableCell>{row[row.length - 1].hours}</TableCell>
                </StyledTableRow>
              ));
            })}
          </TableBody>
        </Table>
        // </Box>
      )}
      // positionExpandColumn='last'
    />
  );
}

export default EmployeesByProjectFact;

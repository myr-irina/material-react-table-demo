import React, { useMemo, useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { employeesByProjectFactData } from './../../../json/employees-by-project-fact';

import { getProjectFactHours } from '../../../utils/api-requests';

const TABLE_HEAD = [
  'Сотрудник',
  'GOR',
  'PSB-17',
  'AUK INT',
  '33D',
  'INT',
  'LIA',
  'TEH',
  'SRP',
  'Domex 3D',
  'Сумма',
];
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
        <Box>
          <Table>
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
                // const isEmptyObj = !Object.values(data).length;

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
                  <TableRow key={ind}>
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
                  </TableRow>
                ));
              })}
            </TableBody>
          </Table>
        </Box>
      )}
      positionExpandColumn='last'
    />
  );
}

export default EmployeesByProjectFact;

import React, { useEffect, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material';

import data from '../../../json/employees-general-fact.json';

export default function EmployeesGeneralFact() {
  console.log(
    data.map((item) =>
      Object.entries(item).map((item) => item[1] !== 0 && item[1])
    )
  );

  const isObject = (item) => item instanceof Object;

  console.log([
    Object.values(data).map((item) => Object.values(item)),
    // .reduce((a, b) => a.concat(b), []),
  ]);

  const result = Object.keys(data).map((key) => [key, data[key]]);
  console.log(result);

  //   if (
  //     typeof yourVariable === 'object' &&
  //     !Array.isArray(yourVariable) &&
  //     yourVariable !== null
  // ) {
  //     executeSomeCode();
  // }

  // const getAllValues = (val) =>
  //   val instanceof Object ? Object.values(val).flatMap(getAllValues) : [val];

  // const valuesFromObj = getAllValues(data);
  // console.log(
  //   valuesFromObj.map((item) =>
  //     item !== null && typeof item !== 'string' ? item : null
  //   )
  // );
  // const [workingHours, setWorkingHours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   getWorkingHoursPlan()
  //     .then((data) => {
  //       setWorkingHours(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  function pickHex(color1, color2, weight) {
    var w1 = weight;
    var w2 = 1 - w1;
    var rgb = [
      Math.round(color1[0] * w1 + color2[0] * w2),
      Math.round(color1[1] * w1 + color2[1] * w2),
      Math.round(color1[2] * w1 + color2[2] * w2),
    ];
    return rgb;
  }

  const green = [0, 255, 0];
  const white = [255, 255, 255];
  const red = [255, 0, 0];

  const StyledBoxWithData = styled(Box)(({ theme, customColor }) => ({
    borderRadius: '0.25rem',
    color: 'white',
    maxWidth: '4.4rem',
    padding: '0.2rem',
    display: 'flex',
    flexDirection: 'column',
  }));

  const columns = useMemo(
    () => [
      {
        header: 'Сотрудники',
        id: 'name',
        accessorKey: 'staff',
        sortDescFirst: false,
      },
      {
        header: 'Январь',
        enableColumnActions: false,
        size: 50,
        accessorFn: (row) =>
          row.january !== null
            ? `${row?.january?.hours}ч. (${row?.january?.percent}%)`
            : '',

        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Февраль',
        size: 50,
        enableColumnActions: false,
        accessorFn: (row) =>
          row.february !== null
            ? `${row?.february?.hours}ч. (${row?.february?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Март',
        enableColumnActions: false,
        accessorFn: (row) =>
          row.march !== null
            ? `${row?.march?.hours}ч. (${row?.march?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Апрель',
        enableColumnActions: false,
        accessorFn: (row) =>
          row.april !== null
            ? `${row?.april?.hours}ч. (${row?.april?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Май',
        enableColumnActions: false,
        accessorFn: (row) =>
          row.may !== null
            ? `${row?.may?.hours}ч. (${row?.may?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Июнь',
        enableColumnActions: false,
        accessorFn: (row) =>
          row.june !== null
            ? `${row?.june?.hours}ч. (${row?.june?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Июль',
        enableColumnActions: false,
        accessorFn: (row) =>
          row.july !== null
            ? `${row?.july?.hours}ч. (${row?.july?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Август',
        enableColumnActions: false,
        accessorFn: (row) =>
          row.august !== null
            ? `${row?.august?.hours}ч. (${row?.august?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Сентябрь',
        enableColumnActions: false,
        accessorFn: (row) =>
          row.september !== null
            ? `${row?.september?.hours}ч. (${row?.september?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Октябрь',
        enableColumnActions: false,
        accessorFn: (row) =>
          row.october !== null
            ? `${row?.october?.hours}ч. (${row?.october?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Ноябрь',
        enableColumnActions: false,
        accessorFn: (row) =>
          row.november !== null
            ? `${row?.november?.hours}ч. (${row?.november?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Декабрь',
        enableColumnActions: false,
        accessorFn: (row) =>
          row.december !== null
            ? `${row?.december?.hours}ч. (${row?.december?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
    ],
    []
  );

  return (
    <Box sx={{ margin: '20px auto' }}>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableStickyHeader
        initialState={{
          density: 'compact',
          sorting: [{ id: 'name', desc: false }],
          pagination: { pageSize: 25, pageIndex: 0 },
        }}
        muiTablePaginationProps={{
          rowsPerPageOptions: [5, 10, 20, 25],
          labelRowsPerPage: 'Количество видимых строк',
        }}
        muiTableProps={{
          sx: {
            tableLayout: 'fixed',
          },
        }}
        enableColumnFilters={false}
        enableHiding={false}
        enableDensityToggle={false}
        renderTopToolbarCustomActions={() => {
          return (
            <Typography variant='h5' mb='15px'>
              Таблица рабочего времени (общий факт)
            </Typography>
          );
        }}

        // enableColumnActions={false}

        // renderTopToolbar={() => {
        //   <Typography> Create New Account</Typography>;
        // }}
      />
    </Box>
  );
}

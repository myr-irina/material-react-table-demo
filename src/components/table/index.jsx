import React, { useEffect, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';
import data from './../../json/employees-general-plan.json';
import { styled } from '@mui/material';

import { getWorkingHoursPlan } from '../../utils/api-requests';

export default function Table() {
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

  const StyledBoxWithData = styled(Box)(({ theme, customColor }) => ({
    backgroundColor: customColor,
    borderRadius: '0.25rem',
    color: 'black',
    maxWidth: '4.4rem',
    padding: '0.2rem',
    display: 'flex',
    flexDirection: 'column',
  }));

  const StyledBoxWithNoData = styled(Box)(({ theme }) => ({
    backgroundColor: 'transparent',
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
    <Box sx={{ width: '90%', margin: '20px auto' }}>
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
            <Typography variant='h4' mb='15px'>
              Сотрудники общий план
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
